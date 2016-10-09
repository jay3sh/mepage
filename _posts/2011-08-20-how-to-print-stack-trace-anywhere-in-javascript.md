---
layout: post
title: "How to print stack trace anywhere in Javascript"
---
"How to print stack trace anywhere in Javascript"
===
It's well know how to print a stack trace after catching an exception/error in Javascript. But what if you are not catching anything? You see something happening at a particular line in code, but you want to know what's the code path through which the control flow reached that line when that interesting thing happened. In other words, you want to know what's the stack trace (series of function calls, starting from beginning of the program), at that particular line of code.  
  
It's quite easy. If you don't have an exception, create one. Then you can print the stack trace off of it. Like this ([gist][0]) ...  
  
  
  


[0]: https://gist.github.com/1158940
