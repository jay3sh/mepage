---
layout: post
title: "Coffeescript: To switch or not to switch"
---
"Coffeescript: To switch or not to switch"
===
For a long time during the development of [3DTin][0] I was toying with the idea of switching to Coffeescript (_"CS" henceforth_) from Javascript (_"JS" henceforth_). I was looking for a comprehensive guide about what are the pros and cons for such move. I didn't find any such document at the time. Now I have been using CS on-and-off for [3DTin][0] in past 6 months. I have learnt a lot about the potential benefits and pitfalls of CS. This blog post is a collection of what I've learnt. Hopefully it will benefit those who are wondering whether to jump the boat. But note that, my experiences are not conclusive. I am still not sure that complete switch to CS is a good thing for every JS project.  
  
Let's get started...  
  
**Coffeescript is _not_ a language**  
  
A better characterization of CS is a set of preprocessor macros (think of C preprocessor). It's just that Coffeescript is such a complete set of macros that it can pass as a language. It's more like a shorthand for JS. Why is it important to think it like this? For two reasons:  
  
1\. You cannot get away from learning (or better mastering) Javascript. One of CS's design goals is to stay as close to JS as possible and not implement language features that JS cannot natively support. That means even if you use CS everywhere in your project, you should have good understanding of JS.  
  
2\. You can use CS alongside JS. Since CS is merely a shorthand for JS, some files in your project can be written in CS, while other are written in plain JS. That helps in adopting CS in already big Javascript codebase, like ours.  
  
If you call Coffeescript a language written on top of Javascript, many people right away assume it's bound to be slower than corresponding Javascript (which is never true). (Do C preprocessor macros inherently make the generated C code slower? Not unless they are defined so)  
  
**The iterations**  
  
Iterating is something we do so many times. Therefore writing "for(int i=0, l=arr.length; i<l; i++) { ... }" every time is very painful, especially if you are used to Python's way of iteration "for obj in arr: ...".  
  
