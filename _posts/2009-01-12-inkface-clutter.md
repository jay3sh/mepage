---
layout: post
title: "Inkface + Clutter"
---
"Inkface + Clutter"
===
Clutter is the easiest way to start coding GUIs with accelerated graphics. I liked it when I first saw the demo in March last year. So all the time while working on inkface, I was waiting for some free time to use inkface with clutter. After getting Inkface v0.1.2 out, I tried my pyclutter... pretty soon figured out a simple way to combine the two.  
  
Check out the following 12 minute video. I put together a simple program in few hours and the video documents all the steps I needed to do. It demonstrates a slider widgets which controls the rotation of a steering wheel.  
  
  
  
The program is 169 lines of python code in a single [file][0] (including comments and some boilerplate code). It loads the GUI from two svg files ([slider][1], [steering][2]). As you can see the slider is unlike any GTK or Qt widget and it was put together in less than 10 minutes in Inkscape (the video is real-time).  
  
\[You can skip through the video from 1:00 to 9:40, if you don't want to see all the details of drawing in Inkscape\]  
  
Now animated "clutter" GUIs can be designed with smooth curvy shapes and smart color palettes, which are difficult to program, but easy to compose in an image editor. Libraries like clutter are making it possible to design out of rectangular widgets. A library like inkface makes it possible to design those new widgets in an image editor.

[0]: http://code.google.com/p/altcanvas/source/browse/trunk/inkface/apps/clutterdemo/clutterdemo.py?spec=svn839&r=839
[1]: http://code.google.com/p/altcanvas/source/browse/trunk/inkface/apps/clutterdemo/slider.svg?r=839
[2]: http://code.google.com/p/altcanvas/source/browse/trunk/inkface/apps/clutterdemo/steering.svg?r=839
