---
layout: post
title: "ReaderScope beta4 - offline fun"
---
ReaderScope beta4 - offline fun
===
Beta 4 is about some new features that make offline browsing better.  
  
The news items (including embedded images) are now cached (if you choose the option in Settings). Moreover the actions you perform offline, like marking news items read/unread/starred/unstarred/shared/unshared are remembered and when you go online next time, you can sync these actions with a tap of a button.  
  
Now here are some details.  
  
If you want to read your news items complete with images when you are offline, you should go to settings, choose your favorite feeds/tags to cache and mark this checkbox.  
[![](http://4.bp.blogspot.com/_W6UcJjyXr24/SpVtgW6rN8I/AAAAAAAADUQ/qkDvhMZ6GUM/s400/cache-images-option.png)][0]  
Now when your favorite feeds get downloaded during periodic/manual download, the news contents will be cached. You can also verify that by looking at the progress bar in notifications towards the end of download.  
[![](http://4.bp.blogspot.com/_W6UcJjyXr24/SpVtgwQpZbI/AAAAAAAADUY/aDFVBJcUUSw/s400/caching-contents.png)][1]Note that, ReaderScope leverages WebView's caching capabilities. (WebView is part of Browser). Therefore you need to have enabled the Browser's cache. Also clearing Browser's cache will lead to loosing the cached images too. (The text will still remain intact).  
  
Now about the second feature. When you read/star/share a news item, the action is instantly synced with Google Reader. However when you are offline, this is not possible. Starting from beta4, such operations are now noted in the database. When you perform these actions, you will see this message  
  
[![](http://2.bp.blogspot.com/_W6UcJjyXr24/SpVthdQpkgI/AAAAAAAADUg/pqb8s7zyFmw/s400/offline-save-msg.png)][2]At the same time you will see a notification in the status bar.  
  
[![](http://4.bp.blogspot.com/_W6UcJjyXr24/SpVvwzQRwcI/AAAAAAAADUo/0LTo5K-_9Ow/s400/pending-tasks-notification.png)][3]You can continue reading news offline. After you get back online. Just pull down the notifications area and tap on the above notification. It will automatically sync the actions with Google Reader, showing progress as follows:  
[![](http://3.bp.blogspot.com/_W6UcJjyXr24/SpVv8MRvbKI/AAAAAAAADUw/FLN1C8ppLMI/s400/syncing-notification.png)][4]  
In addition, some fixes were done in the code to handle scenarios when network connectivity is lost in the middle of browsing the news. As David reported in [comments][5] to last post, such scenario locked the UI at the circling progress bar. The fixes now take care of that. Wherever possible, the network operations are not started without checking the connectivity. If the network should disconnect in the middle of a download, then the progress bar will go away at the most in 30 seconds followed by proper error message.  
  
So give it a shot! I have tried my best to consider various n/w outage scenarios, but it's not easy to cover all possible cases. So if you still see any problems, please let me know in the comments.

[0]: http://4.bp.blogspot.com/_W6UcJjyXr24/SpVtgW6rN8I/AAAAAAAADUQ/qkDvhMZ6GUM/s1600-h/cache-images-option.png
[1]: http://4.bp.blogspot.com/_W6UcJjyXr24/SpVtgwQpZbI/AAAAAAAADUY/aDFVBJcUUSw/s1600-h/caching-contents.png
[2]: http://2.bp.blogspot.com/_W6UcJjyXr24/SpVthdQpkgI/AAAAAAAADUg/pqb8s7zyFmw/s1600-h/offline-save-msg.png
[3]: http://4.bp.blogspot.com/_W6UcJjyXr24/SpVvwzQRwcI/AAAAAAAADUo/0LTo5K-_9Ow/s1600-h/pending-tasks-notification.png
[4]: http://3.bp.blogspot.com/_W6UcJjyXr24/SpVv8MRvbKI/AAAAAAAADUw/FLN1C8ppLMI/s1600-h/syncing-notification.png
[5]: https://www.blogger.com/comment.g?blogID=7937326&postID=4027745284798480839
