---
title: Basic Commands
author: YourMCGeek
tags: ["area", "teleport", "banned", "island", "home", "tp", "msg", "ignore"]
---
## Basic Commands
| Argument  | Required  |
|:--------:	|:--------:	|
|    <>    	| Required 	|
|    []    	| Optional 	|

### Discord

In order to join discord, you need to run the command ``/discord`` in game, this will give you the invite link in your chat window.

___

### Home
*These commands are affecting by your rank. For example a normal member gets only 1 home. See [Ranks](../../server-info/ranks) for more info!*

``/sethome [name] [-o]`` Sets your home at a current location. Failure to specify a name will set the home under the name ``home``. Adding ``-o`` to the end of your command will override the location of the previous home (e.g ``/sethome home -o`` will make your new home at the location you're currently at).

``/home <name>`` Teleports your to the specified home. Failure to specify a home name will default to home.

``/delhome <name>`` Deletes the specific home. Failure to specify a name will result in command failure.

``/homes`` Lists all set homes. Clicking on a home will teleport you to that home. Any home marked in a red colour is unable to be teleported to, due to it being in an unsafe condition.

___

### Teleportation

``/tpa <name>`` Sends a request to teleport to the specified player. The player may respond to the request or ignore it.

``/tpyes`` Accepts the most recent teleport request you've received. You are also able to press ``Accept`` in the message to accept the teleport request.

``/tpno`` Denies the most recent teleport request you've received. You are also able to press ``Deny`` in the message to deny the teleport request.

``/tpahere <name>`` Sends a request to the specified player to teleport to your location. **Requires the rank of Shade or higher.**

``/tptoggle`` Toggles players being able to send you teleport requests. By default, all requests are enabled.

``/rtp`` Teleports you to a random location in the same dimension after a short delay. Locations may include deep in a cave or in the middle of the ocean. **Costs 100 in-game dollars to reduce spam.**

``/spawn`` Will teleport you to the servers spawn point.

___

### Chat

``/msg <name> <message>`` Sends your message privately to the specified user.

``/r <message>`` Replies with your message to the last person who messaged you.

``/gignore add <name>`` Ignores specified player's chat globally. We recommend doing this command in the lobbies as the specified user needs to have joined your server previously.

``/gignore remove <name>`` Stop ignoring chat from the player. We recommend running this in the lobbies.

``/gignore list`` Lists every player you have currently got ignored. We recommend running this in the lobbies.

``/channel <local|global>`` ``Global`` will send all your messages to the entire network, **This is default**. ``Local`` will send your messages to only your server. Users in other servers will not be able to see your chat, yet you will see theirs. *Discord is not effected by these commands.*

___

### Island/Cave Area

Any server that is a skyblock style or uses a predefined starting area will use this plugin to create your area. Along with the commands mentioned above, there are a few more commands for your island/cave.\
*Servers that fit into this category are servers like: Stoneblock, SkyFactory, Glacial Awakening.*

``/area create`` Creates an area and automatically sets the area spawn point. **This command wipes your inventory.**

``/area spawn [name] [-f]`` Teleports you to the specified users island. Leaving the name blank will teleport you to your area. If you accompany the command with the `-f` flag it will force you to your area's spawn point even if the server deems it unsafe!

``/area setspawn <-o>`` Changes the area spawn point location to where you are currently standing. *Make sure its not on slabs, as the plugin will see them as unsafe!*

``/area reset`` Wipes your area and starts your progress over fresh.

``/area info`` Provides information regarding the area you are currently in.

``/area list`` Provides a list of all the areas on the server.

``/area lock`` Locks down your area preventing any uninvited members from entering.

``/area unlock`` Unlocks your area, allowing all members of the server access to enter.

``/area expand`` Expands your area's claim. Default size is 256x256, max size is 400x400.

``/area setbiome <biome>`` Changes your area's biome.

``/area invite <name>`` Invites the player to build and play with you. They must set their own home in your area or use the ``/area spawn [name]`` command. **This does not remove a previous area which the user has created.**

``/area leave`` Removes your access to the area you are standing in, if you've been previously invited.

``/area kick <name>`` Revoke all permissions of the player in your area.

___

### Grief Prevention
*All these commands will work for subdivided claims as well*

``/claimsinfo`` Checks information of the claim such as trusted players or who owns the claim.

``/claimslist`` Displays a list of all your claims.

``/permissiontrust <name>`` Allows the user to trust others and run claim commands in the claim your are currently standing in.

``/trust <name>`` Allows the user to build in the claim you are currently standing in, access chests and other inventories.

``/containertrust <name>`` Allows the user to access chests, farm crops, tame/kill animals, the use of a bed, and the use of levers/buttons/pressure plates in the claim you are currently standing in.

``/accesstrust <name>`` Allows the user to access your bed and inventories like an anvil for the claim you're standing in.

``/untrust <name>`` Revokes all permissions for the user for the claim you're currently standing in.

``/untrustall <name>`` Revokes all permissions for the user in all your claims.

``/trustlist`` Displays a list of claims that you are trusted in.

``/abandonclaim`` Removes the claim you are currently standing in.

``/abandonallclaims`` Removes all your claims.

___

### Miscellaneous Commands

These are the commands that don't really fit into any section.

``/banneditems`` This command will list all the items that have been banned from being used/placed/crafted/broken ingame because of certain reasons.\
*To navigate through its pages follow the command below unless your on vanilla or infinity in which case the command is* ``/banneditems [-p number]``

``/page <next|prev|number>`` This command is used by a few plugins that send messages with multiple pages. For example if you run `/banneditems` it will most likely return you a message that at the bottom say `1/9`, this means it has 9 pages and you can rotate through those page using this command!\
**Note: On servers like infinity and vanilla this command does not exist!**

``/server <name>`` This command will put you on the server you specify. **Note: You still need that version/modpack** You can also run ``/name`` replacing name with the server name for the same effect!

``/portalplace`` Rebuilds the Ender Dragon summoning structure. Requires 43 blocks of obsidian in your inventory. 