---
layout: post
title: "ReaderScope Beta2"
---
ReaderScope Beta2
===
Spent last couple of days working on the UI and fixing few bugs. Just uploaded beta2 to the Android market. Here is the list of what's in beta2  

* Improvements to the news item view.  
  * News is shown using WebView now. You can now read the post as it is rendered on the webpage (with images and formatting)  
[![](http://3.bp.blogspot.com/_W6UcJjyXr24/So2ZCxtYVOI/AAAAAAAADTI/GUvO7c_6zGY/s400/itemview-beta2-controls.png)][0]  
[![](http://4.bp.blogspot.com/_W6UcJjyXr24/So2Zj05BniI/AAAAAAAADTQ/RgYR2yP0tQQ/s400/itemview-comic-landscape.png)][1]  
  
  * The panel of buttons (star, share, etc.) is hidden by default. This gives maximum space to the actual news item. It can be summoned by pressing the "Menu" button.
  * Two arrow buttons on both sides of the title let you load previous or next news item in the list, without going back to the item list.  
* Fixed a bug that will most likely resolve the issue mentioned in the first comment in Android Market. It was due to a Database update glitch.  
* Some more fixes went into properly handling the scenarios in offline mode. They will be handled gracefully now and wherever cache is available news items will be displayed. (For the images to load however network is needed)So try it out!

[0]: http://3.bp.blogspot.com/_W6UcJjyXr24/So2ZCxtYVOI/AAAAAAAADTI/GUvO7c_6zGY/s1600-h/itemview-beta2-controls.png
[1]: http://4.bp.blogspot.com/_W6UcJjyXr24/So2Zj05BniI/AAAAAAAADTQ/RgYR2yP0tQQ/s1600-h/itemview-comic-landscape.png
