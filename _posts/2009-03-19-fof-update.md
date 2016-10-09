---
layout: post
title: "FoF update"
---
"FoF update"
===
After the Frets-on-Fire-on-Fremantle post, the feasibility of it on real actual hardware was discussed on [maemo mailing list][0] and in comments. It became clear that it's not sufficient to get FoF running in SDK to prove that it will also run on final hardware. We will have to work on the OpenGL GUI to make it happen.  
  
So I dived into the internals of FoF. And this is what I've come up with so far. (Click on image for detailed view)  
  
[![](http://1.bp.blogspot.com/_W6UcJjyXr24/ScHVtq0zgCI/AAAAAAAACwo/2c5Rs8LRtks/s400/fof-arch-2.jpeg)][1]  
  
It is far from a formal UML diagram, but it tries to capture the elaborate architecture of FoF code.  
  
I am experimenting with some parts of the above diagram. Let's see how it goes.  
  
That's all for now... BTW, I posted [inkface][2] v0.2.3 yesterday (highlights - all tests running in Diablo SDK, basic Clutter support). Check the detailed changelog [here][3].

[0]: http://www.gossamer-threads.com/lists/maemo/developers/46442?page=last
[1]: http://1.bp.blogspot.com/_W6UcJjyXr24/ScHVtq0zgCI/AAAAAAAACwo/2c5Rs8LRtks/s1600-h/fof-arch-2.jpeg
[2]: http://code.google.com/p/altcanvas/wiki/InkFace
[3]: http://groups.google.com/group/inkface/browse_thread/thread/a87c068fc7087787
