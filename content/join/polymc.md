---
title: PolyMC
author: LethalMrM
tags: ["modded Minecraft commands", "Modded Minecraft", "Minecraft Network", "ShadowNode", "ShadowNode Modded", "Modded
MC", "Modded MC Network",
"PolyMC", "Feed-The-Beast", "FTB", "CurseForge", "How-to"]
weight: 1
---
## About PolyMC

PolyMC is a newer launcher that allows you to install via CurseForge and FTB App. PolyMC will provide links to mods 
that it cannot download directly from CurseForge. You will need to manually download these mods and add them to your 
pack's mod folder directly. We'll describe how to do so below. If the interface for PolyMC looks familiar, that's 
because it was originally a fork of MultiMC. 

If you already have PolyMC installed and want to install a pack you can jump to [pack installs](/join/polymc/#install-packs). 
If you are having issues with the wrong version of Java please jump to [changing java versions]
(/join/polymc/#wrong-java) 

## Installing PolyMC
Head to the [PolyMC Download Page](https://polymc.org/download/) and click on the download link for your platform. All instructions below assume you're running Windows.

Once you've downloaded PolyMC go to your downloads folder and open the installer and follow the instructions below to get setup.

1. As this application is open source and not signed you will be prompted with a screen like the below. You will need to click "more info" then "Run Anyway". As long as the application was downloaded via the link above it should be safe.
![More info](/assets/images/polymc/polymc_warning_1.png)
2. This will now bring up an installer. Click "Next >" and then choose the options you want to have installed with 
   the program. After you checked the options, click "Next >" again and you will be prompted where to install it. We 
   recommend the following location `C:\PolyMC`, however, you're free to install it where you choose to. 
![Install Location](/assets/images/polymc/polymc_setup_location.png)
3. Once you've set the location click "Install" and let it install. Leave the box checked that says "Run PolyMC" and 
   click "Finish".
4. PolyMC will now launch and you'll see a screen like below without any modpacks. 
![PolyMC Default Screen](/assets/images/polymc/polymc_modpacks.png)
5. To finish setting up PolyMC we need to add our Microsoft Account to it to be able to add packs. To do so click 
   the top left drop-down. The one above says "LethalMrM" but yours will say something along the lines of "No Accounts". From the drop down click "Manage Accounts". In the top right corner you'll see "Add Microsoft" and you'll need to click that.
![Account Management](/assets/images/polymc/polymc_accounts.png)
6. Once you do this a window will pop up asking you to link the account. Click the link and login with your 
   **Minecraft-related Microsoft Account**. It will provide you a code you'll need to enter to link the account. 
   This will be in bold. I've blurred the one in the image out for security reasons.
![Link Accounts](/assets/images/polymc/polymc_link.png)
7. You should now see your account listed if you did this correctly. You can close the account window and return to 
   the main window. PolyMC is now ready to be used.

## Install Packs
1. From the pack screen of PolyMC click the add button in the top left. It will open a new window to allow you to 
   select the FTB or CurseForge Pack you wish to install.
![PolyMC Default Screen](/assets/images/polymc/polymc_modpacks.png)
2. Select "FTB" or "CurseForge" depending on your pack type. If in doubt you can ask in our Discord. In the search 
   filter type in the name of the pack that you want to install. Once you find the pack and select it click the version drop down and select the version that's shown on our [servers](/servers) page.
![PolyMC FTB Selection](/assets/images/polymc/polymc_ftb_1.png)
3. Name your pack with something to include the version and pack name so that you can easily tell which one you're 
   updating if you need to update the pack. Please note that updates require you to re-download and install a new 
   copy of the pack. Once you're happy with the name, click "OK".
4. Let the mods download. You may be shown a screen like the below. If you are you will need to click on the links 
   and manually download the mods. If you're using Windows these downloaded mods will show up in your download 
   folder like show below.
![Download Required Mods](/assets/images/polymc/polymc_missing_mods.png)
![Downladed Mods](/assets/images/polymc/downloaded_mods.png)
5. Right Click on your instance and select "View Mods". From here you will see a new window that has a button to add 
   mods. Click "Add Mods". In the file browser window that comes up go to where you downloaded the files and  select 
   the jars. Click "Open" to add the mods.
![PolyMC Right-click](/assets/images/polymc/polymc_rightclick.png)
![PolyMC Add Mod](/assets/images/polymc/polymc_add_mod.png)
![File Browser Selection](/assets/images/polymc/polymc_select_mods.png)
6. Click the close button and then Double click the Packs icon to launch it.

## Wrong Java
When you launch a pack you might have the wrong version of Java installed to run the version of MC you're attempting 
to run. Please check out our [what Java version do I use](/java-versions) page to ensure you download and install the 
right version of Java for you.

Once you have the right version of Java please follow the steps below.

1. Right-click on the pack that you tried to launch and has the wrong version of Java for. Select "Edit Instance" 
   from the right-click menu.
2. Click Auto Detect and it will show the versions of Java installed. If you don't have the right version listed 
   there please visit our [Minecraft Java versions](/java-versions) page and start this process over after 
   installing it.
![PolyMC Settings](/assets/images/polymc/polymc_java_settings.png)
![PolyMC Auto Detect Java](/assets/images/polymc/polymc_auto_detect.png)
3.  If you do see the correct version, select it and click "Ok". This will close the popup and then put you back 
    into the settings window. Click "Launch" and ensure the pack launches correctly. If it doesn't please visit us 
    in our [Discord](https://discord.shadownode.ca/) and make a ticket in #tickets for additional help.