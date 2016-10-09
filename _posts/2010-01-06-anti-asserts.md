---
layout: post
title: "Anti Asserts"
---
Anti Asserts
===
I couldn't help but make this name up after I thought about it in that sense.  
  
Putting **Asserts** at various points in your code is a good practice. With Asserts you express your assumptions about the state of your program at the particular point in execution. When the program runs, it verifies if your assumptions actually hold or not. Asserts are the simplest form of a test case.  
  
Consequently, what I call **Anti Assert** is bad. Where Assert gives you an opportunity to test your assumption at certain point in code, Anti Assert will rob you off such opportunities.  
  
Anti Asserts are more dangerous, because we introduce them unknowingly. Where Assert is one definite line of code, Anti Assert is essentially invisible or hidden under the guise of routine code logic.  
  
So what is Anti Assert?  
  
Simply put - it is the unnecessary checks that we put in our code, and more specifically the superfluous NULL checks.  
  
Why call them Anti Assert?  
  
This is how we use **assert**s.  
  

    // ...  
      
    TheObject obj = x.findObject();  
      
    **assert**(obj != null);  
      
    obj.performY();  
      
    // ...  
      
    

In the above code, if under some scenario obj turns out to be null, then we will very likely learn about it during early development/testing.  
  
And this is what I call **anti-assert**.  
  

    // ...  
      
    TheObject obj = x.findObject();  
      
    **if**(obj != null) obj.performY();  
      
    // ...  
    

  
In this code we not only omitted the assert, but we did a null check before calling a method on _obj_. Doing a null-check before de-referencing is considered a smart thing (especially if it is the C/C++ code), but do you realize that this only postpones the disaster?  
  
By doing a null check we avoided a failure while calling _performY_, but somewhere down the code path _obj_ might still get dereferenced, and in worst case that will happen only on customer site.  
  
The tendency to put such cautionary null checks is justifiable in C/C++ code. In the native code a NULL pointer dereferencing will lead to segmentation fault, and unless it happens on a debug build the developer won't know what went wrong. So the coders working in C/C++ or having a prior background in those languages will tend to introduce Anti-Asserts.  
  
In Java or other managed languages, if a pointer turns out to be null, the worst that can happen is a program crash with well-defined stack trace. With [proper mechanisms][0], such crash reports can be easily retrieved even from customer sites. So there is no justification for introducing Anti-asserts when coding in managed languages.  
  
One way to avoid introducing Anti-asserts is understanding the API contract carefully. If an API function is not supposed to return null, then we shouldn't put a check for it. That way, if it indeed returns null, it will be exposed by a crash (with some luck during early testing). Or the best practice would be to put an assert, with an arrangement to remove it from production code. This [thread][1] on Stack overflow gives ample information on this subject.  
  
This is not something new, but just a re-emphasis of what we already observe but fail to recognize.

[0]: http://jyro.blogspot.com/2009/09/crash-report-for-android-app.html
[1]: http://stackoverflow.com/questions/271526/how-to-avoid-null-statements-in-java
