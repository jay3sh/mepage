---
layout: post
title: "Blog from nokia tablets"
---
Blog from nokia tablets
===
Last night I came across [Benoît HERVIER][0]'s Maemo App [PyGTKEditor][1]. That finished my search for a simple text editor tool for Maemo written in Python. I was aware of how simple it was to write a client for Google's blogger.com using the python bindings of its GData protocol. So I was in search of a very simple text editor that I could tweak to write a Blogger client for Maemo.  
  
PyGTKEditor is a very well written application. It is meant for writing/viewing source code written in variety of languages with syntax highlighting. It was very easy to trim it down to suit my needs and rewire it with [sample code][2] that came with GData bindings.  
  
And here I have a working application that is suitable for micro-blogging from Nokia tablets. I have split it into 2 packages:  
  
Latest Google gdata python bindings bundled into a .deb package and the blog editor itself. Here are the links:  
[gdata-python][3]  
[maemo-blogger][4]  
  
I will organize this into a project if this gets bigger. For now, let me know your feedback.  
  
P.S. If you liked this, check out another [Maemo App][5] I released yesterday.

[0]: http://maemo.org/profile/view/khertan
[1]: http://maemo.org/downloads/product/OS2007/pygtkeditor/
[2]: http://gdata-python-client.googlecode.com/svn/trunk/samples/blogger/BloggerExample.py
[3]: http://www.altcanvas.com/packages/gdata-python_1.0.10.1.deb
[4]: http://www.altcanvas.com/packages/maemo-blogger_0.1.deb
[5]: http://code.google.com/p/altcanvas/wiki/MaemoPublishr
