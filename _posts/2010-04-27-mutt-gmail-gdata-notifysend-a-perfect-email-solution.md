---
layout: post
title: "Mutt, Gmail, gdata, notify-send: A Perfect Email solution"
---
Mutt, Gmail, gdata, notify-send: A Perfect Email solution
===
Ever since I started working on my own, GMail has become my primary email account. I was mostly satisfied with the default web interface. However, the heavy javascript interface takes eternity to load on my slow network. The basic HTML interface is slim but doesn't have keyboard shortcuts, so it's useless. Moreover recently I found the GMail tab hogging most amount of memory in Chrome task manager. That gave me the final push to switch to a local email client.  
  
I have used Thunderbird and Evolution in the past, but they are not light weight by any means. I had tried Mutt before, but left it because I didn't get hang of all its shortcuts. Nonetheless I decided to give Mutt another try.  
  
Here are my basic requirements from the email setup:  
1\. _Light weight_ - Should launch quickly when I want to check the mail. Should do only the bare minimum network I/O required to fetch new messages.  
2\. _Notifications_ - Should check the mailbox at regular intervals and notify me using desktop's default notification system.  
3\. Access to _GMail contacts_  
4\. Ability to Archive messages or move them to other _GMail folders_.  
  
So far I have figured out how to do all of the above and then some. So here are my solutions numbered same as corresponding requirements above.  
  
1\. Setting up GMail IMAP has become significantly easy. All you have to do it create a .muttrc file in your home directory and start mutt. A simple google [search][0] will tell you what to put in that file. As you kick off mutt from command line, it will fetch the contents of your gmail inbox seamlessly (except if you've skipped the password in .muttrc, then it will ask you to enter it).  
  
2\. Mutt does not support notifications. Apparently it doesn't fit into the design philosophy of its developers. But a brave soul has created a [patch][1] if you are interested in building your custom mutt. As for me, I didn't go that route. I setup an alternate script that uses GMail's gdata interface to check the new messages and delievers the alerts using notify-send (on my linux box) or growlnotify (on my Mac OSX). I took a simple script from [here][2] and added my modifications. You can get my version [here][3]. It reads the username and password from your .muttrc files. It does some rudimentary checks to find if it's on Linux or Mac OSX and accordingly calls notify-send or growlnotify; you might have to tweak the paths to suite your system.  
\[Now that I searched for it, I found many easy to use [solutions][4] for notifications. Nonetheless I enjoyed writing the script, so that's a plus for me.\]  
  
3\. There is one straight forward solution for accessing GMail contacts from mutt - [Goobook][5]. It also uses the gdata interface, but it is a well packaged pypi project and once installed all you need to do is put set query\_command = "goobook query '%s'" in your .muttrc.  
  
  
4\. If you delete messages from mutt, they are archived on your GMail server after you sync (keyboard shortcut $). GMail labels are virtual folders and they are visible from mutt as IMAP folders. Just press c and then TAB. If you want to move a message from your inbox to a specific folder, press s (for save) while you are viewing the message, you will be prompted for folder to save the message to. Press ? to get the list of IMAP folders and choose the one you want. I guess it's not possible to apply multiple labels to a message in this setup. The way I understand it is, GMail first designed labels and when they offered IMAP support they exposed labels as virtual folders over IMAP. So for any IMAP client they are folders and a single message cannot reside in multiple folders at the same time. (I might be wrong, give a shout if you know so).  
  
  
A small tip for managing .muttrc. I use two machines a linux desktop and a Macbook with Mac OSX. I have set up both to use mutt. So instead of having duplicate copies of .muttrc, I have stored a common copy in my ~/Dropbox/config folder and I just source ~/Dropbox/config/.muttrc from my ~/.muttrc.  
  
  
Hope you find my tips useful. If you have any of your own, feel free to put them in comments.  
  
_Ads:_  
\* [Taming The Email Beast][6]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=0977202550)  
\* [Linux Administration Handbook (2nd Edition)][7]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=0131480049)  
\* [Unix and Linux System Administration Handbook (4th Edition)][8]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=0131480057)  
  


[0]: http://www.google.com/search?sourceid=chrome&ie=UTF-8&q=Mutt+Gmail+imap&qscrl=1
[1]: http://mndrix.blogspot.com/2005/11/notification-when-mutt-receives-new.html
[2]: http://www.imath.kiev.ua/~mellit/python/gmailatom.py
[3]: http://code.google.com/p/altcanvas/source/browse/trunk/scripts/chkgmail
[4]: http://techcityinc.com/2009/02/08/top-5-gmail-notifiers-for-linux-2/
[5]: http://pypi.python.org/pypi/goobook/1.3a1
[6]: http://www.amazon.com/Taming-Email-Beast-Randall-Dean/dp/0977202550?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
[7]: http://www.amazon.com/Linux-Administration-Handbook-2nd-Nemeth/dp/0131480049?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
[8]: http://www.amazon.com/Unix-Linux-System-Administration-Handbook/dp/0131480057?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
