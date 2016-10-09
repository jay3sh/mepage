---
layout: post
title: "Preprocessing the GUI"
---
Preprocessing the GUI
===
Couple of days ago while on a bus, an old idea resurfaced in my mind. I had briefly thought about it in the past and then shelved it in some corner. But now the idea seemed very relevant.  
  
The way inkface works is, when the application starts it invokes inkface to load an SVG document. Inkface library will parse the XML and render individual elements and return them to the application. The GUI loaded like this has rich look, but the loading time is high (especially on handheld devices). This is because loading of elements involves parsing of XML and then rendering it. This is resource consuming as well as time consuming stage. What if this is done during the GUI design time and not at the runtime. (Similar to compiling the source code as opposed to interpreting it at runtime).  
  
In past couple days, I implemented this idea in the form of an Inkscape plugin. With this plugin, the designer of the GUI has to save the SVG GUI in a file of different extension (.ink). Inkscape automatically triggers the plugin code upon this. The plugin then parses the SVG and renders its elements into raster images and saves them as PNG images. These PNG images are put into a ZIP archive along with some metadata and that ZIP archive is stored as the .ink file.  
  
[![](http://1.bp.blogspot.com/_W6UcJjyXr24/SehpOd9N_cI/AAAAAAAACzE/ZCz8F3xbijE/s400/inkplug.jpg)][0]  
  
Now at the runtime, instead of the SVG file, the application will pass the inkface library a .ink file. The inkface library opens the Zip archive and loads the pixbuffers from PNG images to return them as Element objects to the application. This way it doesn't spend time and resources in parsing and rendering of the SVG shapes.  
  
When I ran the modified code using this strategy with pygame backend, I got positive results as expected. I found that loading a .ink file takes at least half as long as the .svg file. That's 100% improvement. I ran the test on Openmoko Freerunner.  
  
This approach not only improves the performance, but also eases porting on new backends. For instance, Qt can't directly work with cairo. But if rendering is not done at runtime, the rendering stage is completely bypassed. It is trivial to load PNG images onto Qt widgets.  
  
Of course there is little downside to this approach. The elements loaded from PNG images, cannot be manipulated as vector graphics at runtime. In other words, one cannot resize them or change their SVG properties and re-render them to their new look. It is not yet clear, how much this feature is useful in real life anyway, so I don't think this is a big trouble. Furthermore, a hybrid approach can be implemented if it turns out to be so desirable feature.  
  
The plugin contains just two files ([inkplug.inx][1] and [inkplug.py][2]) which you can drop in /usr/share/inkscape/extensions/ and restart Inkscape. inkplug.py will need inkface library however, so make sure it is installed on your system. (inkface v0.2.5+). In future I will look into making this plugin installation easier.

[0]: http://1.bp.blogspot.com/_W6UcJjyXr24/SehpOd9N_cI/AAAAAAAACzE/ZCz8F3xbijE/s1600-h/inkplug.jpg
[1]: http://altcanvas.googlecode.com/svn-history/r1318/trunk/inkplug/inkplug.inx
[2]: http://altcanvas.googlecode.com/svn-history/r1319/trunk/inkplug/inkplug.py
