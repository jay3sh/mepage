---
layout: post
title: "Warning: const is a keyword in ANSI C"
---

Warning: const is a keyword in ANSI C
===
While moving to compiler on Solaris machine if you encounter this warning

    warning: const is a keyword in ANSI C

Check you this [site](http://www.fftw.org/faq/section2.html)

    You should be aware that Solaris comes with two compilers,
    namely, /opt/SUNWspro/SC4.2/bin/cc and /usr/ucb/cc.
    The latter compiler is non-ANSI. Indeed, it is a perverse shell script that
    calls the real compiler in non-ANSI mode. In order to compile FFTW,
    change your path so that the right cc is used.