---
title: FTB Oceanblock
author: LethalMrM
tags: ["modded Minecraft commands", "Modded Minecraft", "Minecraft Network", "ShadowNode", "ShadowNode Modded", "Modded
MC", "Modded MC Network", 
"FTB", "Oceanblock", "FTB Oceanblock"]
---

## Important Rules

Our OceanBlock server follows all global rules that are applicable to all of our other servers. You can find our [global rules](/rules) on our wiki and at `/spawn`.

As an important note, do not build a 1 chunk bases or farms. ShadowNode staff will take action as required. Staff response will depend on the situation.

#### Getting Started

If you've never played on ShadowNode's OceanBlock server, the way you get started is to run `/is create`. Make sure you read the rules in spawn first.

## Known Issues

{{% notice note %}}
This list is current as of the time of writing this but might not always be up-to-date. Take advice here with that knoweldge.
{{% /notice %}}
Below is a current list of known issues with Ocean Block and work arounds (if any)

### Joining an Island Wipes Inventory and Progress

Currently, if you join a team or island after you're already started the game you will lose all of your currently unlocked quest progress as well as having everything in your inventory wiped.

While we cannot prevent the loss of quest progress when joining a team or creating an island we can help you keep your items. To do so simply have your friend trust you manually on the island. To do so they will need to type `/trust your_playername` and then allow you to place your stuff on their island. Once you have fully moved your items off your island and player's inventory you should be safe to join their team without losing items.

Pleae note that ShadowNode staff will not refund any items to a player who's inventory gets wiped by joining another team / island.

### Server Reboot Crashes Client

The most common client crash is upon a server reboot if you don't log out ahead of time. This crash is typically caused by a mod called `MineTogether`. You can easily remove the mod if you're using MultiMC you can do so with the following steps.

{{% notice warning %}}
Before attempting the steps below make sure that you have a backup of your instance! Failure to do so may result in you having to redownload your pack again.
{{% /notice %}}

#### MultiMC

Please follow the steps below when the game is not running.

1. Right Click on the instance and select `Edit Instance` from the menu that pops up.
2. On the left hand of the window you will see a list of icons and options. Click `Loader Mods`.
3. At the bottom of this new section there's a text box that is labeled filter type in `MineTogether`. You should then see only one mod listed. Uncheck the check box for this mod and click `Close`.
4. You should now be able to launch your pack without MineTogether and not have it crash on server reboot.

#### Manual (FTB App, GD Launcher)

Please follow these diretions for any launcher other than MultiMC please follow the following steps. While doing these steps ensure the game is not currently running.

1. Right click on the instance icon and select the option to open the instances folder. This can vary by app and version and is currently listed as "Open Folder" on GD Launcher.
2. Open in the new file browser window go to the following path `mods`, scroll down till you see a file named like the following `minetogether-1.16.5-x.x.x-forge.jar` and rename it to `minetogether-1.16.5-x.x.x-forge.jar.disabled`.
If you don't have file extensions enabled in Windows Explorer I highly recommend simply pressing CTRL+X and then going up to the instance folder and pasting the mod there with CTRL+V.
3. Relaunch your game.

## Fixed Issues

We're compiling a list of issues that have either been resolved by the pack's author or Shadownode staff here rather than simply removing them all together for histocial reasons.

* Crate Quests
* Draconic Chest is now craftable
