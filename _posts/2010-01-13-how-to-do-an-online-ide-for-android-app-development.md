---
layout: post
title: "How to do an online IDE for Android app development"
---
How to do an online IDE for Android app development
===
No, this is not a product that I am planning to work on. I am sufficiently occupied with my current projects and plan to continue working on them. But one can't help flirting with new ideas, so I am going to put it out there. If you like it, go implement it.  
  
The idea is not at all new. Mobile is the next platform in computing and more and more people will want to create new apps for it. A bulk of them will be newbies and would appreciate if there was an easy way to create such apps. It appears that a majority of such users are music labels, celebrities, product brands - who already have content and want to develop mobiles apps to create more channels to their content. This is where startups like [Mobile Roadie][0] is growing. They are soon entering into Android space. [Kyte][1] is another contender in this space.  
  
On the other hand, there are mockup based products which are adding mobile apps to their generic software mockup development environments, e.g. Balsamiq. Last month we saw Palm launching [Ares][2]. It is a web based IDE where one can drag-n-drop widgets to design their Palm Pre app. It goes beyond the basic mockup functionality and lets you edit the code and also does final packaging producing the package that can be tested in Palm Pre's emulator or actual device.  
  
There must be many more which I don't know. But this is a pretty young field and there is a lot to do.  
  
Here I want to lay out plans about such a product for Android. I will enlist the features that I would like to see in it, that may or may not be covered by already existing products I listed above. More importantly I will list how I would have designed  such system, if I were doing it today - choice of tools and technologies, revenue model, etc.  
  
The basic scheme has four components:  
1\. Save the source (and resource) files.  
2\. Run the compilation and packaging inside the cloud.  
3\. Give a simplified web interface.  
4\. Provide templates for common tasks.  
  
The first two components dominate the choice of your Cloud provider. Android build environment is not a generic setup to be run in cloud (unlike email hosting or version control), so you will need raw virtual machines hosted in the cloud. I would have chosen Amazon S3 and EC2 for the job. A typical recipe would be, a Linux VM (fedora/centos or debian/ubuntu server), Sun JDK 1.5, Ant, Android SDK. As the project will grow, there will be need to build higher level management of build processes - Ant and its task architecture might help in building that. My favorite cloud service is Google App Engine, but it's not the right hosting service in this case. However you can design a hybrid cloud, where your account management, web page hosting is served from GAE, which the build and packaging takes place inside Amazon EC2 cloud.  
  
The third component is the web based user interface to the system. Like many web based IDEs, it will have to be AJAX-ified. I would go with jQuery (GWT is also a choice). As first steps of designing this component, one should first build user flows. A simple user flow would be:  
  
1\. Ask user for project details - Name, Package name, etc. (whatever that needs to go in AndroidManifest.xml)  
2\. Run "android create project ..." in cloud and provide user link to the debug apk.  
  
Here on give user an interative interface, in which he/she can modify source code, hit a "Build" button, fix build errors and get the debug apk upon successful build.  
  
For editing the source code, use some off-the-shelf javascript based code editor. (My choice: [EditArea][3]). When user clicks on the source code files in the tree view (.java or .xml), just show the code editor populated with the file's contents.  
  
When user clicks on the layout .xml files, give an option to the visual editor. This should be a drag-n-drop interface for placing and manupulating standard Android widgets. I don't know any off-the-shelf solution, but take a look at [this example][4] for iphone mockups. It is easier said than done, but it will be a great success if done rightly.  
  
The fourth component is what makes this service usable to the masses. You can't expect hard core developers to use this service, for them native Android SDK is the best environment (except for the visual layout editor, something that is lacking altogether in Android dev world). It's the non-coders who will find your service useful. And making their life more easier will increase the value of your service. To do that, you have to identify generic apps that masses would want to write - A music library browser, RSS reader, gallery of photos or some fancy list of items. Mobile Rodie would be an extreme example to look at for this. Their service is mainly targetted towards Music album brands and other kind of content creators. It is up to you to choose one of these target audience and create template projects that will help them build their apps in a snap. Over time you can add to your library of templates and address wider audience. Which demographic to address and when, will depend on your understanding of your (potential) users and the resources you have to create the new templates. Again, easier said than done - but that's why I won't get a dime for writing this and you will win the lottery if you do it right.  
  
Accounts:  
  
You will need to create user accounts system. I would investigate OpenID based login mechanisms (e.g. [StackOverflow][5]), rather than implementing my own. If you choose to implement a hybrid cloud and use Google App Engine for user interface, then you can use Google's [User API][6] with almost no extra implementation.  
  
Pricing:  
  
There are two ways you can earn from this service:  
1\. Ads - You have the advantage of having a very specific audience of your web service. Use it for targeted ads, that will be very relevant to your users - for e.g. Beginner Android book ads from Amazon. You can even make sponsors from your users. They would want to advertise their newly created apps to the world after-all.  
2\. Paid accounts - Provide debug APKs for free, but provide signed APKs only to the ones with premium accounts. Allow XML editing of layout files for free, but provide drag-n-drop interface to only paid users.

[0]: http://www.mobileroadie.com/
[1]: http://www.kyte.com/
[2]: http://ares.palm.com/Ares/about.html
[3]: http://www.cdolivet.com/index.php?page=editArea&sess=ecd8cb8986b661a27cfa0d47c9099018
[4]: http://iphonemockup.lkmc.ch/
[5]: http://stackoverflow.com/
[6]: http://code.google.com/appengine/docs/python/users/userclass.html
