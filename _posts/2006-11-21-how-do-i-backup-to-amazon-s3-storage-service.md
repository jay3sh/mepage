---
layout: post
title: "How do I backup to Amazon S3 storage service"
---
How do I backup to Amazon S3 storage service
===
All of today I spent putting together all the tools to do an incremental backup to the [Amazon S3 storage service][0].  
  
Amazon is a good brand and providing storage as service is very good utility. But I was not very happy by the fact that Amazon has tried to reinvent storage with this web service. Web Services are a good interface for remote inter process communication. But why do storage operations like function calls. Anyway, cheap cost of the offered storage and good brand were enough for me to pursue it as my backup solution.  
  
I spent whole evening setting up [different tools][1] that provide front end for S3 service. The most useful tool would be a NAS server that provides NFS/CIFS mounts and does S3 transactions at the backend. However it was hard to find any such direct tool. As of today there are many under-development or beta scripts written in perl, python, ruby, java. I gave a shot to few of them, but they weren't very handy for solving my simple backup solution. [JungleDisk][2] is very good frontend tool for S3-service. It gives WebDAV frontend interface (again why WebDAV and not NSF?) and it's available for all platforms. It is good if your needs are manual access to this storage. It is difficult to treat WebDAV URL as a drive so that a backup utility can write to it just like any other local drive. I investigated [lot of options][3], NFS-to-WebDAV bridge, WebDAV CLI clients which can be called by backup scripts, but there isn't a great solution for all platforms. My current need is Windows desktop backup. Finally I got 'S3Drive'. It mounts the S3 storage as just another drive on your windows box. This was gr8 for my current needs. One thing to note - JungleDisk does not show the files stored by other front end tools to the same S3 bucket - it didn't show the files stored by [S3Drive][4]. There are some other tools however which show objects stored by other tools as well, e.g. [S3Safe][5].  
  
So storage is ready, now the backup software. I was using [EzBack-it-up][6]. But after reading through its docs, I realized that it is very dumb in doing incremental backups. I had considered WinRAR some time back as backup option, but didn't get its archiving logic. After reading thru some documentation and its CLI options I figured out a way to do incremental backups. When its CLI tool is run with -ao option it "adds files with Archive attribute set". With -ac option it "Clears Archive attribute after compression or extraction". Thus "rar a -ao -ac backup.tar " will backup only the files that have changed since last backup (unless someone else changes the archive flag - I need to check with my CVS tools for this). So I got incremental backup tool.  
  
How to enforce policies and schedules. [CronForWindows][7] solves schedules problem. I spent better part of an hour on very minute problem. Being alergic to BATCH files I couldn't find a programmatic way to create the unique target tar file name that will have timestamp embedded in it. I tried running bash script using cygwin, but backslashes and/or '%' symbols in date command format caused problems. I thought of writing quick java code, but thought that wasn't really quick. So I decided to give python a shot. After half an hour I came up with following script:  

      
    from datetime import date  
    import os  
      
    today=date.today()  
    today_str = "%s%s%s"%(today.month,today.day,today.year)  
    command = 'rar a -ac -ao'+'b:\e%s'%today_str+'.tar'+' c:\workspace\project'  
    os.system(command)  
    

  
I had to put rar.exe in one of the directories in PATH, but it worked. The Cron scheduler can run this script as per the schedule I set.  
  
I have few MBs of source directory that I need to backup. I expect its contents to change under an MB per day. Looks like pretty good deal with cheap prices of S3 service.

[0]: http://www.amazon.com/S3-AWS-home-page-Money/b/ref=sc_fe_l_2/002-9228059-8329637?ie=UTF8&node=16427261&amp;no=3435361&me=A36L942TSJ2AJA
[1]: http://jeremy.zawodny.com/blog/archives/007641.html?
[2]: http://www.jungledisk.com/
[3]: http://www.webdav.org/projects/
[4]: http://www.suchwerk.net/sodcms_S3Drive_at_work.htm
[5]: http://www.lumensystems.com/s3safe.aspx
[6]: http://www.rdcomp.net/ezbackitup/
[7]: http://www.cronforwindows.com/
