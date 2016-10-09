---
layout: post
title: "best effort technologies"
---
"best effort technologies"
===
It occurred to me today, that this principle when applied to software design is quite effective. Then I thought about all the softwares we use today and tried to find instances of this principle applied in practice. And I came up with this post.  
  
The 'best effort' approach comes into picture when you are trying to solve a problem that is very difficult to solve. The solution for the problem is not defined, to the extent that it might seem infeasible.  
  
Here are some examples we see in today's digital life that obey this principle. Although they are specific instances I think they are representative of many others like them.  
  
Tivo  
I had read about how Tivo started and evolved. Initially they had to figure out how to collect the show times of variety of shows on different channels, so that their users can program their boxes to record their favorite programs. Their initial solution was as rudimentary as employing manual labor to go through the show times published in newspapers and formatting and feeding them to their boxes over network. They surely didn't have any solid scheme to collect the meta data of the shows. Being a startup, they couldn't expect all channels providing such information for a technology that was so unusual and unproven. But Tivo applied a best effort strategy. And we all know how well it paid.  
  
Amarok  
I haven't seen this in other players, it might be there, I am just not aware. But only today I found out how Amarok's context tab fetches the lyrics of a song I am playing on the fly using the best-effort strategy. I don't know if they scan ID3 tags or just file name or what else, but their strategy just worked for a song I randomly received from a friend. I have been using iTunes for more than a year, I know they provide lyrics in some cases (I got continuum's lyrics in a pdf when i bought the album). But iTunes controls the music they deliver. The problem to solve here is: "Given an audio song, show its lyrics in real time". In an ideal world you could do speech processing. But in a more practical world, meta-data is the only solution. For iTunes it's fairly easy to acquire the meta-data, because they control the data itself. Softwares like Amarok, won't have the luxury of well defined meta data. So they do the best they can. They might be subscribing to some well defined repositories of lyrics and just doing best effort match against ID3 tags or filenames. If they find exact match, they show it; if not, they give suggestions. It works like a charm though.  
  
Thunderbird  
Have you used MS Outlook in your office and tried to search through the mail by typing in that box on upper right. If yes then by now your mind must have fixed this action to a non-responsive interface hung for at least 5 seconds. I experienced this in my last job and have heard same comments from colleagues. Fortunately I switched to Thunderbird in my current job. Although Thunderbird isn't a perfect mail client, just see how slick it makes searching through your email. The reason it gives results so fast, is because by default it searches only through the subject line and To, Cc list of the emails in the folder. This is their best effort for speed. And it yields desired results almost always, because it is based on a right assumption - a subject line is the summary of the email. Surely this search might not be sufficient ~5% of times when you don't know what you are looking for and remeber only vague keywords. But that is covered by giving you an alternative to include entire mail body for search. (Why MS misses this is topic of another discussion)  
  
Google search  
I am no expert in search technologies. But just by observing the output of the software I can tell, that Google search (or any search for that matter) wasn't full proof in the beginning. In the beginning of search era, one could get unexpected search results than what they originally intended to find. But Google did the best they could do to try to understand what user was looking for. They didn't waste their time implementing a classic solution for Natural Language Processing, they just tried their best to figure out the user's intent. No need to mention how successful the strategy has been.  
  
Google desktop  
I remember Microsoft planning a filesystem (for longhorn/vista) designed on top of a database, so that it will make searching through your desktop files as efficient as SQL query processing. Everyone knows what happened to it. Compare this to Google's best effort approach to solve this problem. They didn't need to redesign the whole file system. They instead made a daemon which runs non-intrusively in background indexing your files. Initial indexing will take time, so if you install Google desktop and immediately fire a search it won't give you proper results. But that's only for first few hours. Once indexing is done Google desktop will give you what you're looking for. It must be doing some incremental indexing for the new files/emails that keep coming in. But that works so well. I remember using it as an alternative to MS outlook's search box at my last job. It would show up fairly recent mails in the search results.  
  
.... I think we can find more of such examples easily.  
  
I don't think this is a radically new concept/term I am talking about. I think this approach - "best effort strategy" - to software design is just one of the shades of extreme programming. It is just one of the lessons that can be learnt from the software startups in recent past. But it works so well, doesn't it?
