---
layout: post
title: "Python fun"
---
"Python fun"
===
On Sunday I had great fun writing some cool [python code][0]. Finally I think I got what lambda is good for.  
  
I will mention one bit here. I found an elegant solution (at least in python) for one piece of code that I could never write with sufficient elegance.  
  
A typical problem would be to create a string out of an array of words by separating them by commas. To solve this problem you always have to take care of the one corner case - the first element or the last element of the array. The code would be clean if every element could be followed by the comma OR every element could be preceded by the comma (depending upon your choice). So either you have to use a flag to detect the first pass of the loop and not use comma before current element. Or eat the extra comma after you have come out of the loop. In any case, I always resented the loss of elegance in this type of code. Here is how I would write it in C:  

      
    int numbers[MAX] = {2,3,5,7};  
    first = 1;  
    for (int i=0; i < max; i++){  
       if(!first){  
          sprintf(str,",%d",numbers[i]);  
       } else {  
          sprintf(str,"%d",numbers[i]);  
          first = 0  
       }  
       strcat(string,str);     
    }  
      
    

  
Result: "2,3,5,7"  
  
I found a one liner to do this in python:  
  

    fruits = ['apple','banana','orange']  
    print reduce(lambda x,y: '%s,%s'%(x,y), fruits)  
    

  
  
Enjoy!

[0]: http://code.google.com/p/altcanvas/source/browse/trunk/altplayer/altplayerlib/db.py?r=463
