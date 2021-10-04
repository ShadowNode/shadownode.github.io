---
title: FTB Oceanblock Tips
author: Fayettemat
---

## Known Issues
{{% notice note %}}
This list is current as of the time of writing this but might not always be up-to-date. Take advice here with that knoweldge.
{{% /notice %}}
Below is a current list of known issues with Ocean Block and work arounds (if any)

### Crate Quest Wont Progress

There is no current work around and this is a mod bug. We're waiting on the ModDev and pack to update.

### Server Reboot Crashes Client

The most common client crash is upon a server reboot if you don't log out ahead of time. This crash is typically caused by a mod called `MineTogether`. You can easily remove the mod if you're using MultiMC you can do so with the following steps.

{{% notice warning %}}
Before attempting the steps below make sure that you have a backup of your instance!
{{% /notice %}}

#### MultiMC 

Please follow the steps below when the game is not running.

1. Right Click on the instance and select `Edit Instance` from the menu that pops up.
2. On the left hand of the window you will see a list of icons and options. Click `Loader Mods`.
3. At the bottom of this new section there's a text box that is labeled filter type in `MineTogether`. You should then see only one mod listed. Uncheck the check box for this mod and click `Close`.
4. You should now be able to launch your pack without MineTogether and not have it crash on server reboot.

##### Manual (FTB App, GD Launcher)
Please follow these diretions for any launcher other than MultiMC please follow the following steps. While doing these steps ensure the game is not currently running.

1. Right click on the instance icon and select the option to open the instances folder. This can vary by app and version and is currently listed as "Open Folder" on GD Launcher.
2. Open in the new file browser window go to the following path `mods`, scroll down till you see a file named like the following `minetogether-1.16.5-x.x.x-forge.jar` and rename it to `minetogether-1.16.5-x.x.x-forge.jar.disabled`.
If you don't have file extensions enabled in Windows Explorer I highly recommend simply pressing CTRL+X and then going up to the instance folder and pasting the mod there with CTRL+V.

3. Relaunch your game.