---
layout: post
title: "Preview android.R.drawable.* images"
---
"Preview android.R.drawable.* images"
===
This morning I was going through the Android SDK docs- specifically android.R.drawable class, to find out what stock icons android has that I can use in my project. Android has lot of icons in this class and one is encouraged to use stock icons whenever possible.  
  
However I couldn't find any way to see how these icons look like. Their names are supposed to tell something about them, but they are vaguely descriptive at best. So I asked around on [stackoverflow][0] for help. I got a helpful link, but it is still a subset of all the drawables.  
  
After a bit of thinking, I figured java reflection can help here and I put some code together. I ended up with a simple app which lists all the icons alongside their names. So now when you want to check out how a particular android.R.drawable.\* looks like just scroll through this list.  
  

[![](http://lh6.ggpht.com/_W6UcJjyXr24/SyeSoT9NwgI/AAAAAAAADgs/26gpn1tIocg/screenshot2.png)][1]  
Get the [tarball][2] and the [apk][3]. For the basic code snippet, check out my reply on [stackoverflow][0].  
  
Ads:  
\* [Professional Android 2 Application Development][4]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=0470565527)  
\* [The Busy Coder's Guide to Advanced Android Development][5]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=0981678017)  
\* [Unlocking Android: A Developer's Guide][6]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=1933988673)

[0]: http://stackoverflow.com/questions/1905128/how-to-preview-r-drawable-images
[1]: http://lh6.ggpht.com/_W6UcJjyXr24/SyeSoT9NwgI/AAAAAAAADgs/26gpn1tIocg/screenshot2.png
[2]: http://www.altcanvas.com/downloads/drawablepreview.tar.gz
[3]: http://www.altcanvas.com/downloads/apks/drawablepreview.apk
[4]: http://www.amazon.com/Professional-Android-2-Application-Development/dp/0470565527?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
[5]: http://www.amazon.com/Coders-Guide-Advanced-Android-Development/dp/0981678017?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
[6]: http://www.amazon.com/Unlocking-Android-Developers-Frank-Ableson/dp/1933988673?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
