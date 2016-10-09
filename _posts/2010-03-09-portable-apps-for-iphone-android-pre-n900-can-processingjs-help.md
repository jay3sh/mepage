---
layout: post
title: "Portable apps for iPhone, Android, Pre, n900 - Can Processing.js help?"
---
Portable apps for iPhone, Android, Pre, n900 - Can Processing.js help?
===
I don't know. But if you want to find out, then I have something for you.  
  
[Processing.alt][0]  
  
Visit this website from your desktop browser. You will see an IDE. Write some processing code to create a sketch and save it when you are done.  
  
Visit the same website from your iPhone/Android/n900/Pre browser. You will get a simple viewer interface. Find your sketch under _My Sketchbook_ and run it.  
  
[Processing][1] is a well known language to create sketches, animations, games. It is a simplified dialect of java. The resulting sketches are in the form of bytecode and can be run on desktop or in java applets. In Summer of 2008, John Resig (jQuery fame) ported Processing to javascript. [Processing.js][2] uses the HTML5 canvas element to render the sketches.  
  
The modern browsers that ship with today's smart phones support HTML5 element. So it is very much plausible to get your Processing sketch/game working on all the modern smart phones without any knowledge of native app development for each platform. Processing.js has a potential to become an uber-portable library for mobile development.  
  
That was the idea I started out with about a month ago. After several iterations, I ended up with a website that you see now. It is an IDE when opened from desktop browser. You can write Processing code, run it, save it, share it for others to see in the Gallery. There are also some samples you can find in Gallery right now. Try them out.  
  
The same website acts as a viewer for your processing sketch when opened from a mobile phone. You can view the shared sketches from the **Gallery** or you can login and find your saved sketches in **My Sketchbook**.  
  
One great advantage of Processing.js is, it can intermix javascript with Processing code. So in the samples you will find how javascript is used to **automatically find  the kind of browser and adjust the dimensions of the sketch accordingly**.  
  
I have tested the site on _Android HTC Magic_ and _Nokia n900_. A friend told me it worked as expected on his _iPhone_ too. Also I am treating _Palm Pre_'s user agent as mobile platform. So on these four platforms you should see the mobile interface of the website. But in case if you don't, let me know and I'll see what is wrong.  
  
As you will see that running Processing code on smartphones is indeed possible, but is fairly sluggish. However I believe the future is not far when the phones will become more powerful, browsers will become more optimized and Processing.js can also be tuned for speed. We already have two gadgets with 1GHz processors - Nexus One and iPad.  
  
The IDE also has a lot of scope for innovation. But before jumping ahead of myself, I decided to open it as beta. I would like to hear your thoughts and suggestions on this idea.  
  
So try it out and leave your opinion in the comments.  
  
_P.S. For logging in to save your sketches, use your GMail account. You don't need to login to browse through the Gallery._  
_  
_  
_Ads:_  
_\* [Processing: A Programming Handbook for Visual Designers and Artists][3]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=0262182629)_  
_\* [Learning Processing: A Beginner's Guide to Programming Images, Animation, and Interaction (Morgan Kaufmann Series in Computer Graphics)][4]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=0123736021)_  
_\* [Processing: Creative Coding and Computational Art (Foundation)][5]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=159059617X)_

[0]: http://p.altcanvas.com/
[1]: http://processing.org/
[2]: http://processingjs.org/
[3]: http://www.amazon.com/Processing-Programming-Handbook-Designers-Artists/dp/0262182629?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
[4]: http://www.amazon.com/Learning-Processing-Beginners-Programming-Interaction/dp/0123736021?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
[5]: http://www.amazon.com/Processing-Creative-Coding-Computational-Foundation/dp/159059617X?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
