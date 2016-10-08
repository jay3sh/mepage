---
layout: post
title: "Before fixing performance issues"
---

Before fixing performance issues
===
We, in computing, have come across the phrase "Premature optimization is the root of all evil" one time or another. But sadly we don't seem to internalize it in our work. I'm reminded of this whenever a developer proposes a performance fix in the code.

Before fixing any performance problem, I like to reconsider it because of following two reasons.

1. Performance problems may be easy/difficult to solve depending on the situation, however all of them have one thing in common - they have a very clear goal. There's a number that we have to optimize - be it response time, FPS or memory footprint of the app. This makes the performance problem very rewarding to solve, just like a video game. There's a score to be achieved and we just have to find a way to achieve it. The developer can focus on that single number and forget everything else, in order to get a rush of endorphin. Therefore I think developers are biased towards fixing the performance problems than any other kind of issues.

2. When developers strive to achieve that magic number while fixing the performance problem, they tend to sacrifice a lot of other important things. Software design principles, coding guidelines, readability of code, documentation - all are considered secondary during the exercise. As a result, even though the software might run faster or lighter after the fixes, the maintainability of the code has been sacrificed during the process, which is a greater loss in long term.

I don't want to undermine the importance of performance issues, because the speed and memory footprint of a software are very important for it to be usable. However not all performance fixes achieve the same improvement in software usability. Therefore they should be evaluated carefully before fixing.

I take the [advice](https://plus.google.com/u/0/115212051037621986145/posts/HajXHPGN752) of Guido Van Rossum, when it comes to evaluating performance issues:
* Are you sure it's too slow? Profile before optimizing!
* The universal speed-up is rewriting small bits of code in C. Do this only when all else fails.﻿
