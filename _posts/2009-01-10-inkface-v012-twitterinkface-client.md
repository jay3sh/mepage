---
layout: post
title: "Inkface v0.1.2, Twitter-inkface client"
---
"Inkface v0.1.2, Twitter-inkface client"
===
Finally it is ready. Actually it has been ready for more than couple of weeks now, but I wanted to make sure the bugs in my demo app were not due to problems in core library.  
  
The demo app is a client I wrote for the Twitter service. The intention was to demonstrate how an intuitive GUI can be designed using an Image editor. With the GUI designed using Inkscape and an off-the-shelf python library to talk to Twitter service (Thanks to DeWitt for [python-twitter][0]), I only had to write simple glue code to get the whole app working. Check out the video.  
  
  
  
Good news is I have setup a debian repo to host packages for this app.  
  
In the Maemo Application Manager, add following Catalog:  
  
Name: Altcanvas  
Web Address: http://repo.altcanvas.com  
Distribution: testing  
Components: main  
  
Refresh the application list. You should see 'twitter-inkface' app in the list. All the dependencies will be automatically pulled from the repo.  
  
Since the repository implementation is currently experimental (No it's not a standard web server! I will save it for a separate post), you may face a problem while installing or I may have to take it offline for modifications. In that case, you can download following four packages and install them with dpkg ("dpkg -i \*.deb")  
  
[libaltsvg][1],[inkface-python][2], [inklib][3], [twitter-inkface][4].  
  
For more info on Inkface project, visit the [project page][5].

[0]: http://code.google.com/p/python-twitter/
[1]: http://altcanvas.googlecode.com/files/libaltsvg_0.1.2_armel.deb
[2]: http://altcanvas.googlecode.com/files/inkface-python_0.1.2_armel.deb
[3]: http://altcanvas.googlecode.com/files/inklib_0.1.0.deb
[4]: http://altcanvas.googlecode.com/files/twitter-inkface_0.1.0.deb
[5]: http://code.google.com/p/altcanvas/wiki/InkFace
