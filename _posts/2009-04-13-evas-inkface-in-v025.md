---
layout: post
title: "Evas + Inkface in v0.2.5"
---
Evas + Inkface in v0.2.5
===
Just released [v0.2.5][0] of inkface. In this release the Evas backend was implemented for inkface. (the one that drives [Canola][1]) I wrote the classic twitter app, using this new backend. Here are some screenshots.  
  
This is the panther theme.  
  
[![](http://2.bp.blogspot.com/_W6UcJjyXr24/SeLg2T88rZI/AAAAAAAACyk/bI8D-hnZio0/s400/etwt2.jpg)][2][![](http://4.bp.blogspot.com/_W6UcJjyXr24/SeLg2uTVxOI/AAAAAAAACys/gw1rp7vW-hE/s400/etwt5.jpg)][3]  
  
This one is the default theme.  
  
[![](http://1.bp.blogspot.com/_W6UcJjyXr24/SeLhWxEhwiI/AAAAAAAACy0/RtfxdoILd9U/s400/etwt3.jpg)][4][![](http://2.bp.blogspot.com/_W6UcJjyXr24/SeLhWy32qbI/AAAAAAAACy8/VD1HKqj2Zrw/s400/etwt4.jpg)][5]  
  
Evas has an optimized backend canvas that does smooth animations even on devices like n810 and Openmoko Freerunner, which do not have h/w accelerated graphics. I have run above app on my Freerunner and the scrolling is definitely smoother than pygame. However, I have found that scrolling is the most expensive kind of animation, because in it the entire screen's contents are changed in two consecutive frames. Therefore even evas gets slower at some point. However if it is a case of small icon to be moved around, it will appear very smooth with evas.  
  
I was again targetting this one for Maemo, but at last moment I hit a problem. For some reason on maemo there is some incompatibility of colorspace encoding (ARGB formats), between cairo and evas, so it won't render the cairo surfaces properly. Overall, the python-evas 0.3 module is not well documented and there are many quirks, so I couldn't get few things to work. I will come back to them later in future.  
  
In summary, this opens a path to design canola like applications using inkface.

[0]: http://groups.google.com/group/inkface/browse_thread/thread/64d05d54dfd9104e
[1]: http://openbossa.indt.org/canola/developer.html
[2]: http://2.bp.blogspot.com/_W6UcJjyXr24/SeLg2T88rZI/AAAAAAAACyk/bI8D-hnZio0/s1600-h/etwt2.jpg
[3]: http://4.bp.blogspot.com/_W6UcJjyXr24/SeLg2uTVxOI/AAAAAAAACys/gw1rp7vW-hE/s1600-h/etwt5.jpg
[4]: http://1.bp.blogspot.com/_W6UcJjyXr24/SeLhWxEhwiI/AAAAAAAACy0/RtfxdoILd9U/s1600-h/etwt3.jpg
[5]: http://2.bp.blogspot.com/_W6UcJjyXr24/SeLhWy32qbI/AAAAAAAACy8/VD1HKqj2Zrw/s1600-h/etwt4.jpg
