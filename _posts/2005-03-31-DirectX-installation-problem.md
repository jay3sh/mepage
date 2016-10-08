---
layout: post
title: "DirectX Installation Problem"
---

DirectX Installation Problem
===

After a long time, I decided to play games and was struggling to install direct X 9 on my XP for playing some demo games. Great windows wouldn't allow me to install this driver. I said, the software did not pass Windows Logo testing. Now this gives you no direct clue about what the real problem would be.

After doing some googling, I found that this logo testing is the check that windows XP does so that only the softwares intended for this OS version will be installed. In the past versions such mismatches would cause only warnings, but now they are banned.

Then doing some more googling made me understand that the XP's version is subject to the installation of security patches. So first I tried uninstalling the patches that were previously installed by 'windows update', hoping that this will downgrade the OS version, and maybe that will match the version expected for the direct X driver. (This naive random trick did however fixed another problem of mine - detection of my Windows optical desktop after each reboot and prompt for reinstalling drivers for it.)

Then I checked the direct X website of Microsoft and found that there is one security patch associated with it - numbered `839643`.

After installing this patch, I could install the direct X 9 successfully.

Such errors from the OS should give the exact cause of occurence. Failing to do so, is very serious UI flaw. Why didn't the installer for DirectX 9 had information about the security patches it needs? In the first place, installation of security patches (which has become quite frequent process in for Windows platform) should not make it incompatible with new software installations - and that too for superfluous reasons (version mismatch?).