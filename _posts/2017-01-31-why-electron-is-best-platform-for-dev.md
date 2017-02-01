---
layout: post
title: Why Electron is the best development platform?
---

Why Electron is the best development platform?
==============================================

A year ago, when I was making a choice between development environments to develop [Zector](http://zector.io), I evaluated three options Javascript on Electron, Python3 with PyQt, pure C++ 11. I've developed on Electron for over a year now and I'm convinced it was the right choice. Here are things I learnt and you will find useful while evaluating Electron for your needs.

ES6
-----

Javascript is not my favorite language. Python is. One of the reasons I love python is for its syntax perks. Lambda functions, list iterations, named arguments - to name a few of my favorites. They make writing code very efficient. However, circa early 2016, both Javascript and C++ have features that match Python on this front.
* The [arrow functions](http://kangax.github.io/compat-table/es6/#test-arrow_functions) and array iterations ([for..of loops](http://kangax.github.io/compat-table/es6/#test-for..of_loops)) in ES6 make writing Javascript a lot more fluid than before.
* The arrow functions with [correct semantics of `this`](http://kangax.github.io/compat-table/es6/#test-arrow_functions_this_unchanged_by_call_or_apply) reduces the cognitive load further, saving some extra code one had to write in pre-ES6 Javascript. 
* Destructuring is a huge bonus. ES6 has gone further in incorporating destructuring in number of places - [declarations](http://kangax.github.io/compat-table/es6/#test-destructuring,_declarations), [assignment](http://kangax.github.io/compat-table/es6/#test-destructuring,_assignment), [function arguments](http://kangax.github.io/compat-table/es6/#test-destructuring,_parameters). I remember discovering some of these things without knowing that they are actually supported by the new syntax. When I tried and saw them working, it felt like magic. That's the definition of intuitive syntax. 
* Finally there's support for `class` in the language syntax with ES6
* ES6 modules make your code organization easy. You have to use WebPack-Babel though, if you want to use them.

When you use **Electron** you can use ES6 for development without worrying about browser support, because you ship your browser+node environment with your app itself. (Pro tip: Use [`babili`](https://github.com/babel/babili) to minify your ES6 without compiling).

C++ 11 also has friendlier syntax with lambda functions, `auto` type, `for(:)` syntax. But it's not comparable to ES6 improvements. C++ is stil more rigid than Javascript. You get advantages of static typing and native performance, but they aren't reason to sacrifice faster development times of scripting languages.

GUI Widgets
-----------
The biggest downside with using Python for desktop apps is GUI framework. The most mature choice is PyQt. It's mature because it has been around for a while, but that also makes it rigid. You have to learn traditional View framework of GUI widgets. It's a far cry from the fluidity of HTML DOM. Although the DOM wasn't designed for desktop apps, it has evolved and now offers the best of both worlds. If you don't want to reinvent the wheel then you can use built-in widgets, or various jQuery UI plugins for more customizable ones. But if you want to try something new, say a different layout or animated panels you can totally do it. That's very hard to do in frameworks like PyQt (that's why Qt has also adopted some form of DOM in its framework, but then that defeats the point of using Python). Moreover, PyQt is developed by a relatively obscure company with some not-so-clear licensing options for commercial usage.

Debugging GUI written over DOM is also tremendously easy, thanks to Chrome DevTools that is incidentally part of Electron. (more on that later)

Native addons
-------------

When you use an interpreted language like Python or Javascript, you are bound to hit performance issues at some point. These languages are good to write 99% of the application code, but eventually you can find 1% of the code that is called a billion times and can make the whole application faster if written in C/C++. In other cases, there are legacy native libraries that provide the functionality you need and it would be too much work to re-implement it in Javascript. When you are developing for pure Web, you have no choice but to reimplement them (I've had to do that in my past projects). But with Electron you can write native add-ons to use these native libraries from your Javascript application code.

Technically, it's the node.js environment that provides the add-on functionality. I've written many add-ons or plugins for Python and Node.js environment in past few years. I'll say it's not without pain in both cases. However it has gotten a lot better with node.js in past few years. I doubt there are any recent improvements in writing Python native modules (although Cython and cffi give good alternatives), but back when I used to write them I remember switching between Swig or hand-written C structures with function pointers. It wasn't fun.

Node.js addon development on the other hand is well documented. You basically have to deal with v8 data structures, which have [one-stop documentation](https://v8docs.nodesource.com/node-7.4/). They are a bit awkward many times, where you have to write code whose purpose is not exactly clear. However you start identifying boilerplate patterns in the code and can easily macro-fy them. In fact the nodejs developers made this official with the [Nan library](https://github.com/nodejs/nan), which is a must if you are writing node addons today. Electron embraces all this by design, because nodejs is part of it.

There is still some room for improvement in node.js addon development. One of them being [node-gyp](https://github.com/nodejs/node-gyp). It's a non-standard build system, with awkward declarative syntax. They really should use CMake. (I know there's a [solution](https://www.npmjs.com/package/cmake-js), but cmake should be the native build mechanism for node addons)

Debugging tools
---------------

I started my career while debugging operating systems. So print statements have been the best way of debugging for me. Although I've tried all kinds of debuggers (Eclipse Java, Visual Studio, GDB, PDB, Vim with debugger plugins), they could never beat the simplicity and pervasive applicability of print statements when it came to debugging. However my experience with Chrome DevTools for the past 6 years, makes me name it the best Debugger I've ever used. Again, it's part of the package when you use Electron.

What makes Chrome DevTools best is, its developers went beyond just the break-points and watch-variables functionality of a debugger. They built the capability to inspect every aspect of HTML5 application. Javascript is the most imporant aspect, and GUI layout is the next. Python or C++ based GUI systems are at enormous disadvantage here. In Chrome DevTools you can drill down the GUI hierarchy, inspect it, change its style dynamically, add breakpoints on DOM modification events and even copy-paste the DOM into another standalone file (because it's just text). Such versatility is not available in any other GUI development environment.

In addition you have a REPL in the form of Console which is indispensable. You can inspect the network activity (although it's not so frequently used in desktop app development, but that depends on use case), do performance analysis. There's also an Electron extension to Chrome Devtools - [Devtron](http://electron.atom.io/devtron/) - but I don't have much experience with it.

NPM eco system
----------------

Node.js has a vast community of developers who have written libraries for all sorts of things and published them on NPM. Between npm cli tool, package.json choices and ability to install packages from file system or github repo URLs; Electron offers the most accessible dependency fulfillment eco system (via npm). Most of the functionality your application needs is probably implemented by someone and is available as NPM package.

Cross platform integration
--------------------------

Node.js and Chrome being already available on the big three desktop platforms, makes Electron the most appealing write-once-run-anywhere solution. However that's just the beginning.

The Electron developers have taken the cross-platform notion beyond just the runnability of code. They have incorporated support for all the native aspects of the desktop environments on all platforms. Wherever possible they have created common abstractions that automatically adapt to the right environment, for example application menus or desktop notifications. But Electron also supports the features that only available on Windows or OSX or Ubuntu Unity. And they have all these methods [well documented](http://electron.atom.io/docs/tutorial/desktop-environment-integration/) complete with example code. I was once quite surprised to find how easy it's with Electron to create a headless application that only shows an icon in the tray.

Packaging
----------
I've never before created package installers in my life (maybe I've, but that was back in last millenium I think, so that's too old to count). So that was one thing I was dreading when I decided to develop [Zector tools](http://zector.io) as desktop applications instead of Web apps. But I needn't have worried. Electron has very good packaging solution that creates platform specific installers for you. I use [electron-builder](https://github.com/electron-userland/electron-builder), although there are other solutions too. Electron-builder is well documented and I use it to build NullSoft installer on Windows and DMG installer on Mac for [Zector Trace](http://zector.io/trace). It also supports platform specific code signing mechanisms (although I haven't tried them yet). There are some rough edges yet, but I think they will even out with time.

Static Typing
-------------
Javascript doesn't offer static typing. Recent advancements in Python3 are offering it. Static typing can be useful and sometimes indispensible for large projects. In Electron environment you could use TypeScript, which has static typing and compiles to Javascript. Or you could use [Flow](https://flowtype.org/). Or if your project is not too big, and you only want type checking for a limited API, then try [joi](https://github.com/hapijs/joi) for manual runtime type checking.

Electron has been already adopted by many [mainstream apps](http://electron.atom.io/apps/). Thanks to it, I was able to deliver [Zector Trace](http://zector.io/trace) across three major platforms in record time.

If you have any comments, write them on Twitter to [@jyro](http://twitter.com/jyro).
If you are from Montreal, join the [Montreal ElectronJS Meetup group](https://www.meetup.com/mtlelectron/).
