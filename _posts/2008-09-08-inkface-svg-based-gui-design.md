---
layout: post
title: "Inkface - SVG based GUI design"
---
Inkface - SVG based GUI design
===
I have always wondered why are there so many advanced technologies to learn to create the GUI for a software application. GUI is what we see, then if we want to design or customize it, then it should be as simple as editing an image in an Image editor. This becomes more important with the next-gen handheld devices, where the GUIs will be handled more intuitively - by fingers - rather than keyboards or mice. However the problem and its solution wasn't very apparent to me.  
  
... until I read this [post][0] by Andre Schmidt on Clutter mailing list few months back. In his [simsui][1] project, he has designed a slider widget from an SVG image and used clutter to render its differnt parts. This little project defined the problem and solution I was looking for. I played with the simsui source code. Unfortunately, that code is written for very specific widget and had some duplicate implementation of some rendering logic.  
  
So I decided to give a try to a generic SVG (vector graphics) based GUI framework. I looked for open source SVG rendering libraries. I chose librsvg (which is now part of the Gnome desktop) for this purpose. It took me a month to understand its internals and to extend them to fulfill my needs. I eventually got it working. I now have created a fork of that library - dubbed 'libaltsvg' - under my altcanvas project.  
  
What I have achieved so far is complete isolation of GUI from the application logic code. I have coded two samples apps - A music player and A virtual keyboard for handhelds - using this new GUI framework. As you can see in the following demo video, the GUI look-n-fill can be changed by merely changing the input SVG filename. In this framework the app logic gets simplified as well. The code for the two apps can be found in [player.c][2] and [keyboard.c][3].  
  
[  
high-res version on Blip.tv][4]  
  
  
  
  
The complete source code can be found [here][5] in altcanvas repository.  
  
The demo above is prepared on my desktop, however I have tested these on my n810 as well. Of course, the animation effects are too much for it to handle. But it works decent at minimum frame rates. I will post packages for n810 diablo in next couple of days.  
  
To put this in perspective: this framework lets you do on your desktop/mobile, what Adobe flash lets you do on the web (and on mobiles too) - with an added benefit of coding in C (and python or other popular languages, once I get their bindings ready). There are some closed source projects for doing vector graphics based GUIs for mobile devices ([ikivo][6], [bitflash][7]). But I haven't found any open source initiatives so far. Let me know for sure if you have.  
  
If you are attending OSiM or Maemo summit next week in Berlin, then look for me. I will be happy to give a demo.  
  
Update (Sep 12):  
A package for trying the Inkface demo on Nokia n810 is available now. Download the [.deb file][8].  
\[Note that the keyboard/music player are not fully functional apps. They are proof-of-concept apps for showing Inkface GUI framework benefits.\]  
I will be flying tommorrow afternoon for Germany. If any of you guys are in OSiM or Maemo summit, I will be glad to meet. After I come back from the trip, I will work on further improvements to this project. Till then... have fun!!!

[0]: http://lists.o-hand.com/clutter/1375.html
[1]: http://osku.de/simsui/
[2]: http://code.google.com/p/altcanvas/source/browse/trunk/libaltsvg/player.c?r=551
[3]: http://code.google.com/p/altcanvas/source/browse/trunk/libaltsvg/keyboard.c?r=554
[4]: http://blip.tv/file/1299872
[5]: http://code.google.com/p/altcanvas/source/browse/trunk/libaltsvg/
[6]: http://www.ikivo.com/
[7]: http://www.bitflash.com/
[8]: http://altcanvas.googlecode.com/files/inkface_0.0.1_armel.deb
