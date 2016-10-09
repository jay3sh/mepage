---
layout: post
title: "Twitter client with inkface-pygame v0.2.2"
---
Twitter client with inkface-pygame v0.2.2
===
Here is an update on the Inkface library. But before that let me give a background of the project for the benefit of new readers that will be reading this post via Planet Maemo.  
  
Inkface is an SVG based GUI framework. Unlike the desktops - where GUI components need to be keyboard/mouse friendly; the handheld GUIs need to be finger friendly. Therefore the handheld GUI components should be naturally manipulatable - like parts of an image. Therefore inkface provides a framework in which, GUI is composed in an image editor like Inkscape, instead of rigidly coded in the program. The various elements of SVG image are presented as python objects to the programmer who can then write his program logic using these elements as widgets.  
  
The current version of inkface uses pycairo for vector graphics rendering and uses pygame as backend surface to draw on. A clutter backend is in the plans.  
  
With that background, let me show a demo of an app that I designed (in Inkscape) and coded (in python) using inkface-pygame library v0.2.2\. It's a twitter client. The demo shows how the GUI can be changed vastly by merely changing the SVG files and doing no change in the code at all. (the --theme option tells the app to just use a different set of SVG files) The first one is the default theme and the later has a vintage look.  
  
  
  
The whole GUI consists of only 2 SVG images (corresponding to 2 screens - login and main twits page). So to create a new theme one only needs to create/change these two SVG files in Inkscape. Compare this to the traditional approach where a theme consists of tens of PNG images of specific sizes.  
  
I was aiming to release it as an app for diablo, but I had to postpone the plan. For improving the performance during animation, I used pygame's features that are only available in v1.8.x and I later found that Diablo ships with pygame v1.7.x. So I need to work around this incompatibility before I release it for n8x0 devices.  
  
For more information on the project check out the [wiki][0]. You can download v0.2.2 tarball from [here][1]. It is pure python code and can be tried on desktop. For details on the changelog of v0.2.2 check my post on the mailing list [here][2].

[0]: http://code.google.com/p/altcanvas/wiki/InkFace
[1]: http://altcanvas.googlecode.com/files/inkface-pygame_0.2.2.tar.gz
[2]: http://groups.google.com/group/inkface/browse_thread/thread/e66633a62a80f01
