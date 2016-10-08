---
layout: post
title: "Handy way to create stack trace"
---

It is many times desirable while debugging to know how the program flow came to this point of execution? I found this handy way of doing that. Insert: 

{% highlight ruby %}
new Throwable().printStackTrace(); 
{% endhighlight %}

Exceptions are not always bad !!! ;) 
