---
layout: post
title: "ReaderScope upcoming changes"
---
ReaderScope upcoming changes
===
Last weekend I released ReaderScope 1.9.8\. It has some changes that should fix crashes that some users have reported in comments at Android market. These crashes went unnoticed for such a long time, because I didn't see them myself during my testing and they were not captured by the built-in crash reporting mechanism. But I found about them last week, thanks to [Android market's new crash report collection][0] mechanism. One frequent crash was happening in the background download service and it wasn't captured by RS's crash handler. It should be fixed in v1.9.8\. So thumbs up to Android team for adding this new facility to Market.  
  
But this post is mainly about what's coming next. For starters, the version number will now graduate to 2.x. And then there will be a key change in the way free version of ReaderScope works.  
  
Right now you can download ReaderScope from various market places for FREE. It has the basic look, with what is known as Legacy color scheme. It has Ads below the news screen. It has a handy widget, but it cannot be refreshed unless the app is unlocked with Value pack. The value pack is available for $2.49\. Once you buy it and enter the unlock code, you get full access to 3 additional themes, no Ads, fully functional widget and ability to see favicons against your feeds.  
  
Starting with 2.x, you will be able to access the full functionality of ReaderScope right out of the box, when you install the free app from any market place. The default color scheme will be changed from Legacy to Night (which so far I've heard is most popular), but you can change to others if you want. There will be no ads. You will have fully functional widget (If you are like me, you will read half of your news via the widget). The favicons will be visible.  
  

[![](http://2.bp.blogspot.com/_W6UcJjyXr24/TAYCHznGa6I/AAAAAAAADoo/6_0C3MQiVyY/s400/preview_night.png)][1]  
So what's the catch? The free version will expire in 5 days. You can buy the Value pack for $2.49 and unlock it.  
  
In addition, support for Android 1.5 will be dropped.  
  
Why this change?  
  
There are couple of reasons.  
  
1\. The default (legacy) color scheme is super dull. And yet, that's the first impression users get when they download the free app. I have read many users complaining about the "awful" UI of ReaderScope, and I believe part of it is the dull color scheme. So even though some pretty color schemes are hidden in the app, users don't know about them until they dig down 2 layers of settings and see the theme previews.  
  
2\. The admob code can make the UI sluggish on slow networks. When the app starts, the admob jar downloads an Ad over network. So if the network is slow, this request can sometimes add to the startup time of the app. And the worse part is, it happens even when you have unlocked the app. With the unlocked app, you won't see the ads, but I don't have control over admob code and make it stop fetch that one ad at startup. With 2.x, admob jar will be completely removed.  
  
3\. Dropping support for 1.5 had to be done someday. Only after that features from 1.6+ SDKs could be used. I hope, the users stuck with 1.5 will soon get updated by their carriers (or they will start using cyanogen like me ;).  
  
The 2.x version will make no difference to users who have already bought the value pack, they will keep getting updates as usual. Others who have been using the app without the Value pack, will see a 5 day expiration notice upon upgrade. They will need to buy the value pack within that time.  
  
However, if you are happy with the way free ReaderScope is right now, you will have an option. You will find v1.9.8 apk available for download [here][2]. Obviously, it won't get any fixes/features, but the app is quite stable as it is today and you can use it for free if you want. However if you want ongoing fixes and features, you will have to upgrade to 2.x and buy a value pack within 5 days.  
  
First 2.x release should hit the market around next week. Till then please, let me know your feedback on this change.

[0]: http://android-developers.blogspot.com/2010/05/google-feedback-for-android.html
[1]: http://2.bp.blogspot.com/_W6UcJjyXr24/TAYCHznGa6I/AAAAAAAADoo/6_0C3MQiVyY/s1600/preview_night.png
[2]: http://readerscope.googlegroups.com/web/ReaderScope-1.9.8.apk
