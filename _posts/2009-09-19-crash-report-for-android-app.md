---
layout: post
title: "Crash report for Android App"
---
"Crash report for Android App"
===
To err is human and to crash is the software created by human (even if it is made for Android ;)  

  
So when your app crashes on your users' phones, it's a good idea to collect the details of the crash and prompt the user to send them to you. I recently wrote one such scheme for ReaderScope and it has been very helpful. Here is how I am doing it.

  
I found the code snippets after googling around. Mainly from this [stackoverflow article][0]. This morning however, I added few more bits to work well with exceptions that take place in background threads.

  
The way to do this is to implement the [Thread.UncaughtExceptionHandler][1] interface and pass it to [Thread.setDefaultUncaughtExceptionHandler()][2] at the beginning of your Activity's onCreate(). Here is the implementation class TopExceptionHandler.

    package com.altcanvas.readerscope;  
      
    import android.app.Activity;  
    import android.app.AlertDialog;  
    import android.content.DialogInterface;  
    import android.content.Context;  
    import java.io.*;  
      
    **public** **class** TopExceptionHandler **implements** Thread.UncaughtExceptionHandler {  
      
    **private** Thread.UncaughtExceptionHandler defaultUEH;  
      
    **private** Activity app = null;  
      
    **public** TopExceptionHandler(Activity app) {  
    **this**.defaultUEH = Thread.getDefaultUncaughtExceptionHandler();  
    **this**.app = app;  
    }  
      
    **public** **void** uncaughtException(Thread t, Throwable e)  
    {  
    StackTraceElement[] arr = e.getStackTrace();  
    String report = e.toString()+"**\n\n**";  
    report += "--------- Stack trace ---------**\n\n**";  
    **for** (**int** i=0; i<arr.length; i++)  
    {  
    report += "    "+arr[i].toString()+"**\n**";  
    }  
    report += "-------------------------------**\n\n**";  
      
    // If the exception was thrown in a background thread inside  
    // AsyncTask, then the actual exception can be found with getCause  
    report += "--------- Cause ---------**\n\n**";  
    Throwable cause = e.getCause();  
    **if**(cause != null) {  
    report += cause.toString() + "**\n\n**";  
    arr = cause.getStackTrace();  
    **for** (**int** i=0; i<arr.length; i++)  
    {  
    report += "    "+arr[i].toString()+"**\n**";  
    }  
    }  
    report += "-------------------------------**\n\n**";  
      
    **try** {  
    FileOutputStream trace = app.openFileOutput(  
    "stack.trace", Context.MODE_PRIVATE);  
    trace.write(report.getBytes());  
    trace.close();  
    } **catch**(IOException ioe) {  
    // ...  
    }  
      
    defaultUEH.uncaughtException(t, e);  
    }  
    }

  
Note that we are not consuming the exception. We let the Android framework's defaultUEH to handle it. If you don't do this, [bad things may happen][3].

  
At the top of your Activity register an instance of above class like this:  

    @Override  
    **public** **void** onCreate(Bundle savedInstanceState)  
    {  
    **super**.onCreate(savedInstanceState);  
      
    Thread.setDefaultUncaughtExceptionHandler(**new** TopExceptionHandler(**this**));  
    

    ...

  
This exception handler saves the trace in a file. When ReaderScope restarts next time, it detects the file and prompts the user if he/she wants to email it to the developer.

  
Emailing the stack trace with user's consent is so much easier on Android, than setting up a crash report server. Somewhere near the beginning of your activity just check if stack.trace file is present. If so, execute following code to pack it in an email. 

    **try** {  
    BufferedReader reader = **new** BufferedReader(  
    **new** InputStreamReader(ReaderScopeActivity.**this**  
    .openFileInput("stack.trace")));  
    **while**((line = reader.readLine()) != null) {  
    trace += line+"**\n**";  
    }  
    } **catch**(FileNotFoundException fnfe) {  
    // ...  
    } **catch**(IOException ioe) {  
    // ...  
    }  
      
    Intent sendIntent = **new** Intent(Intent.ACTION_SEND);  
    String subject = "Error report";  
    String body =  
    "Mail this to readerscope@altcanvas.com: "+  
    "**\n\n**"+  
    trace+  
    "**\n\n**";  
      
    sendIntent.putExtra(Intent.EXTRA_EMAIL,  
    **new** String[] {"readerscope@altcanvas.com"});  
    sendIntent.putExtra(Intent.EXTRA_TEXT, body);  
    sendIntent.putExtra(Intent.EXTRA_SUBJECT, subject);  
    sendIntent.setType("message/rfc822");  
      
    ReaderScopeActivity.**this**.startActivity(  
    Intent.createChooser(sendIntent, "Title:"));  
      
    ReaderScopeActivity.**this**.deleteFile("stack.trace");

  
Hope this helps! If you have suggestions for improvements, please do let me know in comments.

  
_code syntax highlighting by _[_GVIM_][4]_, using the "delek" theme._  
_  
_  
_Ads:_  
_\* [Professional Android 2 Application Development][5]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=0470565527)_  
_\* [Android Application Development: Programming with the Google SDK][6]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=0596521472)_  
_\* [The Busy Coder's Guide to Advanced Android Development][7]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=0981678017)_

[0]: http://stackoverflow.com/questions/601503/how-do-i-obtain-crash-data-from-my-android-application
[1]: http://developer.android.com/reference/java/lang/Thread.UncaughtExceptionHandler.html
[2]: http://developer.android.com/reference/java/lang/Thread.html#setUncaughtExceptionHandler(java.lang.Thread.UncaughtExceptionHandler)
[3]: http://groups.google.com/group/android-developers/browse_thread/thread/c32e8c6120bed5c5
[4]: http://vim.sourceforge.net/
[5]: http://www.amazon.com/Professional-Android-2-Application-Development/dp/0470565527?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
[6]: http://www.amazon.com/Android-Application-Development-Programming-Google/dp/0596521472?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
[7]: http://www.amazon.com/Coders-Guide-Advanced-Android-Development/dp/0981678017?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
