---
layout: post
title: "How to save HTML5 canvas image to Google App Engine"
---
"How to save HTML5 canvas image to Google App Engine"
===
This is a very specific problem and not many would have it. But I had to implement it and came up with a solution that works for me. This is how I did it for [3DTin][0].  
  
First why it's specific. In a typical case a web app wants to save user submitted images to Google app engine data store. This can be simply done by presenting user with a form and adding an 'input' tag with type 'file'. The submitted image can be extracted in GAE using request.get() and packaged into db.Blob to eventually store into BlobProperty. I am not going to explain this typical case, because it's covered nicely in the [GAE's documentation][1]. However, the process is not as straightforward when the image you want to store is not an image file on user's computer, but a dump of HTML5 canvas element in the web app.  
  
An HTML5 canvas element lets you export its content as jpeg or png image with the [toDataURL API][2]. This function returns a data URL that contains base64 encoded jpeg/png image. So how do we convert this image data into GAE's db.Blob object?  
  
The solution is to send the base64 encoded data as POST param to GAE app, do some regex matching to extract the exact portion of the data URL that is the encoded image and pass it through the base64 decoder (which is part of standard python library).  
  
Here is client side:  
  
  
Here is server side code:  
  
  
Code is also accessible as gist [here][3], in case you can't see the embedded version above.  
  
This code works in [3DTin][0] where a thumbnail of user's canvas is sent to GAE app for storage. It works without problem.  
  
Ads:  


[0]: http://www.3dtin.com/
[1]: http://code.google.com/appengine/docs/python/images/usingimages.html
[2]: http://www.w3.org/TR/html5/the-canvas-element.html#dom-canvas-todataurl
[3]: http://gist.github.com/651811
