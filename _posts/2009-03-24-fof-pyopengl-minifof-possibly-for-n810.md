---
layout: post
title: "FoF - PyOpenGL = miniFoF (possibly for n810)"
---
"FoF - PyOpenGL = miniFoF (possibly for n810)"
===
After spending some time on the Frets-on-Fire code I have managed to liberate it from PyOpenGL dependency.  
  
In first step, I bypassed all the GUI code, without making any changes to the audio and input processing components. So I ended up with a completely blank window with a default song playing and me pressing the keyboard frets blindly.  
  
In second step, I wrote only few lines of code to draw the notes on the screen using basic pygame.draw functions.  
  
Here is a screen shot of the minimal UI.  
  
[![](http://1.bp.blogspot.com/_W6UcJjyXr24/SckqM5fuzGI/AAAAAAAACxk/7EM-PVbgJtc/s400/minifof.jpg)][0]  
  
Then I realized that, in theory this minimal version can also run on n810\. I tested it in Diablo SDK and it runs. I couldn't hear the sound, but that's an issue with my scratchbox settings. I am sure that this will run on n810, however I am not sure if it will have real time response times. Unfortunately, I don't have a n810 to try this on (mine must be changing hands in black market as I write this :( ). Nevertheless I made necessary changes so that someone can try it on real n810 if they wish to.  
  
If you have played FoF on keyboard, you would know F1-F5 keys are used to control frets and RETURN key is used to pluck the string. One possible way to achieve this with n810 is to use the keys on the keypad.  
  
Following mockup should give you an idea.  
  
[![](http://3.bp.blogspot.com/_W6UcJjyXr24/Sckqgw9YOHI/AAAAAAAACxs/Mvr5Sf-M7Os/s400/minifof-usage.png)][1]  
  
F1 = Quote, F2 = K, F3 = H, F4 = F, F5 = S  
  
In place of RETURN we can use the square key as shown above, but I couldn't find what its keycode is. So for now I have assigned that functionality to Q. If someone can provide with that keycode in pygame, I will fix it.  
  
The gameplay is for single song only. I have bypassed all the menus for now. As the song starts the goal is to hit the note when it reaches the white line. You can play different songs by specifying their name as --play command line option.  
  
This is not (yet) a single click install app, however.  
  
I have put together the [steps][2] that you will need to follow, to get it working on actual n810\. Those should work to the best of my knowledge, but you may run into errors. If you do, please report them in comments and I can help with them.  
  
If you are interested in the changes I had to make, then here is the list of changes starting from the baseline FoF code ([r1165 - r1176][3])  
  
Give it a try. If it runs slow, let me know how slow. There still must be bunch of code paths that we can eliminate to improve the response times.

[0]: http://1.bp.blogspot.com/_W6UcJjyXr24/SckqM5fuzGI/AAAAAAAACxk/7EM-PVbgJtc/s1600-h/minifof.jpg
[1]: http://3.bp.blogspot.com/_W6UcJjyXr24/Sckqgw9YOHI/AAAAAAAACxs/Mvr5Sf-M7Os/s1600-h/minifof-usage.png
[2]: http://code.google.com/p/altcanvas/wiki/MiniFoF
[3]: http://code.google.com/p/altcanvas/source/list?start=1176
