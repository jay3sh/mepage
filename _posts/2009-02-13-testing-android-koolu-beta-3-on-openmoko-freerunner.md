---
layout: post
title: "Testing Android (Koolu Beta 3) on Openmoko Freerunner"
---
Testing Android (Koolu Beta 3) on Openmoko Freerunner
===
\[My Openmoko Freerunner hadn't got much love in a long time. So its battery discharged to absolutely no charge. Then I realised that I have got a deadlock - FR cannot turn ON without battery and the battery won't charge unless FR is ON (because the firmware can't negotiate enough current from USB port to charge the battery, the running FR kernel can do that). Anyway, after coming to India I got a cheap instrument that tests and charges generic cell-phone batteries like FR's. The device's simplicity is amazing. It has two metal probes that can be adjusted to make contact with the battery terminals and with help of two buttons you can either test battery's charge or start charging it. Point is, the external charging worked.\]  
  
Now the more important topic...  
  
As the Freerunner came back to life, I decided to test the latest Android images on it. Openmoko [wiki][0] has details of all (three so far) efforts trying to get Android running on FreeRunner. I decided to try [Koolu][1]'s images. They are frequently releasing new images and their latest release is billed as Beta 3\. Flashing the phone was straightforward - just followed the [instructions][2].  
  
Once the phone booted into Android (the first boot seemed very slow, but subsequent boots took 1 minute as I timed them), I could see what's all the Android noise about. This is my first experience with Android (saw it a bit in emulator, but not much). Android has rendered the best GUI on the screen of this phone so far. I was impressed with some animation effects (whatever happened to glamo's limited capabilities to do accelerated graphics - although I am not sure yet if these effects are done in h/w).  
  
Most importantly, I got the wifi working on this phone first time. No other distro I had tried in the past has enabled wifi of this device. Android, easily scanned and detected my wireless network. A small problem came, when entering the WPA2 key. Note that the only official Android phone out there (HTC G1) has hardware keyboard, so Google has been slow in implementing a virtual keyboard. However I found a keyboard after some exploring (dunno if it's Google-added or some community effort). This keyboard is not perfect, but it works. The problem is, it is not accessible when WPA2 key entry dialog appears. So I can't tap in the password. After looking at Koolu's release notes, I figured one workaround is to type the password in Notepad app and then paste it in the password box. That worked.  
  
After connecting to wifi, I tested the browser, visiting many sites (yeah mostly those tweets some of you read ;). Another impressive app is email. Configuring my gmail account with it was a 2-step cake walk and I was in my inbox in no time. I could also compose an email without much trouble.  
  
Sadly however, the GSM is not working. I am using Tata Indicom's SIM card - which [should be][3] in GSM 1800 band (and my Openmoko is 850/1800/1900). But still it didn't detect any network (It didn't work even with the Qt image I had earlier - so I won't blame Android for it). I read that the GSM libraries in Android are not yet completely open, so there are some difficulties there. I need to learn the GSM Modem commands to debug this issue.  
  
The accelerometer works. There is an app named [Amazed][4] that lets you navigate a ball using the accelerometers inside the FR. It's really cool.  
  
I don't expect GPS to work, (although the antenna icon keeps radiating green waves) - because GPS satellites don't like me. :)  
  
I tested an alarm app, which confirmed that the vibrator and sound also work great.  
  
The 'Global Time' app has that 3D revolving earth that's depicted in some [youtube videos][5]. But its FPS is not so great, I believe there is no h/w acceleration there.  
  
I also browsed through the software repository. Installed a game 'MiniSpaceWar'. It installed correctly, but I guess it was too heavy for FR, it took forever to load and then crashed Android, leading to a reboot.  
  
Unfortunately, I couldn't get a screenshot tool for android. So can't post any of them now. But if I manage to get any, I will [tweet][6] them.

[0]: http://wiki.openmoko.org/wiki/Android
[1]: http://freerunner.android.koolu.com/release-files
[2]: http://wiki.openmoko.org/wiki/Android_on_Freerunner
[3]: http://www.gsmworld.com/roaming/gsminfo/net_inkl.shtml
[4]: http://www.youtube.com/watch?v=HncLJaxJl4Y
[5]: http://www.youtube.com/watch?v=m4NbsLmF9j0
[6]: http://twitter.com/jyro
