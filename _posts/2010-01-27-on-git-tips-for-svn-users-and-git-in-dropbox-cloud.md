---
layout: post
title: "on Git: tips for SVN users and Git in Dropbox cloud"
---
on Git: tips for SVN users and Git in Dropbox cloud
===
I gave in to the hype of Distributed VCS and decided to learn Git about 6 months ago (No, it's not a hype, even for single person projects). I started managing my latest [projects][0] with Git. Learning Git was not a cake walk, but I put my faith in Git's promise of power and climbed the beginning slope of the learning curve. If you are switching to git after using Subversion for years, then this slope can be steeper. But now I am comfortable with my Git setup and starting to see the glimpses of power that git has to offer.  

  
Here are few tips for subversion users shifting to Git, which could have saved me some agony when I was new.  

  
1\. How can I do svn revert in Git?  

Believe it or not, but you do that with git checkout . When I first learned that, I was shocked. (And the best part is, the manpage of git-checkout talks about this functionality only in 3rd paragraph and in not so clear words). Over time you will find out that "checkout" is highly overloaded sub-command in git. Besides reverting your changes, it is used to switch to new branch, or create a new branch altogether. Its semantics are nothing like svn checkout. (The closest git analogue of svn co would be git clone, but not exactly)  

  
2\. What's all about branching being easy in Git?  

Once your projects starts to grow beyond certain size, you appreciate the ease of branch management that Git provides. But it takes little effort to understand it. In Subversion, the central repository lies on a web server or a backed up disk partition. You as a user, "checkout" a local copy of it. In Git as well, there can be a center repository (but it's not necessary), however you do not checkout code from it. You as a user "clone" the entire repository. Because the entire repository is available locally, creating, deleting and switching between branches is very fast. Others don't see your branches unless you create a corresponding remote branch on central repository (check git push and --track option of git checkout to find out more about it)  

  
3\. Here are two useful git subcommands that I wish were more publicized, rather than documented like corner cases.  

  
    stash

When you start using multiple branches, more often than not you are faced with a situation where you have some uncommitted code in branch B, but to fix a customer reported crash you want to immediately switch to branch A. When I first faced this situation, all I could find was do a commit and switch the branch. After some later point I accidentally  came across 'git stash' and found how handy it was.  

  
    cherry-pick

You are working on some new feature in branch B and you find a critical bug while doing it. You find the  fix for it and you want to release it immediately without waiting for this feature to complete. Your releases are built from branch A (from which you create B). Commit your fix in branch B (don't include any feature code in that commit), then git the SHA id of that commit to cherry-pick.  

  
4\. git mergetool  
Git has the most intuitive conflict resolution mechanism in the form of git-mergetool. Actually, I am not sure if it's git or (g)vimdiff that deserves the credit (or both). After doing merges across branches, if you end up with conflicts, then use git mergetool --tool=vimdiff (git may automatically prompt you for this). I have done some merges with Perforce in the past (they call it crossport, integrate, etc.), and suffice it to say it was bad enough for me to avoid that task altogether. But the three windowed diff view makes this task as intuitive as possible.  
  
5\. Best Git GUI I've found so far: [Git-cola][1]  
  
6\. Book recommendation: [Progit][2] (It's Free. It explains different use cases with examples and that helps a lot)  
  
  

Now on to the second part of the post. Something that I discovered recently. First understand that, you don't need any central repository to git-fy your project. You have a directory of source files and you want to start tracking it with git, just do git init and you are good to go. git-add, git-commit, git branching all can be done after this point.  

  
  
However, in little bigger use cases you need a central repository. In my case, I work on same project from two different machines located at two different locations. I could create my git repository on USB key and carry it around with me. But it's not reliable - media corruption, physical loss, theft - you get the point. So it's advisable to have your central repo in cloud.  
  
I rented such service from [repositoryhosting.com][3] for $6 per month. They provide many other project management tools in the package too, but I primarily used it for git. Recently I started using [Dropbox][4]. Although Dropbox storage resides in cloud, they have done perfect job of exporting it as native file system. More importantly it works on all three platforms. So for all practical purposes (that I have covered in last two weeks at least), it's a native file system, but magically synced across different machines. So I just created the git clone of my git repositories in one of the folders inside Dropbox. I can now push and pull to/from this repository on different machines. See this [post][5] for detailed instructions.  
  
Dropbox comes with 2GB of free storage and by doing some referrals you can stretch it up to 2.5GB. It's plenty for versioning source code files, don't you think? Be careful not to version big files though (release binaries for instance), you won't be able to free up space by removing them once they are in the repository.  
  
I hope you found the git tips useful. Hoping to explore more of git.  


[0]: http://www.altcanvas.com/android/readerscope
[1]: http://cola.tuxfamily.org/
[2]: http://progit.org/book/
[3]: http://repositoryhosting.com/
[4]: https://www.dropbox.com/referrals/NTQwMzk5OTE5
[5]: http://stuffthathappens.com/blog/2009/02/16/dropbox-live-mesh-git/
