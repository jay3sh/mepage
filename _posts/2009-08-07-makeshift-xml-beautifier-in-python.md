---
layout: post
title: "Makeshift XML beautifier in python"
---
"Makeshift XML beautifier in python"
===
Lately I had to deal with some XML dumps. It's a pain to analyse XML if it's not properly indented. Browsers do the best job of rendering XML. Those collapsable XML elements are very handy. But they work only if the XML file is downloaded with right MIME type. That's why XML dumped to a local file and opened using a browser doesn't get the same treatment.  
  
I am sure there are other XML beautifiers, but I couldn't find one that will work for me. (I am sure in comments someone will post better solutions). Finally following simple python script did the trick. I found it [here][0] and corrected a little to take care of </\> tags. It worked perfectly on many XML dumps I worked with.  
  

    #!/usr/bin/python  
    import sys  
    import re  
      
    data = open(sys.argv[1],'r').read()  
      
    fields = re.split('(<.*?>)',data)  
    level = 0  
    **for** f **in** fields:  
       **if** f.strip() == '': **continue**  
       **if** f[0]=='<' **and** f[1] != '/':  
           **print** ' '*(level*4) + f  
           level = level + 1  
           **if** f[-2:] == '/>':  
               level = level - 1  
       **elif** f[:2]=='</':  
           level = level - 1  
           **print** ' '*(level*4) + f  
       **else**:  
           **print** ' '*(level*4) + f  
    

  
It's all about keeping track of depth.

[0]: http://mail.python.org/pipermail/python-list/1999-September/011087.html
