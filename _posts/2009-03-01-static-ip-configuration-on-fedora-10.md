---
layout: post
title: "Static IP configuration on Fedora 10"
---
Static IP configuration on Fedora 10
===
Until last week Hathway (my ISP in Mumbai) was asking me to do DHCP discovery for IP address. After the n/w stopped working yesterday I called their service rep. One of them couldn't resolve it yesterday, so he forwarded me to another guy who turned out to be a funny experience - he gave me all the static IP config valus - and when the network still won't work he started blaming it on computer virus and ultimately rust on my network cable (!) Fortunately for me (and also for him) the modem was little sluggish in picking up the change and the network started working.  
  
I had booted my new computer in Vista (yeah I know! argh!) and it worked fine. Surprisingly my Fedora 10 on Macbook and also the Fedora 10 on desktop won't respond to the static IP information. It took me 4 hours to figure out that there was nothing wrong in my knowledge of the network scripts. I got the clue when I found the system doing DHCP discovery even when I had set it to static IP. I figured it was because of the NetworkManager (seen as that taskbar network icon). When I googled, it became clear that configuring Fedora 10 with static IP is a known problem and the culprit is NetworkManager and/or system-config-network utility. This thread ([\#14][0]) is pretty much helpful, but the working solution (or workaround) is not definite.  
  
Here is what worked for me (at least for this box).  
  
\# Stop NetworkManager  
sudo service NetworkManager stop  
  
\# Disable NetworkManager service  
sudo chkconfig NetworkManager off  
  
\# Enable netwok service  
sudo chkconfig network on  
  
\# Run system-config-network  
\# Edit the ethernet device under Device tab  
\# Under "Manual IP Address settings" put static IP Address.  
\# Leave Subnet mask and Default Gateway blank  
\# Change to Route tab  
\# Add route Dest 0.0.0.0 Netmask 0.0.0.0 Gateway   
\# Add route Dest Netmask Gateway   
\# Change to DNS tab to put addresses of DNS servers  
\# Check "Activate device when computer starts" same as ONBOOT=yes (I guess)  
\# Save the settings  
  
sudo service network restart  
  
At this point network should be working. If it doesn't don't get surprised. The same steps don't help me setup my Macbook Fedora 10 with static IP. Maybe I have screwed it beyond repair. I will wait for the router to arrive, to get my macbook online.  
  
  
  
Ads:  
\* [Linux Administration Handbook (2nd Edition)][1]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=0131480049) (Best tips on Linux administration I found in this book. Own it myself.)  
\* [Fedora Bible 2010 Edition: Featuring Fedora Linux 12][2]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=0470554193)  
\* [Linux Networking Cookbook][3]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=0596102488)

[0]: http://forums.fedoraforum.org/showpost.php?p=1134502&postcount=14
[1]: http://www.amazon.com/Linux-Administration-Handbook-2nd-Nemeth/dp/0131480049?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
[2]: http://www.amazon.com/Fedora-Bible-2010-Featuring-Linux/dp/0470554193?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
[3]: http://www.amazon.com/Linux-Networking-Cookbook-Carla-Schroder/dp/0596102488?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
