---
layout: post
title: "Frets on Fire for Maemo - Update"
---
"Frets on Fire for Maemo - Update"
===
[Back in March][0], when Fremantle SDK was released, I had ported Frets on Fire to it. Subsequent discussion made it clear that modifications were required to actually make it run on the device. I created a stripped down [version][1] which could run without the OpenGL code. This made it suitable for n900 (and even n810). But due to lack of actual device, I couldn't test it.  
  
Fast forward 7 months. Now I have access to actual n900, so recently I went back to the FoF code. After couple weeks of getting re-acquainted with the code, I have it satisfactorily running on the n900\.  
  
Frets-On-Fire code primarily has three parts -  

* playing the song (loading song, computing notes, etc. uses pygame for audio),  
* showing the visuals (PyOpenGL+pygame code) and  
* handling input.  
All these components are pretty involved and hard to rewrite - especially so with the audio part (I hardly have any experience in musical notes and midi files). So my priority was to get almost all of the audio code as it is. It was easy to tweak the input code - to make it suite the n900 keyboard. I bypassed the visual part completely - replaced OpenGL with simple pygame sprites. (You may get disappointed by the stark [looks][2]).  
  
I have created a project on googlecode to host the code - maemofof. It shows all the [changes][3] I had to make, starting from the base Frets-on-Fire code from v1.3.110\.  
  
The next step is to package it nicely and push to extras-devel. There are few problems with packaging though.  
  
I couldn't get ogg files to play through pygame. I installed the ogg-support package, but for pygame/sdl to work with it, something more is required - which wouldn't install due to broken dependencies (libsdl-mixeroggwav1.2-dev). So for now I converted all ogg files to wav. But the wav files are huge (~80MB if a single song is included as sample). That makes them inconvenient to package and they also take a long time to load (~90 seconds).  
  
But good news is, the ball got rolling again. I hope to make some progress in coming days. If you have any suggestions, feel free to chime in comments.

[0]: http://jyro.blogspot.com/2009/03/frets-on-fire-on-maemo-5-fremantle.html
[1]: http://jyro.blogspot.com/2009/03/fof-pyopengl-minifof-possibly-for-n810.html
[2]: http://3.bp.blogspot.com/_W6UcJjyXr24/Sckqgw9YOHI/AAAAAAAACxs/Mvr5Sf-M7Os/s1600-h/minifof-usage.png
[3]: http://code.google.com/p/maemofof/source/list
