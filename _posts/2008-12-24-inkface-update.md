---
layout: post
title: "Inkface update"
---
"Inkface update"
===
So as promised, here is an update on Inkface. I am ready with v0.1.2, almost.  
  
A main change in this update is, the definition of a new abstraction called 'Face'. This was introduced to make programming the app more intuitive. A 'Face' object is initialized by giving it a name of SVG file that holds UI elements. One can create several face objects that hold elements from different SVG files, and as per the program logic can add-remove these 'face' objects from the canvas. The elements in the SVG files can be addressed as attributes of the face objects in which they are loaded. This makes the app source code very intuitive. The management of the element objects is done behind the scene without the app programmer having to worry about it.  
  
To demonstrate these features, I have written a simple yet useful app using above concepts. It's a twitter client, written using [python-twitter][0] library as backend and inkface-python as front end. This app depicts friends' and public's twits in a more playful manner as clouds and banners, rather than rectangular gtk widgets. It enables text-entry by a face object called 'Keyboard' which implements the logic of text entry (from touch screen interface as well as actual keyboard of n810). I want to polish the app further before making a demo video, so I am not going to rush it today.  
  
The inkface infrastructure is now divided into three libraries: the SVG parser and renderer library - libaltsvg (derivative of librsvg); the python bindings for inkface - inkface-python; a helper python library which defines above mentioned abstractions - inklib. There are deb packages for each of these components. A good news is, I have got permission to upload these packages to maemo extra repo; so users now won't have to worry about dependencies.  
  
Soon I will have to seriously concentrate on the performance issues. As you will observe while running the twitter client, the app takes nearly 50% of n810's total 128M memory. So it surely is not healthy. The python ref count debugging made sure that the memory was no longer leaked in buckets; but a vector graphics based app is known to need more resources. I plan to look deep into librsvg and cairo data structures to trim down the memory usage.  
  
Meanwhile, this update also has some code for OpenGL backend, however it's disabled by default. It is targeted for desktop and OpenGL ES based handhelds.  
  
Tommorrow I am leaving for a vacation, so after I return next week, I will do some final testing and release the deb packages.  
  
That's all for now.  
  
Merry Christmas to all!!!

[0]: http://code.google.com/p/python-twitter/
