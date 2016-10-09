---
layout: post
title: "more fun with notify-send"
---
more fun with notify-send
===
I [like][0] notify-send. Here is one more simple script that uses notify-send. (notify-send is the command line utility that shows pop-up message in the right hand bottom corner of desktop).  
  

    # cat runmon  
      
    !/bin/bash  
      
    COMMAND="$*"  
      
    eval "$COMMAND"  
      
    if [ $? -eq 0 ]  
    then  
       notify-send -t 0 -u normal "$COMMAND Done!"  
    else  
       notify-send -t 0 -u critical "$COMMAND Failed!"  
    fi  
    

  
Use it like this:  

      
    # runmon make all  
      
    # runmon cdrecord -v speed=2 dev=2,0 cdimage.raw  
      
    # runmon wget http://download.fedoraproject.org/.../Fedora-9-x86_64-DVD.iso  
    

  
It is useful for monitoring the tasks that take long time. Like build of entire product or burning of a CD. When I leave something to build and get to [other work][1], I would like to be notified when it's done - even if it is running in some background screen session.

[0]: http://jyro.blogspot.com/2008/08/script-fun.html
[1]: http://xkcd.com/303/
