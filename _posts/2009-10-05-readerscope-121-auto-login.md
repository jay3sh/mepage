---
layout: post
title: "ReaderScope 1.2.1 - Auto Login"
---
ReaderScope 1.2.1 - Auto Login
===
Today I came across this excellent article ["5 Nice Apps I refuse to use"][0] by [Chuck Falzone][1]. It talks about how all the Google Reader apps (or android app that needs access to Google services) ask for passwords to the user's Google account. As you know ReaderScope does it too. But I completely empathized with the author's point of view. For many like me, Google is the biggest closet in their wired home. Giving the key to this closet to any random app is scary for sure.

  
However, of all the login mechanisms I found out, the only supported method for a desktop/mobile app is asking user to enter his/her username and password. Google supports OAuth, but only for web apps. I wish they implement version of OAuth for desktop/mobile apps, just like Twitter. Another way, is to get the login tokens from Android platform. Although, it should be available as platform API, it is not. I guess the reason is, it will be limited only to 'Google experience' phones, hence it cannot be part of the platform.

  
But, thanks to the article I mentioned above, more info came out on this discussion. From the article I learnt, that a Google Reader widget accesses Google Account info available on phone. I went through the comments, and one of them gave a pointer to how this might be done. After following the [email thread][2], I found a way to do this. The solution is not perfect/ideal. It uses a [library][3] put together by a Google engineer ([@jbqueru][4]), but it is not an official part of platform. With the help of ubikdroid's example code from the thread, I put together an "AutoLogin" feature for ReaderScope (as of v1.2.1)

  
[![](http://1.bp.blogspot.com/_W6UcJjyXr24/SspExXnzC6I/AAAAAAAADac/v0yLWL8W0Ec/s400/autologin.png)][5]  

If you are using a 'Google Experience' phone (or a ROM with Google Apps), then you don't have to give your password to ReaderScope. Just press AutoLogin and you are in.

  
If the existing users want to remove their password (which by the way is [encoded before storage][6]) from ReaderScope and use this new auth mechanism, then you can do so without loosing your cached items. Go to Settings-\>Credentials Management. Press "Logout". Choose "No" to the prompt of deleting cache. The app will exit. Start it again, you will be taken to Login screen. Now choose AutoLogin.

  
If your phone is not 'Google Experience' phone, this will not work. You will get an error message.

  
I put this together in past few hours. Although it has passed my automated regression tests, there might be some rough edges. Let me know if you see any problems.



[0]: http://www.androidguys.com/2009/10/04/5-nice-apps-i-refuse-to-use/
[1]: http://twitter.com/chuckfalzone
[2]: http://groups.google.co.uk/group/android-developers/browse_thread/thread/7a6bf77910ca31e0/e353bb07f25b820d?hl=en&ie=UTF-8&q=GoogleLoginServiceHelper#e353bb07f25b820d
[3]: http://github.com/android/platform_frameworks_opt_com.google.android/blob/master/framework.jar
[4]: http://twitter.com/jbqueru
[5]: http://1.bp.blogspot.com/_W6UcJjyXr24/SspExXnzC6I/AAAAAAAADac/v0yLWL8W0Ec/s1600-h/autologin.png
[6]: http://groups.google.com/group/readerscope/browse_thread/thread/f00dc430b6720f2c
