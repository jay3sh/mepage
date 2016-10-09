---
layout: post
title: "Rolling back latest git commit"
---
"Rolling back latest git commit"
===
It's surprising how difficult it's to undo the latest commit you accidentally made in git repository. It's not difficult, but the commands are obscure.  
  
Depending upon the situation you can do one thing or the other.  
  
1\. You have already pushed the commit to remote. Then only safe way I know is to do "git revert ". It will create a new commit that essentially negates the effect of the given commit. This will leave two self-cancelling commits in your git history, but it's a safe choice in case you are in doubt.  
  
2\. You haven't pushed the commit to remote and you only want to change the message of the last commit or only want to add some more files to the last commit. Then you can run "git commit --amend".  
  
3\. You haven't pushed the commit to remote. You can still use "git revert ", but you have another option. You can run "git reset --soft HEAD^". This will undo your last commit and leave the files from that commit in "staged" status. Now if you didn't want some of those files in that commit, you can unstage them.  
  
Before you use any of the above commands however, here's an advice. Git commands are abstruse and coding scenarios vary enormously. My situation may have been different when I used above commands from yours. Some git commands can cause loss of work if not performed correctly (git reset flavors especially). Here is the best way to go about.  
  
Create a temporary directory, do "git init", create some mock files and mock commits. Then try the git commands you are doubtful about. Once assured about what they do is what you want, apply them to your working repository.