In pure JS you have to use the long form for incantation. There is \`forEach\` in modern JS implementations, but who knows in which browser it breaks in what way. Our solution for this problem is [underscore.js][1]'s \_.each function. It is everywhere in our code.  
  
Only recently however I realised, that liberal use of \_.each can lead to significant slow downs. If the loop count is very large compared to the time spent in the body of the loop, you will see clear improvement in speed by using old-fashing for loop instead of \_.each. CS gives you a compact way of iterating over an array and it automatically converts it to the most efficient JS code for doing it.  
  
This iteration in CS  
translates to this in JS  
  
Best of both the worlds.   
  
**Named arguments**  
  
Naming the arguments is the best way to implicitly document the source code.  
  
Moreover, in an ever-evolving environment the function signatures keep changing very often. If you rely on positional arguments, every time you add a new argument to the function, you have to check all the places from where it's already being invoked and check that the new argument doesn't break them. In JS, most of the times such new arguments are optional for the logic of the function, i.e. they can be undefined. Therefore they can normally added at the end of the argument list, so that the existing invocations won't need any change. For example, your current function signature is function foo(arg0, arg1). You decide to accept another optional argument newArg. You can change definition of foo to function foo(arg0, arg1, newArg). All the existing invocations of foo won't have to be changed, provided the body of foo handles newArg being undefined properly. But what if it makes sense to add newArg before arg0?  
  
In such circumstances, it helps to have named arguments. JS doesn't support them.  
  
For that matter CS also doesn't support them seamlessly, but it's easy enough to do. You can also add a line of code to gracefully define default value for an argument.  
I learnt this trick from this [Stackoverflow question][2].  
  
**Built-in classes**  
  
There are many ways to define Classes in JS, because they aren't natively supported. We use [Base.js][3] in 3DTin. With CS, classes are supported as part of language definition. You can define your classes in a more familiar OO syntax without worrying about all the black-magic with prototypes.  
  
  
**Avoids variable leaking**  
  
In JS it's very easy to forget to add var before a variable, resulting in that variable getting defined in global namespace. Do not think that creating scopes with (function() { ... })() blocks is going to help. It helps only if you define the variable with var, then it won't be visible outside that scope. But if you forget to add var, it will leak and will get defined as member of the window object. Here's a proof.  
  

[![](http://4.bp.blogspot.com/-ir9Fk1a2H7s/ULBMgdoMapI/AAAAAAAAEJk/CS4L-KHKMx0/s320/Screen+Shot+2012-11-24+at+9.55.31+AM.png)][4]In CS you don't have to worry about explicitly declaring any variables. The CS compiler automatically generates the necessary var declarations for all the variables you use. IMO this is one of the biggest advantages of CS.  
  
**_this._ becomes _@_**  
  
In object oriented JS code, you are always going to access members of the class from inside it using this. prefix. If there was a more compact way to do this, it could save a lot of keystrokes and source code real-estate. CS designers realized that and have provided a shorthand for this usage.  
  
**The Fat arrow**  
  
There are lots of callback functions in typical JS code. Classes are also functions in JS. That leads to a problem with the use of this keyword sometimes. Inside the body of a function, this refers to the context of that function. Inside the body of a function that is part of a prototype, this context is the instance of the object. Therefore if you have written this, inside a callback function body, that is defined inside a prototype member function, which is it going to point to? It points to the callback function's context. But many times you assume it's referring to the instance of the object. This is a common mistake a  developer makes while starting with JS. If you want to refer to the instance of the object from inside the callback function, then this is the solution for it.  
  
  
  
CS Fat arrow notation lets you write this in a more compact manner.  
  
The use of fat arrow =\> automatically tells CS compiler to define a reference to outer context, so that the code inside the closure body can use simple @ notation and still resolve to the right context. We have such pattern all over the code. It's easy to imagine then how cleaner our CS code looks than the original implementation.  

  
**_return_ is not necessary**  
  
CS automatically adds a return wherever it deems it necessary (and also unnecessary). This is a huge benefit while writing functional code.  
  
You can write  
instead of  
  
**  
****String formatting**  
  
Are you tired of writing  
CS makes it easy for you.  
  
**  
****Parenthesis during function calls - can be skipped (almost)**  
  
CS lets you skip Parenthesis during function invocations. This can be a good thing or a bad thing. It can make your code look more beautiful, but its overuse can make it confusing. Also the skipping rules are not consistent. Take a look.  
  
**  
****Braces and commas for dictionaries - can be skipped**  
  
Similar to parenthesis, you don't have to use braces while defining dictionaries / maps / objects. CS will automatically infer their structure based on context or indentation. This contributes a lot towards cleaning up redundant tokens from your source. If you are going to put each name-value pair on new line, you can get rid of commas too.  
  
Translates to   
  
**  
****Spanning source lines**  
  
Since CS infers a lot of things from indentation, when you try to break a long line of source into multiple lines, you can trigger compilation failures or at worse mis-interpretation.  
  
  
  
**In closing**  
In past 6 months I have used CS for all new source code and rewritten some JS code in CS if it made sense. I clearly saw certain benefits, but also some pitfalls. Not sure which path I will continue on. But I hope this post will help you make your own decisions.  
  
It's of enormous help to have a continuously running watch script that compiles coffeescript files as you save them. I've written such script that watches all coffee, jade and less.css files in a directory tree and compiles them as soon as they change. You can find it [here][5].

[0]: http://www.3dtin.com/
[1]: http://underscorejs.org/
[2]: http://stackoverflow.com/questions/5238398/default-function-parameter-ordering
[3]: http://dean.edwards.name/weblog/2006/03/base/
[4]: http://4.bp.blogspot.com/-ir9Fk1a2H7s/ULBMgdoMapI/AAAAAAAAEJk/CS4L-KHKMx0/s1600/Screen+Shot+2012-11-24+at+9.55.31+AM.png
[5]: https://gist.github.com/3083080
