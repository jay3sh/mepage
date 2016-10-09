---
layout: post
title: "Planning Inkface v0.2"
---
Planning Inkface v0.2
===
With v0.1.X of Inkface libraries feasibility of SVG based GUI framework is proven. With different experiments, the following structure seems to be evolving.  
[![](http://2.bp.blogspot.com/_W6UcJjyXr24/SYVw7HhqzII/AAAAAAAACts/7_dUbD9lyB4/s400/inkface-arch.png)][0]  
The inkface library provides canvas objects to draw on. These canvas objects can be implemented using different backends. Currently only X is used as backend. Clutter seems possible, it will be there in v0.2.X. Inkface library loads the SVG elements with the help of altsvg library. altsvg library is responsible for parsing the SVG document and rendering its component elements.  
  
I spent past few weeks investigating the SVG rendering solutions that are out there. There are two major efforts in open source to the best of my knowledge: librsvg (Gnome library, which is the base of current libaltsvg) and Qt's couple of libraries (QtSVG and other being a KHTML component).  
  
They are good libraries with their own advantages and pitfalls. But they are made with a simple purpose in mind - Parse the SVG document and render it as an image. They do not handle the individual elements of the SVG DOM tree in a dynamic way. This is the reason, none of them fully supports animation extension of SVG specs.  
  
In the inkface framework, following two things are expected from the altsvg library:  
1\. Separate rendering of different elements of an SVG document.  
2\. Programmatic access to the SVG attributes of these individual elements.  
  
I have spent very long time trying to understand librsvg. It was very painful to get it working the way it works right now. I am not satisfied with the patches I applied on top of librsvg to accomplish the 1st requirement above. (2nd requirement is not available in v0.1.X). I have faced great difficulty to understand the highly recursive logic of librsvg. It will take much larger effort to tweak it elegantly so that both the above requirements are fulfilled.  
  
I also looked into Qt SVG libraries. Qt's code is elegant and easy to understand. But I am afraid, it is tightly embedded inside Qt framework (at least it will take long to tear it and take away what's needed, not sure if that's worth it).  
  
After exploring above two options, I have also considered implementing altsvg from scratch. And that sounds like a better option after all. I have started experimenting with that option. Here are some details.  
  
As the altsvg block shows, there are two distinct components in these libraries:  
a) SVG parsing - nothing but a standard XML parsing  
b) SVG rendering - librsvg uses cairo and QtSVG uses their PaintEngine for this logic.  
  
I plan to reimplement the SVG parsing part. The rendering will be done by cairo or Qt's PaintEngine. Cairo and Qt's rendering library are mature libraries and their role is orthogonal to the above two requirements of the inkface framework.  
  
Furthermore I figure that the SVG parsing part is not as performance critical as rendering part. But it will have to go through lot of iterations of design and implementation. So I will be implementing it in python. Python's excellent support for XML parsing will speed up the prototyping.  
  
So far I see following advantages of implementing altsvg from scratch and that too in python:  
  
1\. It will save energy and time in trying to understand existing librsvg/QtSVG libraries and try to redesign them for the purpose that they might not have been designed for in the first place.  
2\. Some initial work on this front has proved that, I can totally eliminate the need for a designer to change in XML nodes in Inkscape. They will also not need to explicitly mention the order as an attribute of the element. The order in which the elements are shown in the Inkscape will be recognized by the inkface framework. Also the name of the element can be defined using Inkscape's "Object Properties" option in the context menu.  
3\. Most of the developers who have inquired about this project, have asked about the portability. The choice of python will help address that issue.  
4\. It certainly would be a daunting task to aim for a full SVG compliance with my own implementation. But in retrospect, I think that's not the goal. It's not necessary initially to implement all of SVG spec. Some basic features like paths (lines, bezier curves, rectangles, ellipses) and gradients should be available soon enough. They are the most widely used elements. Further features like filters can be implemented incrementally. I suspect, that will be a translation of librsvg's cairo calls to PyCairo calls.  
5\. I am not sure how can I do this, but a progressive rendering of SVG elements seems possible. It will need more interaction between inkface and altsvg. It will improve load time of the GUI.  
  
There are other two topics as well. But I may address them in some later post. Implementation of inkface (its role in the big picture, the clutter backend) and benefits of using OpenGL for rasterization (Qt has a proven advantage over cairo in this regard. I know glitz can solve this problem for cairo, but I didn't find any numbers to support that)

[0]: http://2.bp.blogspot.com/_W6UcJjyXr24/SYVw7HhqzII/AAAAAAAACts/7_dUbD9lyB4/s1600-h/inkface-arch.png
