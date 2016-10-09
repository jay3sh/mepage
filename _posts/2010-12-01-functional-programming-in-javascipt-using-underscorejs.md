---
layout: post
title: "Functional programming in Javascipt using Underscore.js"
---
Functional programming in Javascipt using Underscore.js
===
My interest in functional programming was re-kindled when I attended a talk on the topic at PyCon India this September. Subsequently I tried to look into how it can benefit my code - Javascript or python.  
  
There are mainly two reasons for which one would choose Functional programming techniques - short and eloquent code, potential to write parallel applications that can leverage multiple cores. My interest is the former. I remember, few years back while writing some python code I suddenly realised how map, reduce and filter work. I rewrote the whole program, replacing every 4-5 lines of code by single line statements that used map/reduce/filter to handle lists. I admit that the resulting code is not intuitive to someone who knows nothing about how those functions work. But once she understands their usage, the code starts looking eloquent.  
  
Pure functional programming is best done in languages like Lisp, Clojure; and I have almost nil experience of that sort. But functional programming languages have some list processing functions that prove to be very useful. They are built into python (map-reduce-filter). They can be written as library in javascript. Underscore.js is one of such libraries.  
  
This is a step by step account of what hurdles I faced while try to use functional programming in my javascript code and how they got solved.  
  
Back in september, before I had heard about Underscore.js, I looked into how people had tried it. My javascript code for 3DTin, involves lot of algorithms that have to manipulate lists (arrays). It seems very superfluous to write  
  

    for(var i=0, il;arr.length; i++)="" pre="" {...}<="">

  
every so often. A much cleaner way is to do  
  

    arr.forEach(function (elem) { ... })

  
Similarly, map and filter functions come really handy in many situations.  
  
But there is a major problem in this approach. Most of the times this for loop is in one of the member functions of an object and in that loop the members of the object are changed - using the "this" reference. (This is something that pure functional programming forbids you from doing. A function should not change the state of the system, i.e. should not have any side-effects. But we mortals raised on the OO diet will hardly ever learn that). That  poses a problem. Because accessing "this" from inside the handler will have totally differnt effect. Inside the  handler function body, "this" is a reference to the handler function. That limitation kept me away from this approach for a while.  
  
But had I carefully investigated, I would have found that most of the forEach implementations take a context object as second argument. Mozilla's implementation and Underscore.js's API also support that. That discovery made me adopt functional programming in my code more widely.
