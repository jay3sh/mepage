---
layout: post
title: "The \"Screen\""
---
"The \"Screen\""
===
Thanks to a friend who introduced me to the [screen utility][0] about a year ago. It is a very fine utility for unix programmers/users who spend most of the time using CLIs. I would say it is a desktop virtualization solution applied to command line terminal. It is to the command prompt, what VNC is to the graphical desktop. To learn more follow the above link or google. It is installed on almost all linux distributions by default, so you can just start using it right away.  
  
I was however slow in adopting it. Mainly because switching between the screens wasn't so quick. The screen command line utility gives an option of creating tabs in one screen and switching between them, but that meant mastering several key sequences. So I wrote my own wrapper script to do the job. Following is the code. Save it in a file and name it suitably (use a short name that's handy - I call it 'sc') and just execute it.  
  
The code is available [here][1]  
  
Here is a sample run:  

      
    jayesh@bluebox [~] sc --help  
    Usage: sc  
    Generates list of screens if available and gives a prompt  
    Valid commands to enter at prompt -->  
    new-<NEW_SCREEN> - creates a new screen with name NEW_SCREEN  
                       and connects to it  
    [number]         - number is the index of the screen you want  
                       to connect to  
    q                - quit  
      
    jayesh@bluebox [~] sc  
    Create new screen. Use the command 'new-'  
    >>new-root  
    [Now you can login as root on this user to do all administrative tasks]  
      
    .....   
    [create bunch of other screens for others tasks you do -  
     compiler,editor, etc.]  
      
    jayesh@bluebox [~] sc  
    0] compiler  
    1] root  
    2] editor  
    >> 1  
      
    [Now you connect to screen 1, where you are logged in as user.   
    You don't have to enter root password again-n-again]  
    

  
  
Suggestions are always welcome!

[0]: http://www.kuro5hin.org/story/2004/3/9/16838/14935
[1]: http://jayeshsalvi.googlepages.com/sc
