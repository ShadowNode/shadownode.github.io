---
title: GDLauncher
author: LethalMrM
---

## About GDLauncher

GDLauncher is a Minecraft launcher. It can be used to launch vanilla Minecraft, custom modpacks, or regular modpacks. This launcher is one of our recommended options for installing modpacks and managing mods. GDLauncher works on all major platforms - Windows, Linux and macOS.

### How to Install

1. Head to [GDevs](https://gdevs.io) and select which software is most appropriate for you. Typically you want to click the "Download Now!" button.
2. Click the download link related to your OS and then save it to your Downloads folder for easy access.
3. Click the downloaded installer link and it will prompt you to install Java 8 and Java 16. This should be done automatically by the launcher with no intervention needed on your part. 
4. Next it should ask you to login to your Minecraft or Microsoft account. Please do so now.
5. After this process is done you should be greeted by a mostly blank window telling you no instance has been installed. See below for more details on adding mod packs.


### Adding a Modpack

1. Click the + button in GDLaunchers Main Window. 
![GDLauncher Main Window](/assets/images/gdlauncher/gdlauncher-main.png)
2. Click the type of instance you like. If you're looking to install general Minecraft you're looking for Vanilla otherwise you're likely looking for CurseForge or FTB. If you're using a FTB Pack please click the FTB Tab.
![GDLauncher Add Instance Step 1](/assets/images/gdlauncher/gdlauncher-instance-step-1.png)
3. Click the search box and type in the name of the pack that you're looking for. In the example below I've used OceanBlock.
![GDLauncher Add Instance Step 2](/assets/images/gdlauncher/gdlauncher-instance-step-2.png)
3. Hover over the modpacks name and you will see an option to download latest or Explore / Versions. Click the Explore / Versions Option.
![GDLauncher Add Instance Step 3](/assets/images/gdlauncher/gdlauncher-instance-step-3.png)
4. Now you will need to select your version of the modpack to begin the install. After this is done click Download.
![GDLauncher Add Instance Step 4](/assets/images/gdlauncher/gdlauncher-instance-step-4.png)
5. Give your modpack download / instance a name. Click the next arrow.
![GDLauncher Add Instance Step 5](/assets/images/gdlauncher/gdlauncher-instance-step-5.png)
6. Your modpack will now download. If you have issues with downloading Forge you might need to switch to the [beta channel](#enabling-the-beta-launcher).
7. Click "Play" after hovering over the modpacks name and it will launch the pack. Enjoy!
![GDLauncher Add Instance Step 7](/assets/images/gdlauncher/gdlauncher-instance-step-7.png)

### Managing Mods with GDLauncher

{{% notice warning %}}
Removing and adding mods can cause pack instablity. Please consult your launcher's documentation on backing up your instance prior to preforming any of the tips below.
{{% /notice %}}

Using GDLauncher is almost as easy as MultiMC but this will likely get even easier in the future. The current hardships is that you have to enable the beta channel for GDLauncher to get it work correctly at this time. Please follow the steps below if you'd like to manage your mods with GDLauncher.

1. Right Click on the modpack and select `Manage`.
![GDLauncher Edit Modpack](/assets/images/gdlauncher/gdlauncher-rightclick.png) 
2. Click `Mods`
![GDLauncher Mod Tab](/assets/images/gdlauncher/gdlauncher-manage-mods.png)
3. In the top right of the current window you'll see a search box. Type in the first part of the name of the mod you wish to remove. For example FTB Auxilium you would type in `FTB`.
![GDLauncher Filter Mods](/assets/images/gdlauncher/gdlauncher-filter-mods.png)
4. Click the toggle for the mod you'd like to disable. It should look like the below once you've completed this.
![GDLauncher Disabled Mod](/assets/images/gdlauncher/gdlauncher-disabled-mod.png)
5. Repeat Steps 3 and 4 for any mods you'd like to disable.
6. Click the X at the top of the window titled `Instance Manager`
7. Launch your modpack to play.

### Upgrading Modpacks

{{% notice warning%}}
Please backup your modpacks before upgrading incase something goes wrong. If your upgradse fails please create a new instance of the modpack.
{{% /notice %}}

1. CLick on your modpad and select "Manage"
![GDLauncher Rightclick Modpack](/assets/images/gdlauncher/gdlauncher-rightclick.png) 
2. In the Instance Manager window click "Mod Pack"
![GDLauncher Instance Overview](/assets/images/gdlauncher/gdlauncher-instance-overview.png)
3. Click the drop down menu in the middle of the window to select the version you're looking to upgrade to. Click switch version after you confirm you've selected the right version.
![GDLauncher Instance Modpack Version](/assets/images/gdlauncher/gdlauncher-instance-modpack.png)

### Backup Modpacks with GDLauncher

If you're wanting to modify the mods in your pack it's highly recommend you backup your instance first. This prevents you from having to do a completely clean reinstall.

1. Right click on your modpack and select "Duplicate"
![GDLauncher Rightclick Modpack](/assets/images/gdlauncher/gdlauncher-rightclick.png) 
2. Enter a name for the duplicated modpack and press the duplicate button.
![GDLauncher Duplicate Modpack](/assets/images/gdlauncher/gdlauncher-duplicate.png)

### Setting Java Arguments
Some packs have Java Arguments (args) that we recommend you the pack with. The other reasons you might want to change this is you have a set of arguments that you want to run or someone suggested a set of Java arguments. The below assumes you're setting it per instance.

1. Right Click on your instance and select "Manage"
![GDLauncher Rightclick Modpack](/assets/images/gdlauncher/gdlauncher-rightclick.png) 
2. On the "Overview" tab, click the toggle next to "Override Java Arguments" it should look like the below when done.
![GDLauncher Java Args](/assets/images/gdlauncher/gdlauncher-java-args.png)
3. Paste in your Java arguments into the text box that appeared. Click the "X" on the window to save.
4. Launch your modpack. If any mistakes have happened you can go back to the previous window and click the reset button.

![GDLauncher Duplicate Modpack](/assets/images/gdlauncher/gdlauncher-duplicate.png)

### Enabling the Beta Launcher

Sometimes Forge installations will fail when trying to download modpacks with GDLauncher. Luckily there's a way around this. You will need to enable the beta release of the launcher for this. To do so simply follow the steps below.

1. Click the settings icon at the top of the screen.
![Settings Menu](/assets/images/gdlauncher/gdlauncher-beta-1.png)
2. Change Release Channel to "Beta". Click the "X" button at the top when done.
![Changing Release Channel](/assets/images/gdlauncher/gdlauncher-beta-2.png)
3. You will now need to restart your GDLauncher and relaunch it. Once you've done so give it a few and you should be prompted to update to the newest release.
4. Update to the newer release and retry your pack install clean.
