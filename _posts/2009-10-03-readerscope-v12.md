---
layout: post
title: "ReaderScope v1.2"
---
"ReaderScope v1.2"
===
After 1 week of reimplementation of news cache, 1 day of testing and 1 last hour of crazy epiphanies and patches... v1.2 is out.

  
Here is what is new.

  
With the brand new caching scheme, you can store your bulky news cache on SDCard. Right now my HTC magic is pulling about 1000 images from web (which must be total 10-20MB in size), but the app manager shows ReaderScope only taking 588KB on phone. Because all the content is going to the SDCard.

  
[![](http://4.bp.blogspot.com/_W6UcJjyXr24/SseGbAi29XI/AAAAAAAADZ8/nFl85SSuqd8/s400/storage-sdcard.png)][0]

  
Also if you do periodic downloads with caching the content, you will notice that the subsequent downloads will take significantly shorter times. This is because, the new caching mechanism accurately downloads only the content that's not in the cache.

  
In addition, there are few new features that users have been asking for.

  
**Mark All As Read**

  
[![](http://1.bp.blogspot.com/_W6UcJjyXr24/SseIc-zAzvI/AAAAAAAADaE/SCQEGJ0zYMA/s400/mark-all-read.png)][1]

  
You can mark all the items in a feed read. Does the same function as its counterpart in Google Reader web interface.

  
**Share with note**

[![](http://4.bp.blogspot.com/_W6UcJjyXr24/SseIdFBukqI/AAAAAAAADaM/GLIqlsb6y5s/s400/share-with-note.png)][2]  

  
You can just "Share", or you can add a note if you wish. Again same job as its counterpart in Google Reader web interface.

  
**Manual override to go offline**

  
[![](http://3.bp.blogspot.com/_W6UcJjyXr24/SseIdfTA8YI/AAAAAAAADaU/isaX7Zw8iK8/s400/go-offline.png)][3]

  
One loyal user of ReaderScope has been asking for this feature for a while. It has very practical use for certain. I finally got around to implementing it in v1.2\. There are situations when you are online, but you don't want ReaderScope to use the network (because it costs $$). You could already customize the periodic background downloads to not use such specific network. But, you may want to restrict GUI's access to the network too. While you are reading the news, ReaderScope marks the items read, stars/shares them if you choose - this is synced with Google Reader over network. 

  
With the "Go Offline" button, all these front-end actions will be batched instead of doing instant sync over the network (and you will see them in the Pending notification at the top, the one you see when you are actually offline). When you want to go online with the right kind of network, choose "Go Online" and tap on the notification, it will sync your actions.

  
Moreover, some bug fixes have also gone in. 

  
Hopefully you will enjoy the new version. It's not unlikely that some silly bugs went unnoticed during this big rewrite of the caching mechanism. If you see any problems or hit any crashes, please email me the crash report (using the in built crash reporter).

  
Enjoy!

  


[0]: http://4.bp.blogspot.com/_W6UcJjyXr24/SseGbAi29XI/AAAAAAAADZ8/nFl85SSuqd8/s1600-h/storage-sdcard.png
[1]: http://1.bp.blogspot.com/_W6UcJjyXr24/SseIc-zAzvI/AAAAAAAADaE/SCQEGJ0zYMA/s1600-h/mark-all-read.png
[2]: http://4.bp.blogspot.com/_W6UcJjyXr24/SseIdFBukqI/AAAAAAAADaM/GLIqlsb6y5s/s1600-h/share-with-note.png
[3]: http://3.bp.blogspot.com/_W6UcJjyXr24/SseIdfTA8YI/AAAAAAAADaU/isaX7Zw8iK8/s1600-h/go-offline.png
