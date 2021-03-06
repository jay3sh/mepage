---
layout: post
title: Game Design tip for Programmers - Less Automation
---

Game Design tip for Programmers - Less Automation
===

For past few months I've been working on 2D Tower Defense game. One of the things I've learnt is some of the (good) habits I've as long time Software developer are counter-productive when designing games.One of them is the obsession with code structure.

A good software design practice dictates that "Thou shalt not hard code". In other words, define the parameters of your program as variables or constants, or read them from configuration files. This is a good idea when you are designing a library, framework or a game engine. But not while making a game. If you are an indie developer working on an game idea that's not fully fleshed out yet, then your requirements are going to change. The efforts you spent in writing the adapter for a configuration file could be replaced in future by a 3rd party tool you might end up using. For example, I wrote a complete SVG based pipeline to design my game. I could design the map in Inkscape and specify the parameters as JSON in SVG description tags. My game code then would load these SVGs at runtime, render each sprite (caching them whenever it can) and building the game level from the configuration JSON embedded in the SVG. This all worked fine and dandy (as you can see in this [playable demo](http://jayesh.me/pixicraft/demo1.html)). But when I started looking at adding skeleton based animation, I realized it would be better to use Spine instead. Then it became clear that I should use Spine for almost everything, thus completely abondoning the SVG pipeline I had written. Lesson learned - focus on finishing the game/prototype, don't worry about sophistication of architecture.

Another good practice in software design is no duplication. To avoid repeating yourself you try to extract the common code and move it into reusable modules. This practice backfires however when the number of instances of reuse are only two, i.e. you overestimate the relevance of particular code segment. All the effort you spent in thinking and implementing the refactor are wasted and you now have some architecture baggage.

The reusability overestimation is not limited to just code. While designing game, you also come across it while designing assets. I came across it in color scheme for my game levels. I defined a color scheme with shades of two or three principal colors. I had the temptation to define the color codes for these shades in one place and refer to them from every artwork or piece of code. However this is not practical, because the game design pipeline is made up of several different tools, libraries and your code. Not all of them can read the color shades from a single place. In this case it's ok to repeat some copy-paste steps manually everytime you make changes. Only after you find yourself repeating something more often, then it's time to write an automation script.
