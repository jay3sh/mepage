---
layout: post
title: "on Dropbox"
---
"on Dropbox"
===
I have been using [Dropbox][0] for a few weeks now. There are several solutions to address our storage issues and I have found all those solutions inadequate in one way or another. Dropbox seems to have solved most of those problems for me.  
  
There are two important things we want to do with our data (besides creating and consuming it, of course): **Sharing** and **Backup**.  
  
**_Sharing_** We need to share our data either with others or with ourselves but on a different computer. When we want to share data with others the first thing comes to mind is Email. If your data is of specific type, say image or video, you can use services that specialize in handling those types of data (Flickr, Picasa, Youtube). If it is the documents that you want to share, you will think of Google Docs or Zoho. If it is any arbitrary kind of data, then you may need a network drive. If the other individual you want to share the data with is in the same household or if you yourself want to access the data from different machine in the same household, you would use a NAS box. Mount that shared storage as NFS or CIFS drive on your computers. Here you need some administration expertise and need to maintain it over time.  
  
**_Backup_** No one wants to loose their data. But we know our computers are anything but immortal. The solutions I mentioned above for sharing data, also serve as backup solutions. Moreover, if you are tech savvy, you can use mirrored RAID hard drives.  
  
I've found that [Dropbox][0] satisfies both of the above needs and requires zero setup and maintenance efforts on user's part. Dropbox is a service provider that provides storage as a service. After you install the Dropbox software on your computer (Windows, Linux or Mac OSX), it will appear as just another folder on your computer. You can create, delete, rename a file in your Dropbox drive on one machine and the action will reflect almost immediately on other machine (depending upon the network speed). That's all. Now let me enlist what all complicated things this simple setup has solved.  
  

* You don't have to worry about NFS/CIFS or what data sharing protocol the service uses and if the OS on your different machines will talk that protocol or not. Dropbox uses some proprietary (!! yes, I'll come to that later) protocol and provides free clients for all platforms that seamlessly talk that protocol.
* You can share data with others if they have Dropbox account. Imagine telling your mom that she can copy the photos she has taken in this folder on her desktop and her son will see it instantly on the opposite face of the planet. No need to upload them to Picasa or whatever.
* Dropbox has an option called "Enable LAN sync". _**This is ****killer**_. If you want to share your data between a laptop and desktop that are in the same LAN, Dropbox will sync the data without going over network. I tried this yesterday - actually unknowingly, because I expected my Macbook to take much longer to sync a week's worth of git history and it did it almost instantly. I am not sure if this will work if you are not connected to Dropbox servers. The daemon on desktop might have to exchange some meta data with Dropbox servers, but the actual data transfer takes place entirely on your internal LAN, and hence is very fast. This makes Dropbox a solid alternative to a NAS box.
* When you sign up, you get 2GB of data for free to start with. For more storage you need to pay an yearly amount. (Don't know about you, but it will take a while for my shareable data to exceed 2GB.) Moreover you will get 250MB for every person that signs up through your referral. Furthermore, it's a data storage and not a version tracking repository. So you can free some space if you hit the limit by deleting unwanted files. (I am not 100% sure if that actually frees space or not. When I have lot of data to delete I will test it)
* Offline availability: If your ethernet/wifi connection breaks, the NAS share on your machine will be inaccessible to you. That's not the case with Dropbox. You can still access the files in your Dropbox folder even when you are offline - just that they won't be up to date.Dropbox talks a proprietary protocol. The client daemons are closed source too. These days "open" has become such a fashion statement that few people care to find its relevance in a given context. Here are two aspects of the Dropbox service that make me feel safe when putting my data in it.  
  

* Lock in - This is a major issue with document storage services like Google Docs or online MS Office. You need to make sure that they have the ability to export their document in a format that can be opened by other software of your choice. [Creately][1] is a great product, but I don't want to use it to draw my flowcharts because it saves the doc in a proprietary format. I can only export it as PNG image. I would have used it, if it had an option to export to SVG. By the nature of its service Dropbox doesn't have lock-in problem. Your files are stored as raw data, so there is no worry of format lock in.
* Evil/Bankruptcy - In case Dropbox goes bankrupt overnight, or gets bought by someone evil and shuts down their servers except for paid customers, do we loose our data? The "Offline Availability" feature of Dropbox will let you access your data on your local machine, even if the Dropbox server is not reachable. Now it is arguable, if Dropbox can plant a malware in their proprietary daemon to sabotage your data or make it inaccessible. I leave it to you to decide if a popular service provider will do such a thing on purpose. (If you think it can, you may want to stop using Gmail)  
I hear Dropbox has an iPhone app, but without iPhone I can't check it out. But they are soon publishing Android and Blackberry apps, so I will review it then. They do have mobile-friendly web site though.  
  
So overall, I think Dropbox is a great service to solve our storage worries.  
  
Having said that, there are some minor issues that I've found or don't know enough about that may concern some of you.  
  

* Dropbox can share files across Linux and Windows, but I don't know how that affects access control bits on those files. I can see the -rwx- fields on my files alright even when I put them in Dropbox. I don't know if they affect when the file is modified from a Windows machine (I don't use Windows myself). I have been using Dropbox as my Git repo for few weeks and I haven't found any problems doing that.
* On a Windows machine, the installer is little unclear when dealing with multiple accounts. I installed it from an Admin account on my parents' laptop, but it didn't show up in my parents' account that have no admin privileges. I had to temporarily give admin rights to those accounts, install Dropbox and revoke the rights later. It worked alright after that.

I have used the service only for a month, so I may or may not find things in future that may change my impression of the service. Never say never. But so far, I've found Dropbox to be the best solution for data sharing and backup.

  
(There is a competing service named [Sugarsync][2], but I haven't tried it. I think it lacks support for Linux, so no-go for me.)

  
BTW, Dropbox is a [YCombinator startup][3].  
  
_Ads:_  
\* [Seagate FreeAgent Pro 1 TB USB 2.0/FireWire 400 Desktop External Hard Drive ST310005FPA1E3-RK][4]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=B000X4PJP4) (My current local backup solution)  
\* [Seagate FreeAgent Go 1 TB USB 2.0 Portable External Hard Drive ST910004FAA2E1-RK (Tuxedo Black)][5]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=B002SYYO3A)  
\* [Backup & Recovery: Inexpensive Backup Solutions for Open Systems][6]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=0596102461)  
  


[0]: https://www.dropbox.com/referrals/NTQwMzk5OTE5
[1]: http://creately.com/
[2]: https://www.sugarsync.com/
[3]: https://www.dropbox.com/about
[4]: http://www.amazon.com/Seagate-FreeAgent-FireWire-External-ST310005FPA1E3-RK/dp/B000X4PJP4?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
[5]: http://www.amazon.com/Seagate-FreeAgent-Portable-External-ST910004FAA2E1-RK/dp/B002SYYO3A?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
[6]: http://www.amazon.com/Backup-Recovery-Inexpensive-Solutions-Systems/dp/0596102461?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
