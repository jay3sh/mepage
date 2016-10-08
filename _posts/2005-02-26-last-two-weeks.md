---
layout: post
title: Last two weeks
---

Last two weeks I have been redoing everything since I had to install new linux - Fedora Core 3. I tried it because the problems I were getting for my MS wireless keyboard-mouse USB driver. It worked. But during some experiments I had to reinstall couple of times. Now to compile the L4, drops package and L4Linux 2.6 with the GCC 3.4.2 that comes with FC3 is a pain. So I had to downgrade all my gcc tools to lower version 3.2-7. This is giving me some troubles because of many dependencies. GCC 3.4.2 has made some syntactic checks more strict, thus barking errors in some cases instead of letting them go with warning message. I reported these on the mailing list, but they are just happy to stick with the old GUI. So that's what I am doing.

Once I get the L4 system boot, I want start experimenting with run-l4 program from linux, which executes binaries designed for L4.

