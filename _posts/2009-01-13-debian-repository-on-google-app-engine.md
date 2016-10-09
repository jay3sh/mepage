---
layout: post
title: "Debian repository on Google App Engine"
---
"Debian repository on Google App Engine"
===
So here is the post about the [eureka moment][0] I promised on Twitter.  
  
Last week before releasing Inkface v0.1.2 and twitter-inkface client, I was working on submitting the packages in maemo-extras-devel repo. I was following a long list of instructions. Halfway through the list, I noticed that the example package is assumed to have had autotools kind of build framework. One of my packages uses SCons. I had a doubt (yet unconfirmed) that it won't work. So I scratched my head and that brought to the surface one of the ideas I have had at the back of my mind for a long time. Using one of these "cloud" services to host a debian repo.  
  
And what cloud service can be better than the one that is absolutely free (for such a low traffic purpose, at least) - Google App Engine. So I went through the basics of Debian repo and put together an app for Google App engine. Under couple of hours, I had my very own Debian repo. (Yeah, that's when I leapt out of my bathtub and ran to twit '[Eureka Eureka!][1]') That's what you hit when you point your apt-get to repo.altcanvas.com.  
  
I have submitted the small script as a [recipe][2] in Google App Engine cookbook. You can also find [it][3] in altcanvas source tree.

[0]: http://twitter.com/jyro/status/1103834627
[1]: http://en.wikipedia.org/wiki/Eureka_%28word%29#Archimedes
[2]: http://appengine-cookbook.appspot.com/recipe/debian-repository-on-top-of-google-code-files/
[3]: http://code.google.com/p/altcanvas/source/browse/trunk/repoengine/
