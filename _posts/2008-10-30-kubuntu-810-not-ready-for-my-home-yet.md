---
layout: post
title: "(k)ubuntu 8.10 - not ready for my home yet"
---
"(k)ubuntu 8.10 - not ready for my home yet"
===
(K)ubuntu is a very glamorous distro and I await its every new release with lot of enthusiasm. So after every release I burn the CD to upgrade my home desktop. And eventually I end up in the step where I realize why it didn't work last time and why it's not gonna work this time either.  
  
There are two major reasons with installing ubuntu on my AMD 64 box - one my video card (NVidia 6800 GS) and other my fancy (read sophisticated ;) LVM layout. Actually it's the combination of these two reasons that it's almost not possible to install ubuntu right now. ("almost" because there is a busybox shell. I can theoretically install the whole distro in a complete gentoo-ish way; but that's for one-time learning experience, not for every upgrade.)  
  
The two problems given separately can be resolved.  
  
I have the same fancy LVM layout on my office box, but I can [install][0] ubuntu there, because the GUI of Ubuntu Live CD has support for LVMs (since past couple of releases). On that box Live CD installation is possible, which is not the case on my home machine because the nVidia driver is too high end for the generic video driver on Live CD to handle.  
  
With Fedora GUI installer I have same problem with my graphics card. But Fedora's LVM management is an integral part of Fedora's text mode installer, so I can install the whole system and then boot into command line and install nvidia graphics driver from livna and get the GUI running.  
  
Ubuntu has had very poor support for LVMs. Till 8.04, you had to manually load dm-mod and create custom initrd, etc... With 8.10 I can at least see (from busybox shell, not any installer screen) that the LVM volumes are automatically detected. The problem is, the text installer screens will only allow me to create new LVM volumes, they won't present me with existing volumes (even though the system has already detected them, as verified from shell). It is sooo close... Is there a hidden button somewhere that I missed, unfortunately not :(  
  
I guess I will have to wait for Fedora 10 for my home box and enjoy Kubuntu on my office box only.  
  
What appears bizzare to me is after all these years of linux distro evolution why do we still have to reboot the machine to install a new version of the OS. The new operating system should be installable while you are booted into the comfort of your old operating system. Not only is it easy to implement; it is already done in some forms. The [wubi][1] project of Ubuntu will install ubuntu linux as an app from a running Windows OS. Many people (including me) have tried doing a chroot installation of the new OS, I almost got it running with Fedora 8; but certain initrd errors stumped me. Live CD installation is halfway on that path; instead of the old OS it runs a minimal OS booted from CD.  
  
An added advantage of this scheme is, one can undo the new OS installation equally easily. In case of a linux distro - the footprint of an OS on the file system is essentially made of two parts - root partition and some files in boot partition. If the root file system is located on a logical volume, then undoing the OS install is just to remove this volume and deleting some files from boot partition. I do this every time (that's why I have that fancy LVM layout); I just want it nicely integrated inside installer interface.  
  
I hope the distros will have this facility some day...  
  
Have fun with [Ibex][2] !!!  
  
Update (Oct 31):  
  
I got it running. The key is to run "modprobe dm-mod" and (more importantly) "vgchange -ay" before the text installer reaches the disk scanning screen. After than the installation happens as usual. After the installation was complete, of course I didn't have the GUI working.  
  
Add "deb http://us.archive.ubuntu.com/ubuntu/ intrepid-updates main restricted" to /etc/apt/sources.list.  
  
Run apt-get update  
  
Run apt-get install nvidia-glx-173 nvidia-settings  
  
Still the GUI won't start.  
  
At this point you are expected to tweak /etc/X11/xorg.conf. But I never get it right. Luckily I could copy the file from my Fedora-9 installation and KDM loaded successfully upon reboot.  
  
The KDE 4.1 GUI is awesome!!!! Try it!

[0]: http://jyro.blogspot.com/2008/04/my-home-desktop-is-giving-problems.html
[1]: http://wubi-installer.org/
[2]: http://www.kubuntu.org/
