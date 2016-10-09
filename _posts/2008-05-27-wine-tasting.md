---
layout: post
title: "\"Wine\" tasting"
---
"\"Wine\" tasting"
===
Sometimes I wonder why I get so late in trying certain things, even though I know about them all along. One of such things is "Wine". I have been using Linux as my primary desktop OS for around 3 years now. I used to play PC games on Windows before that. After switching to Linux it became an occasional affair on a dual boot system. And lately (for around year or so) it has completely stopped.  
  
But last night, out of the blue I decided to give Wine a try to play some of the games I have. I have played three games halfway through their storyline - Halo 2, Warcraft III - Reign of Chaos, Need For Speed - Most Wanted. I installed Wine on my Fedora 8 system last night and installed Warcraft III with it. It installed alright and started smoothly as well. However the scrolling around the map was very sluggish and made the regular tasks very difficult to perform. I applied the registry tweaks suggested in WineHQ, but no help. Only today when I read the [WineHQ forum][0] posts again, did I find the -opengl option. When I ran War3.exe from command line with -opengl option, the map scrolling became smooth. The map still doesn't scroll smoothly when mouse pointer touches the edges. However I have a hunch that it might have to do with me using Compiz. It's not a big problem, I liked using keyboard. Sound also doesn't work right now. I could successfully complete one campaign. Unfortunately it crashed while saving the game state.  
  
But overall I am glad I can play games again without rebooting into Windows. Another cool thing was I could start playing from the stage where I left it on Windows. I just had to copy the "Program Files\\Warcraft III\\save\\Profile1" folder from Windows partition to the new Wine installation. I love it when software programs don't unnecessarily complicate things under the name of sophistication. I couldn't have restored my old game data if Warcraft creators had decided to encrypt or mangle this data and save in some non-intuitive location deep down the directory structure.

[0]: http://appdb.winehq.org/objectManager.php?sClass=version&iId=1177
