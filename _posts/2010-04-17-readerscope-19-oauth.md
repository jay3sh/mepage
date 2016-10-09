---
layout: post
title: "ReaderScope 1.9 - OAuth"
---
"ReaderScope 1.9 - OAuth"
===
For past month or so, some of you (ReaderScope users) might be facing problems if you were using AutoLogin. This happened after I updated the login mechanism in [v1.8.2][0] to support Google Reader authentication changes. I won't go into the details, but AutoLogin is very likely to fail in the new scheme of authentication. So I advised some of you who sent me the error reports to switch to Username/Password login. It was a temporary solution.  
  
Today I am glad to announce that starting with v1.9 ReaderScope supports **OAuth** login for Google Reader - the right way**to login **_**without password (compared to other password less alternatives at least)**_.  

[![](http://farm3.static.flickr.com/2074/1529124811_67fcabab2d_m_d.jpg)][1]  
This has been possible only after Google Reader team [enabled OAuth login][2] for their service a few weeks ago. I have been working since to get ReaderScope working with OAuth. Not all the time was spent on OAuth, but in order to implement OAuth I had redesign entire networking layer of ReaderScope (which I am glad I did because I could improve some things along the way).  
  
Finally RS with OAuth is ready. If you were still using AutoLogin, then after upgrading to v1.9 you will get a warning message that AutoLogin is no longer supported and you will be automatically logged out. On restart you will be taken to Login screen where you can start doing OAuth login.  
  
If you are using username/password, then after upgrading to v1.9 you will get a message informing that a new password less login option is available. You won't be forcefully logged out though. You can choose to logout and relogin.  
  
I have been testing most of the functionality in past couple of days. But I won't be surprised if some holes were left out. Please report any problems you might face or sent crash reports if you get any.  
  
Enjoy the upgrade!

[0]: http://jyro.blogspot.com/2010/03/readerscope-1823-new-authentication-and.html
[1]: http://farm3.static.flickr.com/2074/1529124811_67fcabab2d_m_d.jpg
[2]: http://groups.google.com/group/fougrapi/browse_thread/thread/4430c9a6dea4d70f
