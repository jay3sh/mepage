---
layout: post
title: "Intercepting Up/Down keys from bash script"
---
Intercepting Up/Down keys from bash script
===
I have been working with Android's adb for quite some time now. Over time I have created a custom shell of my own wrapping around the adb. It really speeds up my development tasks. (But more about it in a separate post).  
  
Any usable shell gives you an option of browsing through the command history using UP/DOWN arrow keys. It seems like a very simple feature to implement, but my investigation in past few days has proven it to be a non-trivial task especially if you are writing the shell in pure bash.  
  
If you want to intercept Up/Down keys in your program, you should be able to read the scancodes of the keystrokes. Bash provides ways to take user input from command line using "read" which directly provides you strings of characters and not scan codes of individual keystrokes.  
  
After spending few days on the problem, I came up with a way/hack/workaround to get this working. I had to take some help from python.
