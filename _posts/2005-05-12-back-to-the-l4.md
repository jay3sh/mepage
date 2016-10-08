---
layout: post
title: "Back to the L4"
---

Back to the L4
===
It's been a couple of months that I stopped working on L4. The main reason was the frustration due to so many errors and failures.

But now I am back. This time I decided to use emulator. My main interest is in coding rather than wasting time in installation on real hardware. So I first tried Bochs. And had trouble getting right versions of the kernel and patches that were required to install pistachio. Also the guy had incomplete tutorial, so couldn't figure out what to do after compiling the kernel.
Here is the [link](http://home.kamp.net/home/farid.hajji/l4ka-bochs/).

Then I heard of [QEMU](http://hurd.gnufans.org/bin/view/Hurd/QemuImageForL4).

The page tells how to install HURD and L4 on QEMU. But I was only interested in L4. So I only downloaded the pistachio demodisk from l4ka.org and ran it with QEMU:

    $ qemu -dummy-net  -serial stdio -fda pistachio-ia32-0.4-demodisk.bin -boot a

And it just booted the qemu into pistachio for me. That's amazing. But the coolest thing is yet to come.

I learnt that this demodisk can be mounted as a file system, so I peeped into it by mounting it (described in the gnufans link above). This demodisk by default loads the pingpong program. So the demodisk has a pingpong binary among other stuff. Now pingpong is the simplest program you could expect to see in L4 source tree. It is just one file pingpong.cc, with a main method. So it occured to my mind, that one can start coding the kernel if he\she can modify this file and just replace the binary in the demodisk with your own binary. Pretty easy.

But the compilation was a major trouble. It was the main trouble in my last experience with L4 and the main reason to drive me away. The key problem is the compiler version. I had suspected that back then, but couldn't install gcc 2.95 from its source code and later couldn't find all the rpms for the job. As my previous post indicates I recently got hold of full suite of gcc 2.95 rpms and I successfully downgraded my gcc version to 2.95. Once done, it was just matter of typing make. And the binaries were ready.

I changed one message in the menu presented by pingpong to display my name, compiled it, and replaced the binary in the mounted demodisk with the new pingpong binary. Ran the QEMU and VOILA!!! My name was on the screen.

It's really a great start of the second inning with L4.

So to summarize, use gcc 2.95 with L4. Try your luck on an emulator, rather than getting frustrated with reboots of your real machine.