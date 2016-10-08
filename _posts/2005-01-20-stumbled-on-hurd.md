---
layout: post
title: Stumbled on HURD
---

Stumbled on HURD
===

Stuck in a chicken-n-egg problem on hurd front. I needed to access network through my ethernet port from Hurd. The pfinet translator won't work easily. After googling, and searching through the archives I picked up the notion that the driver for my ethernet card is not present in gnumach. (I know in microkernel implementation drivers are not part of kernel, but I found the driver code under gnumach/linux/drivers.... directory. The Space.c file does not seem to have Broadcom driver code) My ethernet controller card is "Broadcom Corporation NetXtreme BCM5702X Gigabit Ethernet". I downloaded the linux driver source code from Broadcom's site. In Space.c a *_probe() function is called. Each hardware vendor defined his own _probe() function and using some macros that particular function is called. So I had a plan to integrate Broadcom's probe function with the gnumach source code, recompile the thing and try. 

But this effort has stuck in an chicken-n-egg problem as mentioned earlier. For compiling the kernel, I need gcc, make, etc. I installed make some time back, it was simple .deb file. It was hard to find .deb package for hurd-i386 for gcc. Folks on mailing lists advised me to use apt-get to install gcc. It later on occured to me that apt-get internally gets the installation packages from the internet... which in the first place I am trying to access. :( 

So I tried to solve this, by means of cross compiling exercises. Yesterday I tried to compile gcc 2.95 on linux for i686-pc-gnu platform, and it is giving its own set of errors. 

Alongside I have been reading about the L4 kernel and Hurd efforts of porting to L4. I am getting interested in installing L4Ka::Pistachio microkernel. So I might suspend efforts on Hurd front and might follow a new lead. 

Besides in past few days, I have found some good linux stuff, that I didn't know already. 

`#cat /proc/pci` should give you wealth of information about the hardware devices attached to your pci bus, like the IRQ info and rest of PCI info. 

Learnt about this linux command strace, with which you can track the system calls and signals associated with a live running process. 

It was a news to me that, there is a subdirectory under `/proc` for every process, named after its process id. This subdirectory contains useful info about that process. Among other things it holds an fd subdirectory, which will list all the file descriptors opened by that process. 

Good stuff for debugging your system.... 

I am particularly impressed by the work done by Jochen Liedtke, the father of L4. Sad to know that he passed away in 2001. His paper 'On microkernel design' is a classic one. I am planning to follow whatever job he has done on microkernels. 