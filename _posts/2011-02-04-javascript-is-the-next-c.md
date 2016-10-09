---
layout: post
title: "JavaScript is the next C"
---
JavaScript is the next C
===
I've been coding in JavaScript for almost a year now. I find it a decent language to write code in. The code written in JavaScript doesn't look as pretty as python, but it doesn't look as bloated as Java either. But that's not why I chose the title of this post. It's everything else that's happening around JavaScript that makes me think that it's going to play as significant a role in computing as C has played.  
  
Before C, there was assembly. (I know there were many other languages before programming evolved from assembly to C, but I am talking about only the mainstream candidates.) The abstraction that C provided was perfect enough that programmers didn't have to learn about the Assembly details. That made C the perfect candidate to build a solid layer on top of Assembly. Programmers could write accounting software, graphic programs, games without bothering about what CPU architecture and memory bus size they were running on. It all worked and C became an integral part of computing stack. Today we don't use C to write new programs, but all operating systems, their device drivers, native libraries are written in C. C has become [so ubiquitous that it's now invisible][0].  
  
We have spent a long time searching for a candidate language to build the next layer, on top of the one built by C. C made our code hardware-agnostic. But over time we developed a variety of operating system platforms that created their own stacks of libraries. With the advent of Internet we needed to transfer code over the wire and be sure that it can be run on all the machines irrespective of which platform they were running. We needed a write-once-run-everywhere solution. Java emerged as the solution to specifically fill that need. For a period of time, it seemed it would indeed be the one. But for several reasons it failed. Today when we are deciding a platform independent solution to write a GUI program, what number does Swing score in our preferred list? Java did a great job of freeing the programmers from worries of memory management. But the main reason for its failure is probably its awkward ownership by a single commercial entity Sun (and now Oracle). The lawsuit Google is facing over Android is enough to corroborate this. If someone can sue you for using their language, then how can such language be adopted by entire industry.  
  
The latest candidate to build the next abstraction layer in the computing stack is JavaScript. It's hardly a new language. It's hardly a perfect language. But there are two technologies that will make JavaScript the next C - HTML5 and Node.js.  
  
HTML5 (and whatever goes under that umbrella name) is a new web framework whose primary programming language is JavaScript. It is bound to succeed, in fact if you consider it as just a new fancy name for HTML then it has already succeeded. It's not developed by a single company, but many big guns are simultaneously promoting it  - Google, Mozilla, Apple, Microsoft (by accepting most of the standard for IE9), are writing virtual machines that keep improving the speed of JavaScript. The new age behemoths - Twitter and Facebook - have strengthened HTML5 merely by adopting it.  
  
On the other hand, Node.js has become a great success. It has a teeming community around it. The success of a platform depends on the libraries its provides to do various tasks. Just look at [this wiki page][1] that lists different Node.js modules to accomplish various tasks. I spent last week writing a [factory server][2] for [3DTin][3] using Node.js. Everything I needed - from binary encoding library to canvas rendering libraries - I got it from this page. And there are more than one option for each job. Most of the libraries are nascent and will mature over coming few months. But they are a strong sign of a solid platform taking shape.  
  
Yet another sign of JavaScript's growing might is, its choice as a target language for compilers of other languages. There are projects compiling [Ruby][4], [Python][5], [Java][6] right into JavaScript. The shortcomings of JavaScript as a language are being fixed by many frameworks successfully, think of jQuery. Libraries like [Underscore.js][7] or projects like [CoffeeScript][8] are making programming in JavaScript more fun.  
  
Between HTML5 and Node.js you can now be sure that if you write your next application in JavaScript it will run on any server, desktop or mobile. JavaScript will build that next layer in computing stack that we are waiting for and that's why it will be the next C - ubiquitous and then invisible.

[0]: http://www.pbs.org/cringely/pulpit/2007/pulpit_20070629_002360.html
[1]: https://github.com/ry/node/wiki/modules
[2]: http://blog.3dtin.com/export-smooth-models-in-stl-and-obj
[3]: http://www.3dtin.com/
[4]: http://ejohn.org/blog/ruby-vm-in-javascript/
[5]: http://pyjs.org/
[6]: http://code.google.com/webtoolkit/
[7]: http://documentcloud.github.com/underscore/
[8]: http://jashkenas.github.com/coffee-script/
