---
layout: post
title: "Detecting HTC magic on Fedora"
---
Detecting HTC magic on Fedora
===
It has been full 72 hours I have had the HTC Magic now. I am starting to believe that this is going to be the pefect gadget I have ever had. It is a fully functional mobile+internet device (unlike the Freerunner - no offence); and it's completely programmable to the extent I care (Unlike any other cell phone I ever had); moreover it's hot and mainstream (unlike Nokia IT's I have had - again no offence) enough thus giving access to wide range of apps.  
  
Enough praise, now down to business.  
  
I found that the procedure to connect to the phone from desktop over the adb bridge is not at all the same as Freerunner Android. The Freerunner android connects to adb over a virtual network interface. That doesn't seem to be the case with HTC magic (or other Android devices for that matter).  
  
The Android SDK describes the procedure for Windows, Mac OSX and Linux; but their instructions for linux (Ubuntu only) have been called more like a work around than a solution.  
  
For Fedora it seems touching udev is not considered appropriate; instead doing the change in HAL config file is recommended. The solution posted in this thread works... but only once. After I disconnect the USB connection and then reconnect, the phone doesn't get detected when I do "adb kill-server; adb devices". Even rebooting the computer doesn't do any good.  
  
Then I found a funny thing, and that's my working solution for now.  
  
I run polkit-gnome-authorization, navigate to org-\>freedesktop-\>hal-\>device-access-\>Directly Access PDA devices. Click on Edit button under "Implicit Authorizations".
