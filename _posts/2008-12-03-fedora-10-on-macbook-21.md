---
layout: post
title: "Fedora 10 on MacBook 2,1"
---
Fedora 10 on MacBook 2,1
===
I finally got Linux working on my Macbook. Although, I had bought this Macbook in Dec'06, after confirming that Linux can be installed on it; I never felt any need to do so. My desktop was sufficient for the task. But soon I will be getting rid of my desktop, so have to prepare the Macbook as a primary coding machine.  
  
It is pretty easy, to install Linux alongside Mac OS X, provided you are ready to completely format the hard drive. I attempted to salvage my original installation of Mac OS X, by resizing the HFS volume with parted; however that didn't work. I had taken backup of all the necessary data (hopefully!!).  
  
Here is the recipe for converting a 2nd generation MacBook with Intel Core 2 duo, into a dual boot box. Since Bootcamp has expired on Mac OS X Tiger, I couldn't use it; so this one uses rEFIt and OS X's Disk Utility for repartitioning.  
  
1\. Download rEFIt and install it.  
2\. Reboot and see that you can boot into Mac OS X  
3\. Reboot with Mac OS X install CD. During installation, use the "Disk Utility" to partition your entire hard drive into three volumes. My layout - 30GB Journaled HFS for Mac OS X, 40 GB for linux (type doesn't matter, we will change it later anyway), and 4GB for linux swap.  
4\. Continue with Mac OS X installation (this takes looooong time)  
5\. Reboot into newly installed Mac OS X  
6\. Reboot with Fedora 10 (or other distro's) installer Live CD.  
7\. Install Fedora 10 as you normally would - I chose the disks with root partition on 40GB volume (mark it to format to ext3) and 4GB swap. Also note that, you should install the bootloader on first sector of the partition (In my case it was /dev/sda3) and NOT the MBR.  
8\. After installation is complete, reboot.  
9\. In rEFIt menu you should see the Penguine alongside Mac OS X.  
  
There are several tutorials that tell additional steps; but above steps worked for me.  
  
I was happy to find many things working out of the box: Wifi, sound, Battery meter in tray. (Note that 2nd gen Macbook doesn't have nVidia card, so don't go installing kmod-nvidia packages like mentioned at many places for newer Macs)  
  
There are several things that still need some investigation - right click, scroll gestures on touch pad. I have yet to test suspend and resume.  
  
But overall the system looks good (writing from the same). I am excited to try out KVM virtual machines for the first time - because this is only the first personal machine I have got with hardware support for virtualization.
