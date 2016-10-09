---
layout: post
title: "Inkface+pygame v0.2.0"
---
"Inkface+pygame v0.2.0"
===
As per the [plan][0] for v0.2, I am ready with a working implementation of inkface. I also made few more design decisions after my last design post. Here are the highlights:  
  
1\. All code is in python  
2\. For X11 surfaces, pygame is used.  
  
I found that pygame (python bindings for SDL) is a mature library for drawing on X11 surfaces. It also has some optimizations which help in 2D animations. There is also OpenGL support, but I do not plan to use it inside inkface library. It is also well supported on Maemo.  
  
I have written my favorite twitter client app with the new inkface-pygame library. The following video demo shows, how I could quickly code 2D scrolling animation with the help of pygame.  
  
  
  
The v0.2.0 is delivered as a [tarball][1]. I have also updated the [inkface wiki][2] with some getting-started tips.

[0]: http://jyro.blogspot.com/2009/02/planning-inkface-v02.html
[1]: http://altcanvas.googlecode.com/files/inkface-pygame_0.2.0.tar.gz
[2]: http://code.google.com/p/altcanvas/wiki/InkFace
