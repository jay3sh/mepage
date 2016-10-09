---
layout: post
title: "Talking Twitter client"
---
Talking Twitter client
===
So I learnt this afternoon about this Linux utility called [festival][0]. It's a text to speech conversion program. Running it is as simple as  
  

    echo "Hello world" | festival --tts

  
Moreover, installing it on Fedora is as easy as   
  

    sudo yum install -y festival

  
After that, a bit of a bash and a bit of a python and I had a twit-to-speech utility running.  
  
The code is simply this much:  
  

    #!/bin/bash  
      
    TWITTERURL=**"**http://twitter.com/statuses/friends_timeline.json**"**  
    JSON=**"**/tmp/twittline.json**"**  
    SPEECH=**"**/tmp/twt.message**"**  
    PYCODE=**"**/tmp/twt2speech.py**"**  
      
    **read** **-p** **"**Username: **"** TUSER && **\**  
    **read** **-sp** **"**Password: **"** TPASS && **\**  
    curl **-s** **-u** $TUSER:$TPASS $TWITTERURL **>** $JSON  
      
    cat **>** $PYCODE **<< "EOF"**  
    import json  
    import sys  
    import re  
    urlp="(https?|ftp|file)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]"  
    twits = json.load(open(sys.argv[1]))  
    for twit in twits:  
        text = twit['user']['name']+' says: '+twit['text']  
        text = re.sub(urlp, '', text)   
        print text  
    **EOF**  
      
    python $PYCODE $JSON **>** $SPEECH  
      
    **while ****read**** line**  
    **do**  
    notify-send **-t** 15000 **"**$line**"**  
    **echo** $line **|** festival --tts  
    **sleep** 1  
    **done** **<** $SPEECH  
      
    **echo** **"**THE END**"** | festival **--tts**  
      
    

code syntax highlighting by [GVIM][1]   
  
The above script will ask your twitter credentials, fetch latest 20 twits in friends' timeline, save into a JSON file. A short python script parses the JSON, extracts twit text and user's name from it and outputs in a sanitized format (it removes URLs, because there is no use hearing them).  
  
The sanitized output is  saved in another text file, which is piped one line at a time to festival. In case the speech is not clear, it also shows the text in a pop-up using notify-send.  
  
A full script with some error checking can be found [here][2].

[0]: http://www.xenocafe.com/tutorials/php/festival_text_to_speech/index.php
[1]: http://vim.sourceforge.net/
[2]: http://altcanvas.googlecode.com/files/twt2speech
