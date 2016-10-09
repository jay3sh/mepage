---
layout: post
title: "Visualizing source code"
---
Visualizing source code
===
I always find it difficult to understand the legacy code after joining a new project. I cannot understand it until I can visualize it. Cscope, Ctags have been great help in this effort, but they don't present the source code structure in visual form. I tried KScope a while back, it's good. But today I got working a very useful method of visualizing the program execution. It's documented in this [article][0] on IBM Developerworks.  
  
If your project has a C binary, then using the pvtrace utility mentioned in the article (which uses addr2line) and graphviz, you can create awesome picture of your C source code. (I haven't tried this yet on C++). One hiccup that was keeping me from getting this to work was resolved today. I was running it on an executable that was linking to a shared library. So even though I was compiling the whole library and the executable with debug symbols, the addr2line utility couldn't get the symbols that were in the shared library. When I realized that, I re-ran the linking part of my executable, so that it would now link the .a file statically, instead of .so file dynamically. The resultant binary had all the symbols.  
  
After following all the steps in the article I came up with this picture.  
  

[![](http://lh3.ggpht.com/jayeshsalvi/SKFBqxnyGUI/AAAAAAAABZY/EBGQJk4_ow4/s144/pvtrace-librsvg.jpeg)][1]

[0]: http://www.ibm.com/developerworks/library/l-graphvis/
[1]: http://picasaweb.google.com/jayeshsalvi/MyFrequency/photo?authkey=OknnHBMRY90#5233536445111736642
