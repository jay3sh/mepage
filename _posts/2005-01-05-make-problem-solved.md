---
layout: post
title: Make problem solved
---

Make problem solved
===

I was stupidly wondering why won't my `/usr/bin/make` won't work. Posted many emails in past 3-4 days and ultimately it took installation of make_3.80-9_hurd-i386.deb to make the 'make' utility work. The original make binary was just corrupt i guess. 

No luck with Xfree86 installation dependencies, no progress with setting up network access. 

One more useful thing I learnt yesterday. How to get your IP address, Gateway and Network mask. These three are needed to setup network with pfinet in HURD. 

In linux use,

    [root@localhost jayesh]# netstat -rn 
    Kernel IP routing table 
    Destination Gateway Genmask Flags MSS Window irtt Iface 
    192.168.2.0 0.0.0.0 255.255.255.0 U 0 0 0 eth0 
    169.254.0.0 0.0.0.0 255.255.0.0 U 0 0 0 eth0 
    127.0.0.0 0.0.0.0 255.0.0.0 U 0 0 0 lo 
    0.0.0.0 192.168.2.1 0.0.0.0 UG 0 0 0 eth0 

    [root@localhost jayesh]# /sbin/ifconfig -a 
    eth0 Link encap:Ethernet HWaddr 00:0B:DB:DA:D6:42 
    inet addr:192.168.2.10 Bcast:192.168.2.255 Mask:255.255.255.0 
    UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1 
    RX packets:827 errors:0 dropped:0 overruns:0 frame:0 
    TX packets:863 errors:0 dropped:0 overruns:0 carrier:0 
    collisions:0 txqueuelen:100 
    RX bytes:428907 (418.8 Kb) TX bytes:124307 (121.3 Kb) 
    Interrupt:11 

    lo Link encap:Local Loopback 
    inet addr:127.0.0.1 Mask:255.0.0.0 
    UP LOOPBACK RUNNING MTU:16436 Metric:1 
    RX packets:5107 errors:0 dropped:0 overruns:0 frame:0 
    TX packets:5107 errors:0 dropped:0 overruns:0 carrier:0 
    collisions:0 txqueuelen:0 
    RX bytes:348486 (340.3 Kb) TX bytes:348486 (340.3 Kb) 
    
One irritating catch for less-informed like me is, `ifconfig` was found in `/sbin` and it wasn't in my `PATH`, so that command won't execute by default. So if you get 'No such file found' complaint from your shell when google says it should work, try looking in your `/sbin`, `/usr/sbin` directories, ones that are not in your PATH