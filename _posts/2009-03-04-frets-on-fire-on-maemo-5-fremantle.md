---
layout: post
title: "Frets on Fire on Maemo 5 (Fremantle)"
---
Frets on Fire on Maemo 5 (Fremantle)
===
Couple days ago I played Frets on Fire ([FoF][0]) for the first time. I was totally hooked on to it. After going through its hilarious tutorial and starting with a pathetic performance, I managed to score 37K points with 87% accuracy on the "Defy the Machine" song a few moments ago.  
  
Couple days ago Nokia released the alpha version of Maemo 5 SDK (Fremantle) too.  
  
I woke up next morning with an inevitable thought of porting the former on the later.  
  
After a day's work here is a video demo of "Frets on Fire" running in the Maemo scratchbox SDK. And find below a list of things I had to do to get it working.  
  
\[If you don't know about FoF, it's an open source Guitar Hero clone that runs on many desktop platforms. It is written completely in python. While playing it you hold your keyboard in an unusual fashion so that it simulates a rockstar's guitar. ([wikipedia][1])\]  
  
  
  
In future we can tweak FoF's UI so that the strings could be pressed against the frets using the touch screen itself.  
  
There is no sound in the video, but it's just because I couldn't channel the sound through two layers of virtualization and into the video recorder software. I could hear the songs alright though after transporting them over wire using pulseaudio.  
  
\[Note that scratchbox is running on Ubuntu which itself is a KVM virtual machine. That should put the poor framerate into perspective.\]  
  
Here are the things I had to do:  

* Fremantle SDK doesn't have python distutils. In diablo it comes from extras repo, so I borrowed it from there as well. (Added diablo extras repo in /etc/apt/sources.list)  
* Fremantle SDK has a bug that I had [discussed][2] on mailing list during pre-alpha release, due to which the SDL/pygame applications cannot use the OpenGL support of the SDK. Due to same bug, FoF would also not work. After some [googling][3] I figured out the root cause and a work around. I built a private version of libsdl with --enable-video-opengl option. That did the trick. I have filed a [bug][4] to get this fixed in Fremantle.
* I also had to build custom packages of PIL (python imaging library) and numpy. I believe these libraries are available in diablo through extras repository, so I guess they will also be available in fremantle in future.  
* Next I had to modify src/Input.py to comment out pygame's joystick initialization code.
* The really tough part was getting sound working. I found an old [post][5] to get sound working in scratchbox. Although it was a correct procedure, it didn't work for me. After a while I remembered from the Maemo summit that Fremantle runs pulseaudio (as opposed to esound in diablo). After that I did some googling and figured how to transport the sound over network using pulseaudio server and client. Here are couple useful links. [\[1\]][6] [\[2\]][7]
* The job on sound wasn't over yet. FoF runs all its music from ogg files. pygame won't play ogg files on fremantle. I dabbled into recompiling SDL\_mixer with ogg support, but that didn't help. Then another discussion from Maemo summit came to mind, and I remembered for some (non-technical ?!) reason Maemo doesn't play ogg. So to get around it, I converted all .ogg files into .wav using ffmpeg. Changed the code wherever necessary to replace the file name extensions from ogg to wav. That did the trick and finally I could hear the sound.
* The game by default used 600x480 resolution. After some analysis of the code, I found fretsonfire.ini file in my home directory. I changed it to set the resolution to 800x480 to fit into the Xephyr window.
* There is one thing that I couldn't get to work. Arrow keys won't work. I found that the scan codes sent through Xephyr to the pygame were different from what are put in pygame constants.  
  
... so when Nokia releases that next device, we will have an electric guitar in our pocket. :)

[0]: http://fretsonfire.sourceforge.net/
[1]: http://en.wikipedia.org/wiki/Frets_on_fire
[2]: http://www.gossamer-threads.com/lists/maemo/developers/44229#44229
[3]: http://www.phoronix.com/forums/showthread.php?s=31dca4fc1886adfbaad91f0e4a83f288&t=11060&page=2
[4]: https://bugs.maemo.org/show_bug.cgi?id=4177
[5]: http://blogs.igalia.com/jasuarez/2008/05/02/ubuntu-and-scratchbox-singing-duets/
[6]: http://blog.paulbetts.org/index.php/2007/04/15/pulseaudio-in-ubuntu-feisty-play-sound-over-the-network/
[7]: http://pulseaudio.org/wiki/PerfectSetup
