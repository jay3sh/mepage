---
layout: post
title: "Mac book red light audio jack problem on Linux"
---
Mac book red light audio jack problem on Linux
===
When I upgraded my Macbook (2,1) to Ubunut 10.10 last week, I realized after a while that it wouldn't play any audio through the audio jack. The built-in speakers were working well, but as soon as I plugged in the headphone the built-in speakers would go off (as expected) and the headphone would be quiet too.  
  
Then I got little concerned when I saw the red glow coming out of the audio jack. This macbook is now 4 years old, so I assumed the red light means some malfunction. But after I searched around, I found it was a known issue. The red light wasn't any indicator, but optical audio output. Many mac forums had discussions on this topic. Most of them fixed it by sticking a pin or toothpick into the jack, juggling around a little or shorting some internal probes. They reported that this eventually turns the light off and audio out was switched back to traditional wired output. I tried the same, but no luck. In retrospect, those all posts were with Mac OSX installed. So in their case, the optical audio output was probably turned on in hardware and had no way to turn off in software. Whatever the case, their solution didn't work on my Ubuntu installation.  
  
I figured that, the optical audio output was not turned on in hardware, because when I rebooted the laptop in Mac OSX the red light used to go off and headphones worked. So now it remained to find some software tweak to fix the problem. Eventually I found this [thread][0] on ubuntu forums. Following two commands fixed the problem.  
  

    # Turns off the optical audio out  
    amixer set IEC958 off  
      
    # Turns on the headphone speakers  
    amixer set Speaker,1 on  
      
    # In case you want to tweak built-in speakers  
    amixer set Speaker,0 on  
    

  
If your system is different than mine, it will help to run amixer without any options and see the list of audio channels and their states it prints out.  
  
Hope this trick helps someone.  
  
Ads:  


[0]: http://ubuntuforums.org/showthread.php?t=898904
