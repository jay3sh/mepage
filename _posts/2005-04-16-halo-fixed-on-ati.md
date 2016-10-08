---
layout: post
title: "Halo fixed on ATI Mobility Radeon 9000"
---

Halo fixed on ATI Mobility Radeon 9000
===
I could run Halo running on my laptop without crashing the OS intermittently. The problem as I knew was due to the incompatibility of my old video driver. Although I installed the required DirectX 9 successfully, the game used to crash when run with all its best features (high graphic details, sound effects and controller support etc.). But if I run it in safe mode it would run fine, but that would be with all main features stripped (no audio - makes no sense in playing Halo without audio, no controller support, poor graphics).

Right solution is to install ATI's latest drivers (latest versions of ATI Catalyst) but I read that it doesn't work unless you reinstall the Windows.

So I decided to run Halo with degenerate graphics, but I wanted other features intact. After a bit of googling I came to know that Halo.exe could be run from command line with various commandline options and that way you could choose what features to drop.

Here is the [link](http://support.microsoft.com/kb/830487)

Here are the options that I use `E:\Halo\halo.exe -novideo -useff -console`