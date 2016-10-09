---
layout: post
title: "ReaderScope 1.8.{2,3} - new authentication and global share"
---
ReaderScope 1.8.{2,3} - new authentication and global share
===
I released 1.8.2 couple of days ago. The only change it had was the new login mechanism. Google reader team [announced][0] on fougrapi group (that stands for "Friends of the Unofficial Google Reader API") that Google Reader soon will be discontinuing the old SID-based login mechanism. Thanks to them for announcing this well before the actual change is supposed to happen (sometime in April). ReaderScope accordingly has been updated to follow the new rules.  
  
This change is almost painless for username/password based logins. However the  AutoLogin is a little hairy issue. The [library][1] used to get AutoLogin working is unsupported and undocumented. There is an official way to do AutoLogin kind of thing on Android 2.0 devices, but it requires access to actual device to test and still I hear it's not well documented. Besides the devices at versions <2.0 are going to be there for  a long time. Therefore I got the undocumented and unsupported library to get working somehow with the new auth mechanism. However the changes I had to make were only little short of hocus-pocus. So I was very skeptical about how it was working. I released a [preview][2] on ReaderScope mailing list. So far the feedback of the preview release and actual 1.8.2 has been positive. I haven't seen anyone reporting issues due to failed logins. I have strategic log statements to detect if things go wrong with authentication. So just mail me the logs if you see suspicious behavior. Settings \> Logs. Menu \> Email.  
  
Today in 1.8.3, I also fixed a bug which would have caused auth problems if anyone was upgrading from pre-1.2.5 installation.  
  
With the new authentication done, I have a very exciting feature implemented in 1.8.3\.  
  
When you share the news item now, you will have option to trigger the global sharing apps. They could be your favorite Twitter, Facebook, Email clients. The most useful one I found was "Read It Later" which lets you save the news item to your [InstaPaper][3] account for reading later. These are the same apps that you see when you "Share Page" from browser.  
  

[![](http://1.bp.blogspot.com/_W6UcJjyXr24/S5sdQs35fpI/AAAAAAAADl0/aNW-5Wyt_nc/s640/share-global-image.png)][4]  
I remember someone had requested this feature once long time ago. I am sorry it took so long to implement. But now that it is here, I am sure you will enjoy it.  
  
_Ads:_  
_\* [Hello, Android: Introducing Google's Mobile Development Platform (Pragmatic Programmers)][5]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=1934356492)_  
_\* [Professional Android Application Development (Wrox Programmer to Programmer)][6]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=0470344717)_  
_\* [Android Wireless Application Development][7]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=0321627091)_

[0]: http://groups.google.com/group/fougrapi/browse_thread/thread/e331f37f7f126c00
[1]: http://github.com/android/platform_frameworks_opt_com.google.android/blob/master/framework.jar
[2]: http://groups.google.com/group/readerscope/browse_thread/thread/75267859c5edd897
[3]: http://www.instapaper.com/
[4]: http://1.bp.blogspot.com/_W6UcJjyXr24/S5sdQs35fpI/AAAAAAAADl0/aNW-5Wyt_nc/s1600-h/share-global-image.png
[5]: http://www.amazon.com/Hello-Android-Introducing-Development-Programmers/dp/1934356492?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
[6]: http://www.amazon.com/Professional-Android-Application-Development-Programmer/dp/0470344717?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
[7]: http://www.amazon.com/Android-Wireless-Application-Development-Conder/dp/0321627091?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
