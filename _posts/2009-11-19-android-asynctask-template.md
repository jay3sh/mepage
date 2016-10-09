---
layout: post
title: "Android AsyncTask template"
---
"Android AsyncTask template"
===
Any meaningful GUI application needs to employ multiple threads, otherwise it is very likely to lock while doing any I/O operations - leaving bad impression on the user. Same is true for Android apps. In fact, android framework prompts user to close the app if it doesn't respond in 10 seconds or so. So it's absolutely essential to perform any task - that has even a remote possibility of taking a bit longer - in a background thread.  
  
Fortunately Android framework has some useful constructs built into the framework that make our job relatively easy while doing multithreaded GUI programming. [android.os.AsyncTask][0] is one of them.  
  
The basic steps to make your app multithreaded using AsyncTask are as follows:  
1\. **Identify the code segment that you want to execute in background** thread. (for e.g. code that does network i/o, bulk file transfer on local disk, etc)  
  
2\. **Model it as an AsyncTask object**.  
(Subclass the AsyncTask object and put your code segment in the doInBackground(...) method)  
  
3\. Figure out what **parameters** you have to pass to the task, the **result** that the task should return and how to handle the **exception** in case something goes wrong.  
  
This is pretty simple, but the third step gets bit complicated as your app grows and there are multiple asynchronous tasks that you want to code in.  
  
When I was faced with this problem during the development of [CuTewit][1], I stumbled through some steps. After a while I managed to create a template for modelling with AsyncTasks. In my second app - [ReaderScope][2] - the same template worked very nicely. ReaderScope has over 50 different tasks that are run on background thread at one time or another. The template I use, has made it pretty easy to add new AsyncTasks.  
  
In this post, I want to share that template with you. I have written a small example app that demonstrates the use of the template. Download [source tarball][3] and [apk][4] to try it yourself.  
  
Here is the source code of AppTask.java (the derivative of AsyncTask) for discussion.  
  

    package com.altcanvas.asynctemplate;  
      
    import android.os.AsyncTask;  
      
    **public** **class** AppTask **extends** AsyncTask<AppTask.Payload, Object, AppTask.Payload>  
      
    {  
        **public** **static** **final** String TAG = "AppTask";  
      
        **public** **static** **final** **int** APPTASK_1 = 1001;  
        **public** **static** **final** **int** APPTASK_2 = 1002;  
      
        /*  
         * Runs on GUI thread  
         */  
        **protected** **void** onPreExecute() {  
        }  
      
        /*  
         * Runs on GUI thread  
         */  
        **public** **void** onPostExecute(AppTask.Payload payload)  
        {  
            **switch**(payload.taskType) {  
      
            **case** APPTASK_1:  
                AsyncTemplateActivity app =  
                    (AsyncTemplateActivity) payload.data[0];  
      
                **if**(payload.result != null) {  
      
                    // Present the result on success  
      
                    **int** answer = ((Integer) payload.result).intValue();  
                    app.taskStatus.setText("Success: answer = "+answer);  
      
                } **else** {  
                    // Report the exception on failure  
      
                    String msg = (payload.exception !=null) ?  
                                    payload.exception.toString() : "";  
                    app.taskStatus.setText("Failure: error ="+msg);  
                }  
      
                **break**;  
      
            **case** APPTASK_2:  
                **break**;  
            }  
        }  
      
        /*  
         * Runs on GUI thread  
         */  
        **public** **void** onProgressUpdate(Object... value)  
      
        {  
            **int** type = ((Integer) value[0]).intValue();  
      
            **switch**(type) {  
      
            **case** APPTASK_1:  
                AsyncTemplateActivity app = (AsyncTemplateActivity) value[1];  
                **int** progress = ((Integer) value[2]).intValue();  
                app.progressBar.setProgress(progress);  
                **break**;  
      
            **case** APPTASK_2:  
                **break**;  
            }  
      
        }  
      
        /*  
         * Runs on background thread  
         */  
        **public** AppTask.Payload doInBackground(AppTask.Payload... params)  
      
        {  
            AppTask.Payload payload = params[0];  
      
            **try** {  
                **switch**(payload.taskType) {  
                **case** APPTASK_1:  
      
                    // extract the parameters of the task from payload  
      
                    AsyncTemplateActivity app =  
                        (AsyncTemplateActivity) payload.data[0];  
                    **int** numSteps = ((Integer) payload.data[1]).intValue();  
      
                    **if**(numSteps < 0) **throw** **new** AppException("Invalid input");  
      
                    // perform the task  
      
                    **int** progress = 0;  
                    **for**(; progress < numSteps; progress++) {  
                        **try** {  
                            // pretend to work for 1 second  
      
                            Thread.currentThread().sleep(1000);  
                        } **catch**(InterruptedException ie) {  
                            **break**;  
                        }  
                        publishProgress(**new** Object[] {  
                                **new** Integer(APPTASK_1), app, progress});  
                    }  
      
                    publishProgress(**new** Object[] {  
                            **new** Integer(APPTASK_1), app, progress}); 

                    // Return result of the task  
                    payload.result = **new** Integer(42);  
                    **break**;  
      
                **case** APPTASK_2:  
                    **break**;  
                }  
            } **catch**(AppException ape) {  
                payload.exception = ape;  
                payload.result = null;  
            }  
      
            **return** payload;  
        }  
      
        **public** **static** **class** Payload  
        {  
            **public** **int** taskType;  
            **public** Object[] data;  
            **public** Object result;  
            **public** Exception exception;  
      
            **public** Payload(**int** taskType, Object[] data) {  
                **this**.taskType = taskType;  
                **this**.data = data;  
            }  
        }  
    }  
      
    

