---
layout: post
title: "Android development with Vim + Eclim"
---
"Android development with Vim + Eclim"
===
Let me repeat a millionth time that Vim is my favorite code editor. I however have been lured by Eclipse's glitter in the areas such as code completion, live debugging and graphic representation of various aspects of a project. But Eclipse code editor is only a bit better than Notepad, if compared to Vim. As a compromise I found the viPlugin. I used it for a while. It's not as rich as Vim, but good enough. (BTW, it is probably the first piece of software I ever paid for).  
  
Due to Android, I did a comeback to Java couple months ago and again struggled while making the choice between Eclipse and Vim. I chose to do all the coding in Vim eventually.  
  
Last week I learnt about [Eclim][0]. The project looks so mature, I wonder why I didn't hear about it earlier. It gets the best of both worlds. It provides a script that runs eclipse in headless mode and it has Vim plugins that provide the functionality like code-completion (among others) inside the Vim editor. (There are two other scenarios as well, but I use this one, check their docs for more info).  
  
Here is a small guide on how to set this up for doing Android coding.  
  
My setup: Fedora 10 x86\_64 linux, vim-enhanced-7.2.148, Eclipse SDK 3.4.2, Eclim 1.4.7, using Sun's JDK 1.6.0 (although gnu jre is installed, I avoid it by using custom JAVA\_HOME).  
  
Install Eclipse. I download the tarball and untar it somewhere (mostly /opt).  
  
mkdir ~/.vim/eclim  
  
Download eclim from [here][1].  
  
One thing that annoyed me was lack of installation instructions. The project page has good overall documentation, but it doesn't mention that you need to compile and install it using ant. Thanks to this [post][2], I figured that out.  
  
As the post says, you need ant 1.7.1\. Fedora 10 has the right version. Check what you have. I tried this incantation:  
  
JAVA\_HOME=/usr/java/default ant -Declipse.home=/opt/eclipse -Dplugins=ant,jdt  
  
It failed complaining that ant didn't find org.apache.tools.ant.util.regexp.Jdk14RegexpRegexp.  
  
After some googling I [found][3] a list of jars that have this class. I downloaded the ant-nodeps-1.7.1.jar, then tried following command. It built and installed eclim successfully.  
  
JAVA\_HOME=/usr/java/default CLASSPATH=$CLASSPATH:./ant-nodeps-1.7.1.jar ant -Declipse.home=/opt/eclipse -Dplugins=ant,jdt  
  
The installation deploys necessary vim scripts under ~/.vim and installs the plugins and some scripts to your eclipse installation.  
  
Follow Android SDK directions on how to setup eclipse environment (installation of Android plugin, etc.) and how to create a sample project. If you have created a project using activitycreator (like me), then you can still create a new project in eclipse and choose the option of creating project from "existing source".  
  
Now start the eclimd server (/opt/eclipse/eclimd for me). It starts listening on port 9091\.  
  
Navigate to your project directory (which has .project file) and start Vim. Execute ":ProjectSettings", if you don't get any error, but see a new buffer with folded lines, then you have a working setup.  
  
To try code completion (probably the most important feature), write an incomplete pacakge name and hit "Ctrl x Ctrl u". You should see a drop-down list like this.  
  
[![](http://2.bp.blogspot.com/_W6UcJjyXr24/Sh_JM6CRU5I/AAAAAAAAC28/oMAEGqUZpKA/s400/eclim-demo.png)][4]  
  
If you prefer to use Tab for this purpose install the [supertab][5] vim plugin and copy few lines to your .vimrc from the end of this [post][2].  
  
These instructions should work more-or-less for other Linux installations too. For Mac OSX, see the post I have linked twice above.  
  
It looks like Eclim has a lot of features, I have yet to try most of them. But this clearly feels like a great addition to my toolbox.  
  
_Ads:_  
\* [Eclipse Plug-ins (3rd Edition)][6]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=0321553462)  
\* [Eclipse IDE Pocket Guide][7]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=0596100655)  
\* [Hacking Vim: A Cookbook to get the Most out of the Latest Vim Editor: From personalizing Vim to productivity optimizations: Recipes to make life easier for experienced Vim users][8]![](http://www.assoc-amazon.com/e/ir?t=myfreq-20&l=btl&camp=213689&creative=392969&o=1&a=1847190936)

[0]: http://eclim.sourceforge.net/index.html
[1]: http://sourceforge.net/project/showfiles.php?group_id=145869&package_id=160492
[2]: http://writequit.org/blog/?p=279
[3]: http://www.jarfinder.com/index.php/java/info/org.apache.tools.ant.util.regexp.Jdk14RegexpRegexp
[4]: http://2.bp.blogspot.com/_W6UcJjyXr24/Sh_JM6CRU5I/AAAAAAAAC28/oMAEGqUZpKA/s1600-h/eclim-demo.png
[5]: http://www.vim.org/scripts/script.php?script_id=1643
[6]: http://www.amazon.com/Eclipse-Plug-ins-3rd-Eric-Clayberg/dp/0321553462?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
[7]: http://www.amazon.com/Eclipse-IDE-Pocket-Guide-Burnette/dp/0596100655?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
[8]: http://www.amazon.com/Hacking-Vim-personalizing-productivity-optimizations/dp/1847190936?ie=UTF8&tag=myfreq-20&link_code=btl&camp=213689&creative=392969
