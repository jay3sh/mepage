---
layout: post
title: "Ubuntu reviewed"
---
Ubuntu reviewed
===
My home desktop is giving problems, probably because of some heat issues. So I cannot continue what I was working on over weekend. That gives me time to write about my review of new release of Ubuntu that I installed on my office machine.  
  
Over a year I have been contemplating a shift from Fedora to Ubuntu. At the time of Feisty I took a step in that direction, but then I decided to stick with familiar Fedora little longer. Now I am more comfortable with apt and dpkg, thanks to [Maemo][0]. So I was eagerly waiting for Hardy release of Ubuntu.  
  
As you can read everywhere else, Ubuntu 8.04 is impressive. I agree. I will rather write about two specific issues that were relevant to my environment.  
  
For few years I have been managing the storage of my desktops using LVM. It's very handy for me. Unfortunately Ubuntu's Live CD installation method doesn't support logical volumes - something that Redhat/Fedora supported so easily. Probably, ubuntu's target audience would prefer minimum click installs to advanced tweaking of the system. The alternate CD discovers logical volumes, but it's very tricky. I don't remember exactly, but last time I tried it, the installer froze on me until I figured - by jumping to adjascent terminals - that scanning of each volume was taking too long. But this time, I found an [easier way][1] of using LVM while still using Live CD. As per the instructions, I installed lvm2 and inserted dm-mod into the Live CD kernel. But the article guides you on how to create logical volumes from raw discs and then install Ubuntu on them. In my case I already had volumes. The instructions given in above link are not sufficient if you want to reuse the volumes that you created with your old linux installation. However it is very simple, if you do it right.  

* Make sure you use "sudo" while doing pvscan, vgscan, lvscan. If you don't, these commands will exit silently, giving you the impression that they haven't detected your LVM setup.  
* If you create new volumes as mentioned in above instructions, you will be able to see them as device nodes under /dev/mapper or /dev//, you can use them as targets of your favorite mkfs. utilities. However your already existing volumes won't show up that easily. If you want to see them, use "vgchange -ay". This will activate all your volume groups.Apart from this, rest of the installation is a stroll in the park.  
  
Now a days, it's common to have dual monitor setups in workplaces. I have one too (I mean two :). I needed to use some nvidia specific utils to get dual monitors working. If you search for terms like "dual monitors ubuntu nvidia twinview" you will get lots of posts. I found and followed all those too. But all of them told me to do Ctrl+Alt+BackSpace to reload X, to test the changes in my x.org file. That just made the display more and more horrible for me. The resolution dropped to 800x640, nvidia's twinview utility was no where in sight. ... until I rebooted the box. Maybe it was little dumb of me to not have rebooted after I installed nvidia's driver. I don't know which of the changes found in all those posts worked for me, but I think the important thing is to reboot the machine after you install nvidia's drivers.  
  
Monday didn't seem so boring because a brand new system was waiting for me at work today. I set things up to suite my needs - nis, automounter, users, firefox sync, mail setup .... Firefox 3 beta 5 is pleasant. Fast as advertised. But I still couldn't find compatible google extenstions that I am so used to (browser sync, notebook, toolbar). There are compatible versions available for Firefox 3, but for some reason they didn't want to get installed on my beta 5 build.  
  
But a major change I did was with my mail client, which wasn't planned. I don't remember if I had used [Evolution][2] any time in the past - not seriously for sure. But today I decided to give it a try, as it's the default mail client that comes with ubuntu. And within few minutes, I was a convert. I have stopped using Thunderbird. The biggest turnoff with thunderbird is its lack of calendar utility. Lightning is far behind alpha quality. That had forced me into using Korganizer on my Fedora 7 desktop. But this time I decided to give a shot to Gnome's PIM tools integrated into Evolution. Evolution has almost all the good things that thunderbird has (most importantly fast search), but in addition it has a functioning calendar program. I haven't tried to sync it with MS Exchange, but I doubt if any non M$ client will reliably work with MS Exchange calendars. I am happy with setting up my events and reminders manually, as long as basic functionality is there. Furthermore it was easy to import my mail folders from Thunderbird to Evolution, thankfully both use a standard "mbox" format to store the mails. Filter rules aren't compatible however, I will have to manually write them.  
  
[Fedora 9][3] is coming out in May. If you try it, let me know. I will skip Fedora this time though.

[0]: http://maemo.org/
[1]: http://www.debuntu.org/how-to-install-ubuntu-over-lvm-filesystem
[2]: http://www.gnome.org/projects/evolution/screenshots.shtml
[3]: http://fedoraproject.org/wiki/Releases/9/Schedule
