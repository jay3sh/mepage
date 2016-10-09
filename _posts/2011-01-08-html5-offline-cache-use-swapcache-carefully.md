---
layout: post
title: "HTML5 offline cache - use swapCache carefully"
---
HTML5 offline cache - use swapCache carefully
===
HTML5 Offline caching is an incredibly useful feature that allows your users to load your website even when they are not connected to the Internet. When they visit your website first, the browser checks if your webpage mentions a cache manifest file in its html tag. If so, the browser downloads the manifest file and then downloads all the resources mentioned in that file. You are supposed to add all the resources that your webpage needs in the manifest file, so that when user is offline the browser can load the webpage from the cached version of those resources. You will find many articles that will help you implement offline caching for your website- like this [one][0]. This post isn't about it.  
  
If you are using offline caching, you may want to use advanced features like handling the events that are fired when the browser is updating the cache. If you frequently change your webapp, this is a good idea. I handle these events in [3DTin][1] to let the user know that the browser has found a newer version of the app on server and is now downloading it in background. When the download is complete, I show the user a refresh button which they can use to reload the page so that they can start using the new version.  
  
It was while coding this functionality that I came across the swapCache() API call. It sounded very cool and from some examples that I read I got to believe that when the cache download is finished (i.e. in the onupdateready handler), I can simply call swapCache() and user will start using the new version of my app. He/she won't have to reload the page. If you don't read the [documentation][2] of swapCache carefully you will get the same impression from simple examples around the net. It may not be a big issue, if your cache contains passive resources like image files. But my erroneous interpretation of swapCache led to a nasty bug in 3DTin few days ago, because I am caching javascript files too.  
  
The documentation clearly says:  

    [swapCache] does not cause previously-loaded resources to be reloaded; for example, images do not suddenly get reloaded and style sheets and scripts do not get reparsed or reevaluated. The only change is that subsequent requests for cached resources will obtain the newer copies.

  
This has huge impact if you are loading javascript or css files from cache. In my case, I use WebWorkers which load a separate javascript file after they are started. When 3DTin cache was updated by the browser and swapCache was called, the javascript file that WebWorker used to load was at a different version than all the other files that were loaded when webpage was opened. This led to failures that left me scratching my head for some time. Eventually when I realized this is what was happeneing, I stopped calling swapCache() and instead showed user a button to reload the app manually.  
  
I hope this post will save you from doing the same mistake that I did.  
[  
![Flattr this](http://api.flattr.com/button/flattr-badge-large.png)][3]

[0]: http://www.html5rocks.com/tutorials/appcache/beginner/
[1]: http://www.3dtin.com/
[2]: http://www.w3.org/TR/html5/offline.html#application-cache-api
[3]: http://flattr.com/thing/113848/HTML5-offline-cache-use-swapCache-carefully
