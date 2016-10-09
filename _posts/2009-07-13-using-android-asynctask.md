---
layout: post
title: "using android AsyncTask"
---
using android AsyncTask
===
While coding for [CuTewit][0], I have refined the multi threading framework of the app couple of times. In this post I am documenting what I have learnt from the experiences. The intial part of the post, describes the old way of coding asynchronous tasks for Android, while the later part talks about how to make use of android.os.AsyncTask and my enhancements to it.  
  
If you have been coding for mobile platforms you must know the importance of multi-threading. Network access is a very basic requirement of nearly all mobile apps. So when the app is fetching data over network (or doing any high latency task), the GUI's main loop can't be left unattended. That's why time consuming jobs have to be performed in a separate thread.  
  
Android GUI is no different. If you want to see the basic approach taken to solve this problem, then read this [post][1]. I used a similar approach in early releases of [CuTewit][0]. It was somewhat similar to the AsyncTwitter implementation that Twitter4J had. As you will find out after going through the article, that it's not the simplest way to code a multi-threaded app. The big problem I faced with that design was, the background task is not represented by a well defined entity. So whenever one has to add a new background task, one has to make code changes at many places.  
  
Another approach that was available was the [UserTask example][2]. This eventually became part of the platform and is available as [android.os.AsyncTask][3].  
  
AsyncTask makes the job of coding asynchronous tasks very manageable. You can code your asynchronous task as a derivative of AsyncTask and mainly have to override two methods. One method (onPostExecute) runs on the GUI thread, while the other methods runs on the background thread (doInBackground). These are the only two places where you have to add code, when it comes to coding a new async task.  
  
Under the hoods, AsyncTask implements a similar strategy as described in first link above (using MessageHandler to communicate with GUI thread). AsyncTask maintains a static threadpool, which contains a preset number of threads. The Async tasks that you schedule are executed on one of these threads. You as an app programmer shouldn't make any assumptions about the size of the threadpool. You must use proper thread-safe techniques while coding your app. However, I observed something that made me dive into the AsyncTask's thread pool implementation. I was scheduling more than one AsyncTask in the background and I found that they were not executing simultaneously but one after the other (they were still executing in a background thread, but it appeared to be the only thread). After a while I figured the threadpool is hardcoded to have only single background thread. After a [discussion][4] on the mailing list, it turned out as a bug and will be fixed in future drop. In the meanwhile I went ahead with the workaround. Since the AsyncTask is a single file implementation, I just copied the AsyncTask.java into my project (named it UserTask.java) and made changes so that I could get 4 concurrent background threads to execute my background tasks. You can check the discussion for exact details of the workaround.  
  
Starting from CuTewit release 2.0, I have extended the AsyncTask.java (i.e. UserTask.java in my project) to simplify my app code and avoid code duplication at some places. Here is what I have learnt from the experience, maybe you will find it useful too.  
  
The additions I did to AsyncTask code, are basically the following two:  
1\. Payload  
2\. Retry logic  
  
Let me now elaborate.  
  
1\. Payload  
  
The principal difference between a synchronous and an asynchronous task is the flow of control. While executing a synchronous task (i.e. a function call), the control doesn't return until the task is finished. Once it is finished control returns to the same place in the code, from where the program can resume now processing the results of the synchronous task. In asynchronous tasks, the control returns to the calling code immediately, even before the async task has finished (or maybe even before it has started). So when the async task actually finishes, we need to make provision for processing its results. Thus in addition to the arguments and result, we need to pass the async task some extra entities. I like to model this as a payload of async task.  
  
A payload is an object, that contains 1) the input arguments for the task, 2) place to store result of the task, 3) references to objects which can process the result of the task after it has finished, 4) optional retry mechanism. In my case I use the same AsyncTask class for doing numerous slightly varying tasks; so I also like to pass 5) a task type in the payload.  
  
After a while I found that the nature of Payload class is generic. Irrespective of the app-specific derivative of AsyncTask, the Payload members remain the same. So I defined it as an internal class of the AsyncTask itself.  

    **public** **static** **class** Payload  
    {  
      **public** **int** taskType;        // task type  
      **public** Object data;         // input args and result processing objects  
      **public** Object result;       // result holding object  
      **public** **int** retryCount = 0;  // retry count  
      
      **public** Payload(**int** taskType, Object data) {  
          **this**.taskType = taskType;  
          **this**.data = data;  
      }  
      
      **public** Payload(**int** taskType, Object data, **int** retryCount) {  
          **this**.taskType = taskType;  
          **this**.data = data;  
          **this**.retryCount = retryCount;  
      }  
      
      **public** **boolean** retry() {  
          **if**(retryCount > 0) {  
              retryCount--;  
              **new** MyTask().execute(**this**);  
              **return** true;  
          }  
          **return** false;  
      }  
    }  
    

  
Payload object is what you will pass to AsyncTask's execute() (which is passed to doInBackground). And payload object is what you return from the doInBackground() too. So now the derivative of AsyncTask looks as follows.  

    **public** **class** MyTask  
     **extends** AsyncTask<AsyncTask.Payload, String, AsyncTask.Payload>  
    {  
     **public** **void** onPostExecute(AsyncTask.Payload payload)  
     {  
         Object[] data = (Object[]) payload.data;  
      
         // ...  
         **switch**(payload.taskType)  
         {  
         **case** TASK_1:  
             **break**;  
         **case** TASK_2:  
             **break**;  
         }  
     }  
      
     **public** AsyncTask.Payload doInBackground(AsyncTask.Payload... params)  
     {  
         AsyncTask.Payload payload = params[0];  
         Object[] data = (Object[]) payload.data;  
      
         // ...  
         **switch**(payload.taskType)  
         {  
         **case** TASK_1:  
             payload.result = // ...  
             **break**;  
         **case** TASK_2:  
             **break**;  
         }  
         **return** payload;  
     }  
    }  
    

  
2\. Retry logic  
  
One advantage that async task has over sync task is that in case of failure, it can be retried transparently. So in case the task fails (indicated by payload.result being null); it can be reattempted with the same payload with the retry count decremented by 1\.  


[0]: http://www.altcanvas.com/android/cutewit
[1]: http://google-ukdev.blogspot.com/2009/01/crimes-against-code-and-using-threads.html
[2]: http://www.google.com/codesearch/p?hl=en&sa=N&cd=5&ct=rc#bOM4alZTWio/trunk/Shelves/src/org/curiouscreature/android/shelves/util/UserTask.java&q=lang:java%20android%20UserTask
[3]: http://developer.android.com/reference/android/os/AsyncTask.html
[4]: http://groups.google.com/group/android-developers/browse_thread/thread/c9bad2620e38496a?pli=1
