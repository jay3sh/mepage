---
layout: post
title: "Youtube ETA - Chrome extension"
---
Youtube ETA - Chrome extension
===
If you have ever tried to watch a youtube video on a slow network connection, you will know the frustration I often face. Wondering when that red progress bar will reach its end. Thanks to a chrome extension like [Stop Autoplay][0], I can let the youtube video open in background tab and let it buffer as I browse other webpages. But still I have to go back to the youtube video's tab to find out if the video is downloaded, can I start watching it?

  
So I always wished someone had written an extension which will do something about this problem. After going through 3-4 pages of search results on chrome extension website with the query 'Youtube', I figured no such extension exists. This weekend, the itch became unbearable. So I peeked into the Stop Autoplay's short code and with some searching found out there exists a [Javascript API][1] to control the youtube player's behavior. It provided the API calls that were sufficient for me to calculate the speed (in bytes-per-sec) at which youtube video is downloading. Combine that with total size and total duration of the video and I had the solution I was looking for.

  
So I decided to write an extension out of it. You can get it from [here][2]. 

[![](http://1.bp.blogspot.com/_W6UcJjyXr24/TPSQNvj3JNI/AAAAAAAADrY/tnEw15IlICo/s1600/icon128.png)][3]

  
It does following things:

1. Pauses the video at the start, i.e. disables the autoplay
2. It calculates an estimated time it would take to download the video completely. Shows it in a red box in the top left corner.
3. It also prepends a short version of this estimated time to the title of page. So even if you are browsing in other tabs or windows, you can tell how much longer it is going to take, without visiting the youtube page.
4. There is an instant of time, when the video is not yet downloaded completely, but if you start watching the video after that point, you can be assured that the entire video will be downloaded by the time you reach the end. That way it is guaranteed that you won't have any interruption while watching the video. The extension smartly calculates that instant and informs you by turning the red box into orange. It also adds '\*' to the timestamp in title after this point.

Give it a shot. The extension won't yet work with HTML5 player, I will fix that soon though.

  


[0]: https://chrome.google.com/extensions/detail/lgdfnbpkmkkdhgidgcpdkgpdlfjcgnnh
[1]: http://code.google.com/apis/youtube/js_api_reference.html
[2]: https://chrome.google.com/extensions/detail/dihdfccldmpeiacniemennlegenkkhnh
[3]: http://1.bp.blogspot.com/_W6UcJjyXr24/TPSQNvj3JNI/AAAAAAAADrY/tnEw15IlICo/s1600/icon128.png
