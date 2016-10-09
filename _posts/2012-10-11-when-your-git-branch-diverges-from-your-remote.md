---
layout: post
title: "When your git branch diverges from your remote"
---
"When your git branch diverges from your remote"
===
This is a tricky state and in past when I occasionally got myself into it I could never cleanly recover from it. Until now. I just found a clean way.  
  
What's this tricky problem?  
  
You know that `git commit --amend` is a very useful way to make changes to your last commit. You can add a couple of diffs to it or just change the commit message. It works great as long as you haven't pushed that commit to any remote. If the remote already has your last commit and now you make changes to it locally, your local branch and the remote branch are going to diverge. You will get a message like this  
  

    # On branch master  
    # Your branch and 'origin/master' have diverged,  
    # and have 1 and 1 different commit(s) each, respectively.  
      
    

If you try to push to remote, git won't let you (if I recall correctly). Therefore I almost always check whether I've pushed the commits to origin/master before I try to invoke --amend. But sometimes accidentally I forget to check and end up in this tight situation. Well today I got a way to resolve it.  
  
The state of your git repository is like this  
  

    Remote: A --> B  
             \  
    Local:  A --> C  
      
    

After commit A, you created commit B and pushed it to the remote. Then you accidentally did --amend on commit B and changed it to commit C. Here are the steps to recover.  

1. Rewind C. In the past I described [different ways of undoing a commit][0]. One of them helps us here. We run `git reset --soft HEAD^`to rewind commit C. That is, the changes in commit C come back to the staged state. Now these changes are sum of the diffs that went in commit B and the changes you added with --amend. 
2. Note the changes you did in --amend (copy them somewhere, hopefully they weren't many). 
3. Now either erase these changes with `git checkout`or stash them away with `git stash save`. 
4. Now do a git pull. This will bring your local repo in sync with remote. i.e. your repo's HEAD will now be at commit B. 
5. Now do the changes that you were trying to commit with `--amend` (that you saved somewhere earlier). 
6. Now commit them as a new separate commit D. 
7. If you had stashed the old mixed changes, do a `git stash clear` to loose them.

That's it. Now your local and remote branches will look like this after you push

  
    Remote: A --> B --> D  
               
    Local:  A --> B --> D  
      
    

  


[0]: http://jyro.blogspot.in/2012/05/rolling-back-latest-git-commit.html
