---
layout: post
title: "OpenMoko, Android and a great hacking post"
---
OpenMoko, Android and a great hacking post
===
I was exploring the OpenMoko phone (Neo 1973) after I read about it in Dec'07 Linux Journal issue. It holds great promise. I might buy it as my next cell phone. Most of my gadget shopping research focuses on the versatility of the hardware. In other words, how many different ways can I use and reuse the hardware. This is essential because after few months I get bored of the software installed on that gadget. After buying Nokia n770, I have decided always to buy such "open" gadgets in future. So I was researching OpenMoko from that perspective. And OpenMoko as it turns out, is the most "Open" a gadget can be - as far as software stack is concerned (I am not interested in Hardware openness anyway).  
  
Nokia tablets have some part of their software stack as proprietary components. So one cannot totally write an entirely new operating environment easily. (There are some projects happening in that direction though - e.g. [Mamona][0]) But OpenMoko has completely open stack from the beginning. I believe OpenMoko uses a GTK based environment by default. But now that Trolltech has opened [Qtopia under GPL][1], there are [Qtopia images][2] available to run on OpenMoko. However I wanted to see if OpenMoko can run yet another upcoming mobile environment - android. So I did some googling. That brings us to the excellent post I mention in the title.  
  
Although its conclusion is disappointing, it gives deep insight into the mobile phone software stack. Check it out [here][3]. The conclusion is, Neo1973's processor architecture (ARMv4) is slightly older than what android project binaries are compiled against (ARMv5). That's why one cannot use OpenMoko's Neo1973 as an actual phone that runs Android - at least not in the current state (as most of you know there is no actual phone that yet runs Google's Android platform, it will come sometime in later part of 2008). Benno (the author of above post) has gone to the extent of emulating unsupported instructions (something I would never have dared to do) just to get android working somehow on the Neo1973\.   
  
Once in a while you come across a post/article that fulfills your tech appetite to the fullest. It explores the matter to the darkest technical depths (to which you may not be able dive yourself), but you understand totally what is being said. This gives you a vicarious experience that satisfies your thirst for technology and inspires you to continue on your quest. I believe authors of such articles are true hackers ([and I am not alone][4]).

[0]: http://dev.openbossa.org/trac/mamona/
[1]: http://arstechnica.com/journals/linux.ars/2008/01/18/trolltech-to-adopt-gpl-3-for-qt
[2]: http://wiki.openmoko.org/wiki/Qtopia_on_Neo_1973
[3]: http://benno.id.au/blog/2007/11/21/android-neo1973
[4]: http://paulgraham.com/hp.html
