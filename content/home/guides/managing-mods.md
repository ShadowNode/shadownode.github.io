---
title: Managing Mods
author: Fayettemat
---

## Managing Your Mods
Modded Minecraft is great and there's tons of mods you likely have in your modpacks you play every day and are unaware of. Infact, there's often a few bundled mods in packs that simply add bloat, don't provide any functionality to the end user and in the end are simply unnecessary to play the pack.


{{% notice warning %}}
Removing and Adding Mods can cause pack instablity. Please consult your launcher on documentation on backing up your instance prior to preforming any of the tips below.
{{% /notice %}}


### Managing Mods With MultiMC
Using [MultiMC](https://multimc.org/) is by far the easiest and simplest method for updating and managing your mods. 
Please follow the steps below when the game is not running.

1. Right Click on the ithis instance and select `Edit Instance` from the menu that pops up.
2. On the left hand of the window you will see a list of icons and options. Click `Loader Mods`.
3. At the bottom of this new section there's a text box that is labeled filter type in  the name of the mod you wish to disable. For example to disable FTB Auxiium you would type `FTB Auxilium`. You should then see only one mod listed. Uncheck the check box for this mod.
4. Repeat for any other mods you neeed to remove then click "Close" when done.

Below is an example of what the MultiMC Loader Mods section looks like for FTB Ocean Block.

![Loader Mods](../../../assets/images/multimc/multimc-loadermods.png) 

## Suggested Changes

### FTB Auxilium
All new FTB Packs seem to have this mod and we highly recommend you remove it because it sends computer and usage stats back to the FTB Team. 

### ReAuth
Currently Minecraft is looking to migrate accounts from Mojang logins to Microsoft Accounts. This means that if you migrate your account this plugin will no longer work. Luckily there's a new mod now called [OAuth](https://www.curseforge.com/minecraft/mc-mods/oauth) that you can use to retain the functionality of ReAuth if you choose to migrate early. Pleaes note that we currently don't recommend migrating as there may be issues with some packs. If you do choose to install OAuth you must disable ReAuth as a mod as they will conflict.