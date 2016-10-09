---
layout: post
title: "Android opened - first looks inside"
---
Android opened - first looks inside
===
Update (Nov 12 '08) Benno has got android [running][0] on Openmoko. Gr8 job!  
  
News of the day! [Android is open][1]. First thing after returning from work was setting up the git download and build.  
  
Follow the download and build instructions [here][2].  
  
Tip: If you are running x86\_64 box, make sure you install \*-devel.i386 packages as well. You will keep getting errors otherwise, that the libraries found in /usr/lib64 weren't deemed good candidates by the build system for linking.  
  
For the description of each subdirectory of the project tree, check [this][3].  
  
The things of interest are the toolchain and location of bare-bones libraries. Toolchains are located inside the prebuilt directory.  
  
mydroid $ prebuilt/linux-x86/toolchain/arm-eabi-4.2.1/arm-eabi/bin/gcc -v  
Using built-in specs.  
Target: arm-eabi  
Configured with: ../../toolchain/android-toolchain/gcc-4.2.1/configure --prefix=/android/mathias/armdev/toolchain-eabi-4.2.1 --program-transform-name=s,^,arm-eabi-, --prefix=/android/mathias/armdev/toolchain-eabi-4.2.1 --target=arm-eabi --host=x86\_64-unknown-linux-gnu --build=x86\_64-unknown-linux-gnu --enable-languages=c,c++ --disable-libstdc\_\_-v3 --disable-libssp --enable-threads --disable-nls --disable-libmudflap --with-float=soft --with-fpu=vfp --with-arch=armv5te --enable-target-optspace --with-abi=aapcs : (reconfigured) ../../toolchain/android-toolchain/gcc-4.2.1/configure --prefix=/android/mathias/armdev/toolchain-eabi-4.2.1 --program-transform-name=s,^,arm-eabi-, --prefix=/android/mathias/armdev/toolchain-eabi-4.2.1 --target=arm-eabi --host=x86\_64-unknown-linux-gnu --build=x86\_64-unknown-linux-gnu --enable-languages=c,c++ --disable-libstdc\_\_-v3 --disable-libssp --enable-threads --disable-nls --disable-libmudflap --with-float=soft --with-fpu=vfp --with-arch=armv5te --enable-target-optspace --with-abi=aapcs  
Thread model: single  
gcc version 4.2.1  
  
The basic libraries are available under bionic subdirectory:  
bionic/  
bionic/libthread\_db  
bionic/linker  
bionic/libdl  
bionic/libstdc++  
bionic/.git  
bionic/libm  
bionic/libc  
  
After your build is successful, the android binaries should be available under out/target/product/generic/obj/lib/  
  
mydroid $ file out/target/product/generic/obj/lib/libc.so  
out/target/product/generic/obj/lib/libc.so: ELF 32-bit LSB shared object, ARM, version 1 (SYSV), stripped  
  
I tried to compile a simple helloworld.c, but no luck :(  
  
mydroid $ PATH=./prebuilt/linux-x86/toolchain/arm-eabi-4.2.1/libexec/gcc/arm-eabi/4.2.1:prebuilt/linux-x86/toolchain/arm-eabi-4.2.1/arm-eabi/bin/gcc:$PATH prebuilt/linux-x86/toolchain/arm-eabi-4.2.1/arm-eabi/bin/gcc hellodroid.c  
Assembler messages:  
Fatal error: Invalid -march= option: \`armv5te'  
  
I can't wait until someone compiles python with this toolchain. I don't have enough time and know-how in how to arrange this toolchain in a manner so that Python's autotools can compile in it. Hopefully scratchbox or OpenEmbedded people will take up that task and we will soon have a Pydroid.

[0]: http://benno.id.au/blog/2008/11/02/android-on-neo1973
[1]: http://mobile.slashdot.org/mobile/08/10/21/1622200.shtml
[2]: http://source.android.com/download
[3]: http://source.android.com/projects
