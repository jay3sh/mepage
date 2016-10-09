---
layout: post
title: "Script fun"
---
"Script fun"
===
If you use Gnome, then you can use this quick script for setting casual reminders from command line.  

    $ cat ~/bin/remind  
    #!/bin/bash  
      
    msg=$1  
    shift  
    ( sleep $* && notify-send $msg -t 0 ) &  
    

Usage:  

    $ remind "Laundry done" 48m  
    $ remind "Group meeting" 1h 10m  
    

At the end of time, you will see a popup with the reminder message.
