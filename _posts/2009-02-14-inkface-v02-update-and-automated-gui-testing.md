---
layout: post
title: "Inkface v0.2 update and automated GUI testing"
---
"Inkface v0.2 update and automated GUI testing"
===
As I posted earlier, my work on v0.2 of Inkface is on track. It's implementation of an SVG library entirely in python, with the goal of dynamic rendering in mind.  
  
This new implementation can now render some basic SVG shapes - rectangles, paths (except for arc), linear and radial gradients. Following video shows some of these shapes.  
  
  
  
I spent most of today to write a regression test framework for this library.  
  
Typically it's difficult to automate regression testing of a GUI library/app. But in this particular case, it is possible. The idea is to save SVG image's rasterized buffer into a PNG image, when we know it's correct by visual inspection. As new features are added to the library, the regression script rasterizes the same set of SVG images and compares their raster buffer with the that loaded from PNG files saved earlier. If new changes have modified the rendering, then the new rasterized buffer will be different from the loaded from PNG image.  
  
You can find the regression script [here][0]. In fact, the above video is the same script run in visual inspection mode.

[0]: http://code.google.com/p/altcanvas/source/browse/trunk/altsvg/tests/regression.py
