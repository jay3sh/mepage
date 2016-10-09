---
layout: post
title: "Migrating to Google App Engine"
---
Migrating to Google App Engine
===
Last year I wrote plugins for Gimp/Inkscape that allow image uploads to Flickr/Picasa from the Image editors. The plugin code talks the public APIs of Flickr/Picasa. Flickr tracks the API user's calls by means of an API key and a corresponding secret key. Typically the apps ship both the API and secret key with their application code. This creates problem if Yahoo disables your API key OR just the idea of sharing your secret key is not comfortable.  
  
So in my app, I hosted the keys on an xmlrpcserver. The plugin would pull the keys from the server and sign the user's upload request. I had a website project running alongside, so I just put the xmlrpcserver on the same host that was serving the website. This host I rented for $15/month from a VPS vendor. Well... the website didn't fly and recently I found that there was no point anymore paying the $15 every month. But I had to take care of the xmlrpcserver hosting the keys.  
  
One solution would have been to issue new version of the plugins and ship keys with them. But this would have not worked because the users who have already downloaded the plugins, won't come back to check an update when they get an obscure error.  
  
The other alternative was to use Google's web app engine to host my xmlrpcserver. I had to spend some time in customizing the standalone xmlrpcserver to work with Google App engine. I have contributed the code in this [recipe][0] in App Engine's cookbook. I also had to modify my flickr API library a bit to use app engine's[URLfetch API][1] instead of urllib.  
  
Finally I have successfully migrated my XMLRPC server to Google App engine. I liked GAE a lot. Like other Google apps, the GAE interface is rich with goodies - log viewer, traffic analyser, Database viewer, etc.  
  
And it's free (read the EULA for limits).  
  
With a free webserver like this, I can imagine so many things I can do. Moreover it supports my favorite language... what else can I ask?!

[0]: http://appengine-cookbook.appspot.com/recipe/xml-rpc-server-using-google-app-engine/
[1]: http://code.google.com/appengine/docs/urlfetch/
