---
layout: post
title: "How to debug WebWorker threads?"
---
"How to debug WebWorker threads?"
===
WebWorkers offer your Web app a way to do multithreading. If your advanced web app does some number crunching keeping the CPU busy for a while, then it makes sense to do it in a separate thread instead of doing it in the main thread, which may lead to blocking the browser tab (Chrome) or the entire browser (Firefox and others). One of the troubles of writing programs in WebWorkers is, they are hard to debug. Two key mechanisms required for debugging a program are not available in WebWorkers - print statements (console.log is not available) and breakpoints (even if you manage to place breakpoints in the code running in WebWorker, they won't be hit).  

  
During my work on [3DTin][0], I have learnt couple of techniques that help me debug my WebWorker code.

  
**1\. Use postMessage as replacement for console.log**

postMessage is how you send some data from the WebWorker thread to the main thread. This is the primary way of returning the result of the computation you perform in WebWorker. But we can use it for other purposes too. Here is how you can use the postMessage mechanism for communicating both the successful response as well as debug messages.  

  
**2\. Catch exceptions and send their stack trace over postMessage**

When an exception occurs in the code running in WebWorker, the debugger will print the line at which exception occurred, but not the entire stack trace. In most cases the whole stack trace can help you find the root cause quickly. To achieve that, place most of your code that runs in the WebWorker inside a try-catch statement. Then in the catch clause extract the stack trace of the exception, format it nicely and send it to the main thread using postMessage, as discussed in the first technique above. Here is the exception handling code that helps you extract stack trace at least on Google Chrome and other Webkit browsers. I have cherry-picked it from the [stacktrace.js][1] library. If you need a browser agnostic solution, paste the stacktrace.js library at the beginning of your WebWorker code.  

  
I hope this makes your life easy while debugging WebWorker code.

[0]: http://www.3dtin.com/
[1]: http://stacktracejs.com/
