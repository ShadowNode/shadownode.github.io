---
title: Prism
author: LethalMrM
tags: ["modded Minecraft commands", "Modded Minecraft", "Minecraft Network", "ShadowNode", "ShadowNode Modded", "Modded
MC", "Modded MC Network", "curseforge", "curse", "ftb", "prism", "prism launcher", "how-to"]
---

## Prism Launcher

Prism is a third-party launcher not related to Microsoft, Mojang, CurseForge,  FTB. It can be used to launch vanilla Minecraft, custom Modpacks, FTB, and CurseForge Modpacks. This launcher is great for getting into modded Minecraft and providing a simple experience but also caters to power users. Prism run on Windows, Linux, and macOS.

### How to Install
Head to [Prism Launcher](https://prismlauncher.org/download/) and download the Prism Launcher for your OS. The steps below are taken from a Windows install so it might be different if you're on macOS or Linux.

Once you've downloaded the launcher go to your downloads folder and open the installer and follow the instructions below to get set up.
1. In the launcher's base install screen click next till you see an option to create a desktop shortcut. We highly recommend creating one. You can do so by clicking the checkbox as shown below and then clicking next.
   ![Prism Launcher Install 1](/assets/images/launchers/prism/prism_installer_1.png)
2. You can choose where to install the application, however, installing in a non-default location tends to cause problems. We recommend just hitting install.
   ![Prism Launcher Install 2](/assets/images/launchers/prism/prism_installer_2.png)
3. Once this completes you can launch Prism by either searching for it on your computer or launching it from your Desktop.

### Basic Setup
To be able to use Prism you will need to do some basic setup and to do so you can follow the steps below. Please note that if you don't have [java installed](https://shadownode.net/home/guides/java-versions/) you will need to download it.

1. Once you launch Prism for the first time you'll see a screen like this. Click the language you speak and wish to have your launcher in. In this case we'll be using American English.
   ![Prism Launcher Setup 1](/assets/images/launchers/prism/prism_setup_1.png)
2. Next step is to make sure you have Java installed and to select Java. In the screenshot below Java isn't installed and you will need to install it and then click refresh. Once a suitable java is installed click the version you wish to use as the base version and click "Next"
   ![Prism Launcher Setup 3](/assets/images/launchers/prism/prism_setup_2.png)
3. In the top right corner you'll see a dropdown labeled "Accounts", click that and then "Manage Accounts".
   ![Prism Launcher Setup 3](/assets/images/launchers/prism/prism_setup_3.png)
4. On this screen you'll see a button in the top right that's labeled "Add Microsoft" click that and it'll prompt you to login to your Microsoft account on the web.
   ![Prism Launcher Setup 4](/assets/images/launchers/prism/prism_setup_4.png)
5. At this step click the "Open page and copy code" button. I highly recommend that you manually copy the code shown as well to ensure that you correctly paste it. Login to your Microsoft account and then paste the code. It will inform you that you can close the window when done.
   ![Prism Launcher Setup 5](/assets/images/launchers/prism/prism_setup_5.png)
6. If you've done everything right you should see something like this. Click the close button and then proceed to the next section to add a mod pack.
   ![Prism Launcher Setup 5](/assets/images/launchers/prism/prism_setup_6_1.png)

### Adding Mod Packs
To be able to play Minecraft with Prism you still need to add a mod pack to the launcher and use it. You will need to know the pack you're looking to use as well as it's version. You can find the version and our packs in the [#info-server-ips channel on our Discord](https://discord.shadownode.ca)

Once you've gotten *both* the pack and version number you'll need to add them using the launcher. In this example, we'll be adding Direwolf20 1.19 from FTB.
1. Click Add Instance at the top of the Main Window
   ![Prism Modpacks 1](/assets/images/launchers/prism/prism_modpack_1.png)
2. Once you do so, you'll have a new window popup and it'll show different Minecraft versions you can install. Choose CurseForge for any CurseForge packs and FTB For any FTB Packs. In the below example, we're installing DW20 1.19.
   ![Prism Modpacks 2](/assets/images/launchers/prism/prism_modpack_2.png)
3. Once you select your pack and click OK to install it you will likely get prompted to install more mods that have to be downloaded by a browser, luckily, Prism can automatically manage this for you. Click the "Open Missing" button and then let it open all the mods and download them. Once that's done and all mods are downloaded, click "Ok" to continue with the installation.
   ![Prism Modpacks 3](/assets/images/launchers/prism/prism_modpack_3.png)
4. When the modpack has finished downloading you'll see a screen similar to this. Wait till the progress bar completes and you get access to the main window again Double-click the game's icon and your game should launch. If it doesn't you might need to edit your Java version for the pack. You can find the [correct version of Java](https://shadownode.net/home/guides/java-versions/) here.
   ![Prism Modpacks 4](/assets/images/launchers/prism/prism_modpack_4.png)

### Updating Modpacks
Prism doesn't have a pack update mechanism at this time. To update simply follow the steps above and create a new instance with the updated pack version.

### Updating Per-Instance Settings
In the example below we'll be updating the memory for a pack instance, however, you can also update your Java Version as well as add Java Arguments to make the pack run more efficiently.
1. By default, Prism will use the amount of memory that you want to right-click on an instance and select "Edit" on the popup menu to be able to change this value.
   ![Prism Edit Pack Menu](/assets/images/launchers/prism/prism_editpack_step_1.png)
2. Click settings on the new window that opens. By default, it will show a log of the Minecraft instance from every time you have started it.
   ![Prism Edit Pack Screen](/assets/images/launchers/prism/prism_editpack_step_2.png)
3. The new screen that is shown is broken down into three parts.
   1. Change from the default Java version. You can find the [correct version of Java to use per Minecraft version here](https://shadownode.net/home/guides/java-versions/).
   2. Memory settings
   3. Java Arguments. You typically don't need to adjust this, however, you might want to check our [Modpack tips](https://shadownode.net/modpack-tips/) section to see if there are any suggested arguments for your pack.
      ![Prism Edit Pack Settings](/assets/images/launchers/prism/prism_editpack_step_3.png)
4. To edit the memory that you want to set aside for Minecraft/Java you need to click the check box next to the word "Memory" in section 2. When you do so you will see the following and be able to adjust it. Suggested values are below while leaving an extra 2-4GB for your system and other applications.
   * To allocate 6GB - 6144MB
   * To allocate 8GB - 8192MB
   * To allocate 10GB - 1024MB
     ![Prism Edit Pack Setting Memory](/assets/images/launchers/prism/prism_editpack_step_4.png)
5. Once you are done with any changes you'd like to make here click "Close" at the bottom of the window and you'll have them saved you can then launch your pack by double-clicking as usual.
