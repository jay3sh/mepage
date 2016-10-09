---
layout: post
title: "Debugging python reference counts"
---
"Debugging python reference counts"
===
If you are wondering about the progress of inkface, it's coming soon. I was planning to release version 0.1.2 couple weeks ago with a cool app demonstrating the improvements in the library (A twitter client), but after I saw the abysmal memory performance of the app on my n810, I decided to wait. Past two weeks I spent understanding the memory leaks in the library. In this post I would like to share my experiences while debugging reference count leaks in my python bindings.  
  
The [primary documentation][0] on the subject from python.org is the first stepping stone. Considering how daunting the task of memory debugging is - some inspiration always helps. Read this [post][1] from Guido which explains how to approach the task.  
  
In most of the cases we start debugging the memory leak after we have seen the program crawling or ever-increasing heap profile graph from valgrind [massif][2]. Whichever is the case, the theory of reference counts as explained in above docs, doesn't make sense in this scenario. In such case, the following steps may help you get started.  

* Put debug statements in the dealloc functions of your Python Type objects. This will tell you when are they getting called, if at all. They will be called when Py\_DECREF call on your python object decrements its refcount to zero.
* Identify the python objects that you suspect to be leaking (i.e. the objects whose ref counts are not reaching zero when you expect them to) and write a simple routine that dumps their refcounts. You can write this routine inside your C module or in python - depending upon how your code is organized. In C you can find PyObject's refcount by its member ob\_refcnt. In python you can do the same by passing the object to sys.getrefcount() function. Call this refcount-dump routine from various places in your code and monitor how the reference count of these objects varies.
* By calling the refcount-dump routine at strategic points you will soon narrow down to the area that is increasing the ref counts unexpectedly (or more correctly forgetting to decrease it when the job is done). Now look in the Python-C API docs for the behavior of the API calls you are making in this particular code segment. Understand the meanings of borrowed reference and new reference. Soon, you will find the places where you are supposed to call Py\_DECREF, but you haven't.  
While debugging my code I had following observations.  

* The ref counts on my objects were astronomical. After a while I figured that they were increasing with time. This observation clearly showed that the bug was in a loop structure. Soon I found the problematic code and put Py\_DECREFs.
* One common place of forgetting to release the ownership of an object is while iterating over a sequence using PyIter. [Note that][3], PyIter\_Next returns a new reference and you have to release it (roughly at the end of the iteration)
* Sometimes Heisenberg's law kicks in ("you can't observe something without influencing it" as mentioned by Guido in above post). In my case, the python objects I was tracking were saved as values in a dictionary. So the only way to refer to them was 
    
    sys.getrefcount(dict.values()[index])

This leads to a creation of list of values, thus incrementing the reference count of the object I am monitoring. There is no easy way that I know of to work around this, but just taking into consideration these additional refcounts helps. 
* In my code, I have a pure python class which encapsulates the objects created by C library. So the deallocation of C objects was dependent on the deallocation of pure python object. So I had to track its refcounts as well. One surprising thing I noticed was this object had very high refcount immediately after its instantiation. e.g.  

    o = someclass()  
    print sys.getrefcount(o)  # 11  
    

This was very unexpected. The reason behind it lied inside its constructor of course. This class has several methods. And inside the constructor I register these method objects as callback handlers. This understandably increases the refcount of method objects; however as it turns out it also increases the refcount of the parent object. So in my case, I got rid of these references by unregistering the callback handlers when I wanted to release the object.  
After the whole exercise, I concluded that debugging memory leaks by means of debugging reference count leaks is a more useful way, compared to going through valgrind logs of a misbehaving C/C++ program.  
  
These are my findings based on less than one day's work. If you find any mistakes in my understanding, please do point out.  
  
And yes... an update on Inkface is coming soon.

[0]: http://www.python.org/doc/2.5.2/ext/refcounts.html
[1]: http://www.python.org/doc/essays/refcnt/
[2]: http://valgrind.org/docs/manual/ms-manual.html
[3]: http://www.python.org/doc/2.5.2/api/iterator.html#l2h-356
