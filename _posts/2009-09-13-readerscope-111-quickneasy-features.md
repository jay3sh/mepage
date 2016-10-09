---
layout: post
title: "ReaderScope 1.1.1 quick-n-easy features"
---
ReaderScope 1.1.1 quick-n-easy features
===
In the last post I forgot to mention the new feature added - crash reporter. But thanks to the users who used this feature to report the crashes, I found a subtle problem. Also a couple of suggestions from comments in last post were pretty easy to implement on a Sunday afternoon. So I just released v1.1.1 with the fix for the Login crash, two features (zoom functionality, filtering read items) and a little internal optimization.

  
About the crash. I believe it was seen only by G1 users who have slide-out keyboards (not necessarily though). The G1 users have to slide out the keyboard to type in the credentials. This puts the app into landscape mode. After they press the login button, the query goes over network and a rotating progress dialog is shown. Depending upon the network, this may take some time. Before the login is complete and the progress dialog is gone, if the user slides in the keyboard (which is very natural), they force the app into portrait mode. By default the android platform restarts the activity during these orientation changes. This causes the original progress dialog to not belong to the current window. So when the login response returns and the app tries to cancel the progress dialog, it crashes. The solution I have put in v1.1.1 is to override the default behavior of android and make it not to restart the app. This will not make any visible change in the user interface, except that now the app won't crash even when you slide in the keyboard very quickly.

  
Now about the features. You will now see a filter icon on top of the list of news items (the 2nd screen). If you tap it, all your read items will get hidden. If you tap it again, they will be visible again.

  
Without filter:

  
[![](http://2.bp.blogspot.com/_W6UcJjyXr24/Sq0R1jTkmjI/AAAAAAAADY0/bCQ-0LVM8Vo/s400/filter-off.png)][0]  
  
With filter:

  
[![](http://4.bp.blogspot.com/_W6UcJjyXr24/Sq0R19EJkjI/AAAAAAAADY8/_6Ll_WiuoU8/s400/filter-on.png)][1]  

  
In addition, the news item now has zoom buttons to adjust the zoom.

  
[![](http://1.bp.blogspot.com/_W6UcJjyXr24/Sq0S4PUVsdI/AAAAAAAADZE/IP5UYnxK3mY/s400/zoompanel.png)][2]  
  
I am not very satisfied with the icons themselves, will try to make them pretty in future release.  
  
So give it a shot!

[0]: http://2.bp.blogspot.com/_W6UcJjyXr24/Sq0R1jTkmjI/AAAAAAAADY0/bCQ-0LVM8Vo/s1600-h/filter-off.png
[1]: http://4.bp.blogspot.com/_W6UcJjyXr24/Sq0R19EJkjI/AAAAAAAADY8/_6Ll_WiuoU8/s1600-h/filter-on.png
[2]: http://1.bp.blogspot.com/_W6UcJjyXr24/Sq0S4PUVsdI/AAAAAAAADZE/IP5UYnxK3mY/s1600-h/zoompanel.png
