---
layout: post
title: "If Harry Potter were a computer hacker ..."
---
"If Harry Potter were a computer hacker ..."
===
Rebellion, that makes him the Chosen One, is the quality that Harry Potter seems to share with a computer hacker. So I cannot resist the temptation to see HP's adventures through a computer geek's spectacles.  
  
The idea came to me from Marauder's map and the difficulties Harry faced while finding Malfoy on that map. I wished so strong to suggest Harry to write a simple script (in some magical languages they might have) so that he could write a simple search engine for finding any desired person. After all it was another clever prankster before him who must have put together few magical things together to make that Marauder's map. (I am sure they must be having MagicSoft in their world - but that would cost many galleons to them). Also Harry must have learnt something from the muggle Map sites about the zooming facility they had added. I felt sorry for him when on that sizable map he had to see all the names in the school moving around.  
  
Room of Requirement is a very interesting design pattern. Primarily it is a Factory design class. It creates variety of Room objects to suit the user's requirements. The implementation however is little fuzzy to me. One of the confusing things is its ability to maintain state and moreover its ability to restore that state to the user without any visible mapping using UIDs etc. To elaborate, Harry hides his Half Blood Price potions book in the Room that this RoR generated for him. The fact that one can hide things in these Room objects and can retrieve them later makes it necessary for the Room to maintain state. If RoR generates new Room objects every time then how would it know when to open an old Room object according to the wish of the user. So there should be a unique ID in RoR's database that maps the Room instance to a User and his/her Wish. But I doubt if this magical RoR factory pattern does so. I highly suspect that it's a factory that just picks up Rooms from persistent physical rooms and returns them to the user. That way it makes sense when the same room opened for Prof Trelawney and Malfoy in HBP. But then it remains unexplanied what is RoR's behavior when a user wishes some room with extra-ordinary requirements that physically might not exist at all. Will the RoR throw an exception in such case? NonPracticalWishException ? :)  
  
Being the chosen one, Harry Potter has knowledge of some advanced languages that could help understand Dark viruses spreading in Magic cyber world - for instance Parselmouth (I wish they had named the script language as Parselmouth rather than Python :)  
  
Excuse me if this was a complete torture for you. If you didn't think so, let me know how did you like it!  
  
Cheers!!!
