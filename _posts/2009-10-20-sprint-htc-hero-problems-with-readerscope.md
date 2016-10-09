---
layout: post
title: "Sprint HTC Hero problems with ReaderScope"
---
"Sprint HTC Hero problems with ReaderScope"
===
\[Update: A fix for this problem is released in v1.2.8a. Please update.\]  
  
In past 2-3 weeks new users of Sprint HTC Hero have been trying ReaderScope. Unfortunately, they hit a crash immediately after they open the app. A lot of them have been helpful in sending the crash reports to me. I have now received over 10-12 such crash reports, all confirmed to be on Sprint HTC Hero devices. 

  
The exception that occurs implies that there is something wrong with one of the XML layout files. In reality, the XML layout in question is a very simple one and hardly seems to be the cause. I have posted the layout to android-developers group for others' review too. Most importantly this exception is not seen on any other handset or emulator.

  
I started a [thread][0] on android-developers group to discuss this issue. Although, there has been no authoritative answer whether this problem is in HTC firmware or not; couple more developers have reported similar issues their apps are seeing only on Sprint HTC Hero.

  
At the moment the only hope I have is next firmware update from HTC for these devices. If anyone has better suggestion, I am all ears.

  
Keep checking the thread mentioned above, or this blog. Hopefully we will find the solution soon. Thanks for using [ReaderScope][1]. 

[0]: http://groups.google.com/group/android-developers/browse_thread/thread/bf2ea0e4e7accc11/e86377c78eaa2d37?lnk=gst&q=app+gives+layout+errors#
[1]: http://www.altcanvas.com/android/readerscope
