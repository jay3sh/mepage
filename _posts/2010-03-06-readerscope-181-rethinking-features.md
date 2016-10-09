---
layout: post
title: "ReaderScope 1.8.1 - rethinking features"
---
ReaderScope 1.8.1 - rethinking features
===
In the release-early-release-often model, as the software product evolves over time, new features get added consistently. The same happened with ReaderScope for over 7 months. It started with very basic functionality and went through many iterations to reach at its current state.  
  
Adding lot of new features however has couple of risks. First one is affecting the performance. I try to keep that under control after completing a round of new features. Memory footprint analysis and some latency measurement checks have helped to keep the ReaderScope UI very responsive over time. The second downside of features is loosing the direction, unknowingly causing a feature creep. So once in a while, it is essential that the software developer steps back a little and reviews the direction his/her software is going in. That's what I am doing in this post.  
  
There is one feature in ReaderScope that I added few months back that I am not sure helps the main direction of the app. It is the tabbed interface. When I added it, my intent was to cater news from channels besides Google Reader. I put the Google News feeds under the **News** tab and was planning to add more feeds from popular news channels too. The third tab was **Social**. It had only a single feed for Twitter account. It smartly parsed the Twitter messages and extracted the news items pointed by the embedded links. (I love the Twitter feature and it's not going away, read below... actually nothing is going away for that matter).  
  
Over time I have realized that the tabs are not serving any useful purpose for most of the userbase. I would rather spend time improving the Google Reader specific functionality than supporting the half baked extra tabs.  
  
Therefore **starting from v1.8.1 the tabs are disabled by default**. You will only see the labels and feeds from your Google Reader account just like old days. The "Social Channels" label (which was part of the **Social** tab) will now appear at the bottom of your Google Reader List. If you want you can configure it to appear at the top or be invisible altogether (Settings \> Customize Layout).  
  

[![](http://2.bp.blogspot.com/_W6UcJjyXr24/S5ITHAzxiCI/AAAAAAAADls/ptsQ2GDq8uc/s320/screenshot1_1.png)][0]  
And for some reason if you like the tabs, you still have option. Go to _Settings \> Miscellaneous \> Enable Tab Interface_. You will get the old interface back.  
  
One more feature is the favicons. Favicons are pretty if you read the feeds that do have favicons. However, not all users may have subscribed to feeds that publish favicons. Out of my 250+ feeds at least 150+ show valid favicons. But for some users most of their feeds may not be publishing any favicons. For them the favicon placeholder appears empty. If they are using dark themes then these placeholders appear as white rounded squares. Understandably, those users would like to turn off the favicon feature. Now they can. Head over to **_Settings \> Value Pack \> Load FavIcons_** and uncheck the box if you  want. (The favicon feature concerns only the [Value Pack][1] users. You haven't got one yet? It's only $2.49, hurry!)  
  
I hope these changes simplify the UI for you. Let me know how you like it.  
  
v1.8.1 also has one crash fix. There was a bug which could lead to crash if you immediately quit the app after starting it. It was specific to Value pack owners. It is fixed in this version.

[0]: http://2.bp.blogspot.com/_W6UcJjyXr24/S5ITHAzxiCI/AAAAAAAADls/ptsQ2GDq8uc/s1600-h/screenshot1_1.png
[1]: http://market.altcanvas.com/readerscope
