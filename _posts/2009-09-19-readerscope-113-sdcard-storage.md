---
layout: post
title: "ReaderScope 1.1.3 - SDCard storage"
---
"ReaderScope 1.1.3 - SDCard storage"
===
Update: Just released 1.1.3a. Thanks to Fernando, found a hidden bug in a background thread. the 'a' version fixes it.  
  
As the time goes by, ReaderScope accumulates lot of news and metadata. It resides in a SQLite database on the phone. The cached webpages reside in a separate WebView cache - also on the phone. After a few days with the device, everyone comes to know how scarce the phone memory is. So it's a good practice for an app to store its data store on the external SDCard. In v1.1.3 ReaderScope facilitates putting the database on the SDCard. Just head to Settings -\> Storage Management. Choose the "Database Storage Location" to be "SDCard".  
  

![](http://lh5.ggpht.com/_W6UcJjyXr24/SrSN85cNW_I/AAAAAAAADZw/6I9_TBZKMvc/%5BUNSET%5D.png?imgmax=800)  

  
You will also be prompted if you want to migrate your current database contents to the new location. In future, if you want to move the database back to the phone (maybe to replace the existing SDCard with a new one); that is possible too.  
  
This should help saving some space on the phone. However this is only half the job. The WebView cache has a sizable footprint on the phone storage. The work to get it to SDCard is in progress.  
  
Another addition in this version is the "Feed Filter" option. I hope it will improve the usability for the people who prefer to read only the latest downloaded news.  
  

![](http://lh6.ggpht.com/_W6UcJjyXr24/SrSP8YN4oTI/AAAAAAAADZ0/4e-S_2bS5BM/%5BUNSET%5D.png?imgmax=800)  
  
![](http://lh6.ggpht.com/_W6UcJjyXr24/SrSQCRYg0jI/AAAAAAAADZ4/3dHf2lFddDY/%5BUNSET%5D.png?imgmax=800)  
  

I have also set up a [Google Group][0] to discuss the issues and feature requests for the ReaderScope. Please do join.  
  
  

![](http://img.zemanta.com/pixy.gif?x-id=cacbf9e3-25e8-89a6-b986-6eebc3058c04)

[0]: http://groups.google.com/group/readerscope
