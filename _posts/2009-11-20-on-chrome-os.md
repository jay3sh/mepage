---
layout: post
title: "On Chrome OS"
---
"On Chrome OS"
===
Last night _(IST)_ Google presented the Chrome OS details and opened the [source code][0]. I did some early twits looking inside the source code. Found the bits of [clutter][1], [debian][2], [moblin][3] down under there. My point of view was traditional. What a long time Linux user sees in a brand new OS - Window Manager, Package manager, RPC mechanism, etc. This was as soon as [@mattcutts][4] had posted that chromium source was out and before the actual presentation even started. When I however saw the presentation (vicariously that is - through the glasses of many tweeters and [Gizmodo's live report][5]), I found that, what I was looking for in the OS was totally irrelevant ...  
  
If you haven't seen the ChromeOS presentation videos, do [check them out][6].   
  
I won't go over all the features here, but this is what I liked the most  
  
1\. **Security**. Automatic patching of OS everytime it boots. I liked the thinking behind this model.  

> The basic application security model was developed 20 years ago. Right now, the application runs with "your" privileges, so if you can modify something, the app you're running can do it also. So a rogue app can damage your data or leak your data. It also forces users to make hard decisions about whether or not you trust the application. "These are decisions that are hard for normal users to make decisions about."

  
- as reported by Jason Chen of Gizmodo  
  
2\. **Local file system**. It is treated merely as a cache before the settings are pushed up into the cloud. It is completely encrypted, so in case of device loss, there is no fear of data theft.  
  
3\. **Only SSDs**. By the time first ChromeOS devices will ship, SSDs will be commonplace. Besides it seems the cloud will make local storage less important than the network connection. Also only supporting this very limited storage hardware, eases the driver support. Good move.  
  
4\. **Firmware**. When I first studied about the [LinuxBIOS][7] project, I came to realize how wasteful the booting process is. The BIOS initializes the hardware, reads the kernel from the storage device, starts the kernel and the kernel initializes the hardware again. The root of this setup is in the way our computers evolved and not much in the form of technical challenge. ChromeOS is going to support only specific firmware. Their boot process is tuned so that no redundant initalization steps are required, thus improving the boot time greatly. As I said, this is not a new invention. Projects like LinuxBIOS had the same implementation, but only on the hacked up devices in their labs. Now however, with Google putting its weight behind this new family of ChromeOS devices, it seems that we will be freed from the wasteful boot up process after all.   
  
Putting things in perspective... I have liked Apple's devices. Simple, elegant, functional, work out of the box. Why is that so? Why don't they freeze once in a while or give BSOD like Windows. Why don't they have configuration problems like Linux, after all at the core they have a community developed open source kernel just like linux. The reason lies in Apple completely owning the entire OS stack. They only design, implement, test, debug and deliver for a specific set of hardware. That's why they can concentrate all their design and engineering skills into making the best computing devices in the market.  
  
I think Google is going to do the same with ChromeOS. Except in their case, the kernel will be Linux and Google won't be "owning" the stack, but will be tightly controlling it. Most of the stack will be open source, for anyone to look at and adapt to their devices if they want to. They will however have complete control on what goes and doesn't go in the official ChromeOS, just like Android (and that is entirely fair and necessary IMO, no matter what FOSS extremists say). On top of this (and most importantly), they will have a unique cloud based computing vision in building these next generation devices.  
  
I like the way Google uses its power in completely reinventing certain fields with their products. ChromeOS is yet another example and worthy of cheer at that.

[0]: http://src.chromium.org/
[1]: http://twitter.com/jyro/status/5863486581
[2]: http://twitter.com/jyro/status/5863586441
[3]: http://twitter.com/jyro/status/5863904960
[4]: http://twitter.com/mattcutts
[5]: http://live.gizmodo.com/
[6]: http://www.slashgear.com/google-chrome-os-gets-detailed-video-1963923/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+slashgear+%28SlashGear%29&utm_content=Google+Reader
[7]: http://en.wikipedia.org/wiki/Coreboot
