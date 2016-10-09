---
layout: post
title: "VI - A capable IDE"
---
VI - A capable IDE
===
Among the tools software professionals use 'vi' can be considered most geeky (read cooooooooool) tool. People using \*nix based systems for development settle for xemacs or more modern editors/IDEs. vi seems to be a preference of system administrators or people who do more of configuration stuff than only writing and compiling code. This is because vi is very handy and fast tool (no GUI launch like xemacs). One of the reasons for vi being less popular in many developers and more popular in geeks is its very compact and hence hard to learn keyboard commands.  
  
I was an xemacs guy, but 3 years back at a job I had to learn vi, because everyone else used it. I learnt it with very difficulty. Later on I found the h-j-k-l key combo as an alternative to arrow keys and realized how one can browse a text without moving their palms from the center of the keyboard. That's when I started loving vi.  
  
Lately I use ONLY vi for all kinds of editing. But I have also used eclipse, Visual studio in the past, so I know what great is in IDEs. IDE's give you different tools that you need for software development in one single application - multiple windows, build window, execution window, cross referencing, source code highlighting, integrated debugger and many other useful plugins. Over time I have found all these features in vi.  
  
I learnt how to use multiple windows. Switching windows in vi is a tricky dance of fingers, but once you learn it you do it unknowingly. One very useful feature of modern IDEs is folding. They parse the source code and allow you to fold the source code at different nesting levels. In case of C, C++, Java, that would be done using braces. Considering vi is totally a text window tool, the way vi developers have achieved this folding effect is remarkable. You have to give a bunch of commands though before achieving this. But I now have defined macros for these commands and at a hit of a function key I can collapse a huge C/C++ source file in screenful of folds. This feature gives a comfort in browsing through the code, because it essentially summarizes the code. (One thought - If you fold the code of a C++ class implementation file, then what you see is more or less the interface of the class)  
  
In past few days I got to try some of the advanced features of vi. Vi's latest version lets us import a cscope database file in vi. That way you can browse through a source tree using cscope from the comforts of Vi. An Explorer plugin of vi gives you one special window that you can use to navigate through your directory structure. One can also integrate vi with a debugger. I however haven't got time to look at that, mainly because it's of little use in my particular environment as my development machine and test machine are always different and have different platforms.  
  
The most versatile feature that I find most interesting is a support for shell in a window. Unfortuanately I read that this is not integrated by vi development community as part of vi. So I had to download a private patch and build a patched vi of a little old version and use it. Regular vi lets you run shell commands, but while doing that your vi disappears from the screen - I don't like that. I always wanted to execute shell commands in a little window in a corner bottom, so that I can kick off my build process in that window and watch the compilation errors right besides the source code. This is a very versatile feature, because using it you can have a super customized window that you can use for compilation, execution or file browsing. A little inconvinience is that, the patched vi for vimshell is only a little old, but it is old enough not to have cscope support. And I did not find vimshell patch available for latest vim 6.4\. But that's just a minor issue.  
  
The following two links should let you do all these things that I have described above:  
\[1\] [Vim documentation help][0] - This is the bible of vim  
\[2\] [The VIM-Shell][1]

[0]: http://vimdoc.sourceforge.net/htmldoc/help.html
[1]: http://www.wana.at/vimshell/
