---
layout: post
title: "Clutter animation paths with Inkscape+Inkface (v0.1.3)"
---
"Clutter animation paths with Inkscape+Inkface (v0.1.3)"
===
While I am working on inkface v0.2, I will keep releasing dot versions for 0.1.x that will have some improvements that are independent of altsvg backend. So I have posted v0.1.3 source tarballs.  
  
Only major improvement in v0.1.3 is the exporting of path data of SVG path elements. This path data can be used by clutter based applications to create "Knots" (animation paths along which objects can move). Check out the following video.  
  
  
  
In this app, four paths were drawn in Inkscape. Then using inkface v0.1.3 library their path data was made available to clutter app. The clutter app created "BehaviourBspline" using this data and made the ball and star move along these splines.  
  
As can be seen, any complicated paths can be created using this method. Without it, one will have to calculate coordinates of each point along which one wants to animate (very tedious to calculate control points for Bézier curves).  
  
v0.1.3 source tarballs: [libaltsvg][0], [inkface][1]  
  
The clutter app is a single python script available [here][2] (also part of inkface tgz). You are looking for [element\_to\_bspline][3]

[0]: http://altcanvas.googlecode.com/files/libaltsvg_0.1.3.tar.gz
[1]: http://altcanvas.googlecode.com/files/inkface_0.1.3.tar.gz
[2]: http://code.google.com/p/altcanvas/source/browse/trunk/inkface/apps/pathfinder/pathfinder.py?r=866
[3]: http://code.google.com/p/altcanvas/source/browse/trunk/inkface/apps/pathfinder/pathfinder.py?r=866#50
