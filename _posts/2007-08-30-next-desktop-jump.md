---
layout: post
title: "next desktop jump"
---
next desktop jump
===
Now Fedora 7 is out for couple of months, Fiesty Fawn was out even before that. So it was obvious that I would find something wrong with my Fedora 6 installations and convince myself to get bored of it.  
  
I am the Redhat guy, and never could make myself like package management of other distros. But Ubuntu making so much noise and after reading Mark Shuttleworth's blog for a while, I couldn't avoid getting excited about Feisty Fawn. I gave it a first shot within 2-3 days of its release. But I found myself afraid of diving into the LVM configuration that Kubuntu-alternative installation CD offers. I didn't want to blow my existing LVs. I did some experiments in a virtual machine. Finally I braved myself into swallowing the pill. Seconds later I felt like choking when the system went into freeze at a screen after I chose to configure LVM. Thanks to the shell, I realized it wasn't frozen but was blocking. When I tailed the system logs, I found it was waiting for each volume to get discover and was waiting 30 seconds on each of them. With 7 volumes I could manage to steal a nap. Once it was done, it listed all LVs and rest of the things went smoothly. After entire installation the system booted just fine, without any video driver problems etc. Usual setup tasks (firefox, thunderbird,....) went fine. Liked the GUI on top of apt-get system. But wondered why it was giving some red colored "Bad install" errors during installation of some packages. It's dependencies might be failing, but couldn't find any straightforward error saying so. My biggest motivation for desktop switch was Beryl. But after spending an hour or so and following all instructions on forums, I still couldn't get beryl-manager and emerald-theme-manager to install. The repo that provided them didn't provide many dependencies that were needed. Big bummer! Never could find any repos that could satisfy those dependencies (and there were lot). I left it aside for a while and started installing gaim. Realized pidgin is the new name. The same story repeats. I couldn't install pidgin after spending some 10 minutes...... Thankfully I had my FC6 installation on one of the volumes, so I switched back.......  
  
  
....enter Fedora 7\. Installed it first day (or second?!). Everything went fine. But it wouldn't boot alright - giving me tons of Red "\[Failed\]" results for various services. I always have these problems office machines where NIS, NFS all doesn't work unless you do everything right. I was lucky with FC6 last time. But F7 got screwed. so back to FC6 for few days....  
  
Since I can't reboot my office machine quite often (with so many things open all the time), it took till this week to me try again. My FC6 was very sluggish. The reason I found out was: my home directory was on the network drive. And our file server is overloaded nowadays. So I had decided to create local account and home directories next time. On Monday, I reinstalled F7 and didn't configure NIS at the installation time. Everything worked like a charm. No... Beryl won't work out of the box. But I knew what to do. It seems the stock NVidia driver that comes with F7 (nv) isn't sufficient (at least for the graphics card I have). But the additional steps I had to do were straightforward:  
Goto Livna and install their RPM which automatically adds its repo address to your yum configuration.  
Install kmod-nvidia using yum install. \[Note: Do NOT install this RPM using rpm commandline, USE yum. More likely this driver is compiled with a newer linux kernel that the stock F7\. So "yum install" will automatically do this upgrade, you might miss that out with manual rpm installation. I read some posts which messed up because of this\]  
Reboot (Now you should see nVidia logo before X starts)  
Run Beryl-manager it should work.  
  
  
........... So Fedora 7 gets my vote again this time.  
  
I think Ubuntu is a nice system. Might be very user friendly, once it's installed. But it is still not good for power users (or at least not enough to lure RedHat power users to its camp). I wish just like kubuntu, xubuntu, they come up with "Pubuntu - Ubuntu for power users" - which has support for LVM management at installation time, etc.  
  
P.S. Pidgin was a great find. It has awesome GUI compared to gaim.
