---
layout: post
title: "repeat (ps | grep) = filtered top  "
---

repeat (ps | grep) = filtered top  
===
If you wished you could have grep'd and monitored only few processes in top, this script is for you - ptop.sh:

    while(true)
      do
      ps -ef | grep $1
      sleep 1
      clear
    done

Run it:

    % ptop.sh xterm

And you can see all the xterms currently running and refreshed every second.