code syntax highlighting by [GVIM][5],  
  
Let's go over different aspects of this code.  
  
**What is Payload?**   
To simplify the management of passing parameters and carrying result/exception back, we create a special object called Payload. Payload carries four entities - the type of the AsyncTask (int taskType), parameters to the task (Object\[\] data), result of the task (Object result), exception that took place during the task (Exception exception).  
  
Note the signatures of doInBackground and onPostExecute. The same payload object is passed around.  
  
**How do you start a new task?**  
  

    **new** AppTask().execute(**new** AppTask.Payload(  
        AppTask.APPTASK_1,  
    **    new** Object[] { AsyncTemplateActivity.**this**,  
    **    new** Integer(numSteps) })); 

         
    

\[You can find it in AsyncTemplateActivity.java in the sample app\]  
  
**How do you define a new async task?**  
You don't have to create another AsyncTask derivative object. Just define a new taskType, e.g. APPTASK\_2 in AppTask.java. Create a switch case for that taskType in each of 'doInBackground', 'onPostExecute', 'onProgressUpdate'. Depending upon the nature of the tasks, the contents of payload.data will vary. Since this data is passed as generic Object\[\], you can pass around any types of objects that suite the task's needs. On the other hand, you have to be careful to not type cast them to wrong classes.   
\[We loose Java's static type checking by defining params and result as generic 'Object's. But it saves us from repetitively defining similar AsyncTask derivatives\]  
  
**How is the progress of the task updated?**  
When you call publishProgress(...), it results in a call to onProgressUpdate(...) which is running in the GUI thread. Here, you can manipulate any widget like progress bar to indicate the task progress.  
  
...  
  
This may not be the only way to code AsyncTask, but it certainly has worked for me - not just for one, but for two sizeable projects. Before this, it used to be pretty cumbersome to define a new task.  
  
You can download the source code and use it in your app if you like.  
  
Any comments and suggestions are welcome.  
  
[  
![Flattr this](http://api.flattr.com/button/flattr-badge-large.png)][6]  
  
  
Ads:  
  
  


[0]: http://developer.android.com/reference/android/os/AsyncTask.html
[1]: http://www.altcanvas.com/android/cutewit
[2]: http://www.altcanvas.com/android/readerscope
[3]: http://altcanvas.googlecode.com/files/asynctemplate.tar.gz
[4]: http://altcanvas.googlecode.com/files/AsyncTemplate.apk
[5]: http://vim.sourceforge.net/
[6]: http://flattr.com/thing/113850/Android-Async-task-template
