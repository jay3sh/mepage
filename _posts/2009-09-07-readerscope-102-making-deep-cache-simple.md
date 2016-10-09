---
layout: post
title: "ReaderScope 1.0.2 - making deep cache simple"
---
"ReaderScope 1.0.2 - making deep cache simple"
===
As was rightly complained, the deep caching feature didn't seem to work in ReaderScope. It appeared so because a) If feed is not marked for periodic download, deep caching won't have any effect b) deep caching wasn't done for news items that were already downloaded. In 1.0.2 this is fixed. 

  
If you choose a feed for deep caching by going to Settings, it will automatically be marked as favorite (i.e. marked for periodic download). If the feed has news items already downloaded (before setting deep caching), then those news items will also be deep cached at the time of next download. I hope this will make the deep caching feature more intuitive. 

  
Note that you will be able to view the deep cached page by clicking on the 'Open Link' action button from panel. For deep-cached news items the web page will open inside the ReaderScope itself (instead of an external browser) and this will work even when you are offline.

  
Also note the performance implications of choosing feeds for deep cache. It will make your background downloads run longer and consume more memory and network. Imagine opening 20 webpages in the web browser one after the other (this is what happens in the background). So use deep caching with discretion. 

  
Apart from this, there are few more improvements. There is a slight change/improvement in notifications. There are now three distinct icons to tell different notifications from each other.

  
[![](http://1.bp.blogspot.com/_W6UcJjyXr24/SqU7n64mQhI/AAAAAAAADXs/yitcc5uBxkk/s400/icondload.png)][0]- This icon in the status bar will indicate that a download is in progress.

- This icon will not linger after download is complete. You will see a "Done!" ticker when download finishes and the notification will vanish. I thought having it after its job is done was unnecessary. However, I liked a suggestion that there should be a way to know when the periodic download took place. That information now will be available in the logs. Just go to Settings-\>Logs and at the top you will find results of latest 10 downloads.

  
[![](http://4.bp.blogspot.com/_W6UcJjyXr24/SqU9wVmjhPI/AAAAAAAADYE/KiZEW_5txTI/s400/download-log.png)][1]

[![](http://2.bp.blogspot.com/_W6UcJjyXr24/SqU7orMAUzI/AAAAAAAADX8/Nw_gPvh-OxM/s400/icondloaderr.png)][2]You will see this icon in the status bar when the periodic/manual download has failed for some reason - due to unsuitable/no network OR due to low battery, etc.  

[![](http://4.bp.blogspot.com/_W6UcJjyXr24/SqU7oCA8_lI/AAAAAAAADX0/fAGpNUBp8XM/s400/iconupload.png)][3]You will see this icon, for the actions (star/share/unread) that you perform offline and are pending. It signifies the actions that are pending upload.  

In addition, the action buttons menu has been made even more non-intrusive. When you press "Menu" the actions menu shows up. Now it will get hidden when you touch the news item (you don't have to press "Menu" again).

  
I hope you like 1.0.2\. Let me know.

[0]: http://1.bp.blogspot.com/_W6UcJjyXr24/SqU7n64mQhI/AAAAAAAADXs/yitcc5uBxkk/s1600-h/icondload.png
[1]: http://4.bp.blogspot.com/_W6UcJjyXr24/SqU9wVmjhPI/AAAAAAAADYE/KiZEW_5txTI/s1600-h/download-log.png
[2]: http://2.bp.blogspot.com/_W6UcJjyXr24/SqU7orMAUzI/AAAAAAAADX8/Nw_gPvh-OxM/s1600-h/icondloaderr.png
[3]: http://4.bp.blogspot.com/_W6UcJjyXr24/SqU7oCA8_lI/AAAAAAAADX0/fAGpNUBp8XM/s1600-h/iconupload.png
