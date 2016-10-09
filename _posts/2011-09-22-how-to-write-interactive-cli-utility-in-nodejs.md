---
layout: post
title: "How to write interactive CLI utility in node.js"
---
How to write interactive CLI utility in node.js
===
Node.js is mainly a server development framework - accepting requests and responding to them over network. But sometimes need arises to write a CLI utility using node.js. The asynchronous nature of node.js can make it difficult to write a simple CLI utility that will ask series of questions and accept answers from the user. Recently I ran into such situation, here is how I wrote one. (Learnt about the ask function from this [post][0])  
[gist][1]  
  


[0]: http://st-on-it.blogspot.com/2011/05/how-to-read-user-input-with-nodejs.html
[1]: https://gist.github.com/1236634
