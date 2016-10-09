---
layout: post
title: "@font-face-lift"
---
"@font-face-lift"
===
I always found that customizing the look of one's website is greatly constrained by the inability to customize the typeface. Traditionally browsers use pre-installed fonts and with the CSS font-family property, you can provide a list of typefaces that you would like your text to be rendered with (Trebuchet MS, Verdana, Sans-Serif, monospace, for instance). But this list is merely a suggestion. You don't have complete control over how your web page is going to look like in X browser on Y platform.  
  
On last friday however I found that it is about to change now (at least in my hopes). I stumbled upon a [blog post][0] which had its text rendered in a very beautiful font. After some digging through its source, I discovered the @font-face CSS property.  
  
It's not that this is some brand new thing in latest CSS spec, but it seems to have become of practical use only in latest browsers. You can learn more about how to use it in [this post][1]. I am going to talk about my experience with it and how it is still not perfect.  
  
If you are reading this post in an RSS reader, go on and open it up on my blog at this point. You will see it rendered in a beautiful font. But not all of you may be. What it should ideally look like is:  
  

[![](http://4.bp.blogspot.com/_W6UcJjyXr24/S53Jiq32cLI/AAAAAAAADmU/ntNa1TF8OHI/s640/font-face.png)][2]  
But is that what you see?  
  
The snapshot above is of Safari 4.0.4 on Mac OS X. I believe it looks the same on latest Chrome versions of Linux and Mac OS X. It looks similar in Chrome on Windows XP, but on my eeepc it looks very light for some reason. It won't look anything like it at all in Firefox on any OS. That really disappointed me, but the fault here is not of Firefox, but of my blogging site blogger.com.  
  
After a lot of debugging of why Firefox wasn't loading @font-face, I found that Firefox does not allow a webpage to load fonts that are served on a different domain. Blogger does not allow the user to host any arbitrary file, so I host my font files on www.altcanvas.com. That offends Firefox and instead of loading the custom fonts ([Junction][3], [Santana][4]), it falls back to Trebuchet MS. You can find more details about Firefox's policy on this matter in this [article][5].  
  
I spent whole friday doing fun-font research for my blog. But it stoked me enough that I started redesigning www.altcanvas.com too, which desperately needed a facelift anyway.  
  
So over the weekend with the help of two new fonts ([Junction][3] and [Comfortaa][6]) and my recently learnt CSS tricks, I redesigned my website. Check out the new look of [http://www.altcanvas.com][7]   
  
Again the ideal look is like this:  
  

[![](http://2.bp.blogspot.com/_W6UcJjyXr24/S53Quk0wK_I/AAAAAAAADmc/f3bsSbEkOBo/s640/font-face-2.png)][8]  
Don't know what you will get to see. But this time, Firefox's rendering will look  just like what you see above. That's because the fonts are now hosted under the same domain that is serving the web-pages.  
  
What I also found was, even if all modern browsers successfully show custom fonts defined with @font-face, their rendering differs. For instance, the Junction font is only available in Regular font-weight and no bold variant is available. So the bold text doesn't look any different from normal text when viewed in webkit browsers (Chrome, Safari), but Firefox (and I believe IE too) smartly creates a bold variant of the typeface. Also I guess, the final look is affected by the OS platform, screen resolution, Anti-Aliasing settings, etc. (The 'e's look poor for Junction font in IE.)  
  
So in conclusion, we have a new powerful tool. It's not perfect, but it's pretty good.  
  
If you want to customize typeface of your own website or blog, I highly recommend [fontsquirrel's free @font-face kits][9].  

_  
__Ads:_  
\* [CSS: The Missing Manual][10]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=0596802447)  
\* [Head First HTML with CSS & XHTML][11]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=059610197X)  
\* [Fonts & Encodings][12]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=0596102429)

[0]: http://nimbledesign.com/post/441423115/the-path-of-most-resistance
[1]: http://nicewebtype.com/notes/2009/10/30/how-to-use-css-font-face/
[2]: http://4.bp.blogspot.com/_W6UcJjyXr24/S53Jiq32cLI/AAAAAAAADmU/ntNa1TF8OHI/s1600-h/font-face.png
[3]: http://www.fontsquirrel.com/fonts/junction-regular
[4]: http://www.fontsquirrel.com/fonts/Santana
[5]: https://developer.mozilla.org/En/HTTP_access_control
[6]: http://www.fontsquirrel.com/fonts/Comfortaa
[7]: http://www.altcanvas.com/
[8]: http://2.bp.blogspot.com/_W6UcJjyXr24/S53Quk0wK_I/AAAAAAAADmc/f3bsSbEkOBo/s1600-h/font-face-2.png
[9]: http://www.fontsquirrel.com/fontface
[10]: http://www.amazon.com/CSS-Missing-David-Sawyer-McFarland/dp/0596802447?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
[11]: http://www.amazon.com/Head-First-HTML-CSS-XHTML/dp/059610197X?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
[12]: http://www.amazon.com/Fonts-Encodings-Yannis-Haralambous/dp/0596102429?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
