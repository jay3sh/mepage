---
layout: post
title: "Android fragmentation : How big a deal is it?"
---
"Android fragmentation : How big a deal is it?"
===
I came across this Infoworld story via slashdot the other day, with a sensational headline: "[Google Android - a Universe of Incompatible Devices][0]". The actual headline of the article is even more catchy "[Google Android's self destruction derby begins][1]".  
  
The job of headlines is to attract readers. But the truth is hardly black or white. Furthermore the claims made in the article don't address specific issues that developer may or may not face. After spending past 8-9 months developing [ReaderScope][2], I think I can better judge these fragmentation issues from developer's point of view. I have both positive and negative opinions in this matter, but all are based on my first hand experience.  
  

* **Backward compatibility** : All the Android platform versions are backward compatible. If you developed an app for Android 1.5, then it will still work on latest and greatest Android 2.1\. It may look blurry on high DPI devices, but it will work nonetheless. I have hardly heard any case otherwise. Therefore, It doesn't make sense to call all the Android devices incompatible.
* **Games** : I believe Game developers are the most affected by fragmentation issues. But even then I think their major concern is differing screen sizes and input controls. Hence I don't think release of 2.0, 2.1 would have affected them if they had already updated their games for all three screen sizes as per the guidelines in 1.6\.
* **Standard UI** : If your app is not a game and/or you are using standard UI widgets, then it doesn't take much effort to qualify your app on newer SDK versions. I didn't have to make any specific changes to ReaderScope for 2.0 and 2.1 platforms. I know of people using it on these newer phones and aren't having any platform specific issues. I however hit a problem when I started supporting 1.6\. Some users started seeing crashes when ReaderScope was writing to SDCard, it later became clear that it was due to a newly introduced permission in 1.6\.
* Google published a [chart][3] on Jan 4th this year that shows current distribution of platform versions. It seemed like a great step to alleviate this problem. Unfortunately, they haven't updated that chart ever since. Nexus one was released on Jan 5th, so that chart is pretty outdated IMO. I think Google can certainly do a better job there to help the fragmentation problem.
* It's shocking that there are still so many Android 1.5 users. I heard from a user in Russia, that they won't be upgrading from 1.5 until May this year. That's way too long. I don't know what's the update schedule in India, but OTA updates are unheard of in India, because the phone didn't come with mandatory data plan. (Thanks to cyanogen, my Magic is running a ROM somewhere between 1.6 and 2.0.) [Android 1.5 R3][4] came back in April 2009\. So 1.5 is getting over a year old. It's high time Google/their partners start updating these poor souls.
* The backward compatibility is a huge win, but the biggest disadvantage of fragmentation is you cannot use new features introduced in newer versions. I don't want to code live wallpapers (introduced in 2.1), but there are some great improvements in 1.6 and 2.0 that I would like to use, but can't because then I would have to drop support for 1.5 users. There is some reflection witchcraft that can help in this case, but it may not be worth it.
* There is one surprising thing that I recently discovered by accident. The browser shipped in v1.6 doesn't support HTML5 offline caching feature. It is only supported in 2.0+ browsers. I believe that's is an important feature and iPhone seems to have had it for a long time. That's a key feature for cross platform web apps.  
That's pretty much I can think of till now. Let me know in comments what are your opinions on this matter.  
  
_Ads:_  
\* [Professional Android 2 Application Development][5]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=0470565527)  
\* [Android Programming Tutorials: Easy-To-Follow Training-Style Exercises on Android Application Development][6]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=0981678025)  
\* [Android Application Development: Programming with the Google SDK][7]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=0596521472)

[0]: http://tech.slashdot.org/story/10/02/23/1616221/Google-Android-mdash-a-Universe-of-Incompatible-Devices
[1]: http://infoworld.com/d/mobilize/google-androids-self-destruction-derby-begins-863
[2]: http://www.altcanvas.com/android/readerscope
[3]: http://developer.android.com/resources/dashboard/platform-versions.html
[4]: http://developer.android.com/sdk/android-1.5.html
[5]: http://www.amazon.com/Professional-Android-2-Application-Development/dp/0470565527?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
[6]: http://www.amazon.com/Android-Programming-Tutorials-Easy-Follow/dp/0981678025?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
[7]: http://www.amazon.com/Android-Application-Development-Programming-Google/dp/0596521472?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
