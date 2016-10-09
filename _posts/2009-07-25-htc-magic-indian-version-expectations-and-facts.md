---
layout: post
title: "HTC Magic (Indian version) - expectations and facts"
---
HTC Magic (Indian version) - expectations and facts
===
This month HTC Magic came to India. Being the first Android phone to be introduced in India, it is much longed for by Indian geeks. I know how much I have waited for it. Yesterday afternoon when I eventually received a list of dealers from HTC support, that are selling Magic, I almost left for the nearest one to buy a piece. But after I googled a little thouroughly, I found some early reports of HTC magic.  
  
If you are a geek in India looking for a hackable Android cell phone, HTC magic (so far) is not the one for you. The biggest attraction of Android, is the ability to install new apps and a rich variety of them. The biggest repository of such apps, is Android Market. It has loads of free and paid apps. Unlike Apple, Google doesn't enforce exclusivity on App store choice for Android phones. So there are other app repositories too - but they are not nearly as rich in variety as official Android Market. Now note that HTC Magic in India does not come with Android Market App.  
  
If you don't already know, here is the trouble: Android Market is only accessible through the app installed on the phones (you can check the featured/top apps from website, but can't download them from web). Furthermore, the Android Market App is not open source (like rest of the Android platform).  
  
There are however ways to get around this problem. Root the phone and flash it with a ROM image that has Android Market binary in it. (didn't i say this post if for geeks only :) You will find many places which have well documented steps on how to do this. Some of the best resources: [Haykuro's blog][0], xda-developers forum, [android-dls wiki][1], [Magic rooting post for South Africa version][2]  
  
The problem is, all of the above methods won't work for the HTC Magic released in India. Someone has already tried it [here][3] and reported [here][4]. Also some frustration can be seen [here][5]. The crux of the problem is Indian version of HTC Magic comes with "HBOOT-1.33.0010" which is a so-called "dreaded perfect" SPL. It will only accept signed images to flash the firmware, so the ROM images from G1, or ION or Hero are not useful with this HTC magic. There is however work going on to find a way around this. Follow this [thread][6]. There are many suggestions - ranging from dumping the memory during an update and searching for keys used to sign the firmware to [exploiting][7] the buffer overflow in linux kernel 2.6.27 to gain root access. People are offering money for someone to do this job. It will be interesting to see how this turns out. But all in all no Android market for HTC Magic in India.  
  
I also explored more formal channels. I emailed HTC support (which is very responsive BTW) asking "whether HTC plans to provide firmware updates in near future that will enable support for Android market and other Google Apps. OR HTC will never provide any such support?". They diligently replied:  
  
"In this regard, we would like to inform that we are not having such information that HTC is going to provide the android market software for Magic device in future or not.   
We request you to for regular updates visit our site i.e. [www.htc.com][8] "  
  
For a serious Android developer the need for rooting the device goes beyond just the Android Market app. Once the flashing powers are tamed, we can use the same device to test our apps for different ROMs - G1/ION/Hero for now.  
  
My impression is HTC Magic is not targeted for geeks in India ('m asking for too much you say? :). This version comes with Microsoft Exchange Sync facility (check [specs][9]) - something that is useful for the "suit". (This feature in itself is rare I believe, not seen in many of the US/Europe versions of Magic)  
  
Anyway. As far as my first purchase of Android phone goes, I see three choices.  

1. If someone successfully exploits the dreaded perfect SPL, I will buy Indian HTC.
2. If Google announces HTC ION (the GoogleIO version of Magic) as ADP2 I will order it (Note that ADP1 i.e. unlocked G1, is out of stock). 
3. If Samsung Galaxy (i7500) that is releasing in India next month comes with an exploitable ROM, I will go for it instead.  
In any case: I wait.

[0]: http://haykuro.theiphoneproject.org/
[1]: http://android-dls.com/wiki/index.php?title=Magic_Rooting
[2]: http://www.arbitraryuser.com/blog/2009/06/20/rooting-a-vodacom-htc-magic-and-upgrading-the-firmware-in-south-africa-to-get-android-market-and-more/
[3]: http://www.arbitraryuser.com/blog/2009/06/20/rooting-a-vodacom-htc-magic-and-upgrading-the-firmware-in-south-africa-to-get-android-market-and-more/comment-page-1/#comment-37671
[4]: http://www.techjini.com/blog/2009/07/17/htc-magic-android-phone-in-india-total-let-down/
[5]: http://www.google.com/support/forum/p/gmail/thread?tid=53f9dcc02b6d1657&hl=en
[6]: http://forum.xda-developers.com/showthread.php?t=535221&page=5
[7]: http://forum.xda-developers.com/showpost.php?p=4193367&postcount=41
[8]: http://www.htc.com/
[9]: http://www.htc.com/in/product/magic/specification.html
