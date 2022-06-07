---
title: Teaming Up
author: LethalMrM
tags: ["modded Minecraft commands", "Modded Minecraft", "Minecraft Network", "ShadowNode", "ShadowNode Modded", "Modded
MC", "Modded MC Network", "MC team play", "Minecraft Team play", "play with friends", "minecraft friends", "friends",
"minecraft"]
---

## Intro

Some players like to play together with others and work as a group. As a result, they want to sync what ever is possible to avoid doing double the work. Please keep in mind that our staff are not here to solve intergroup issues such a team member "stealing". 

### Area Commands

{{% notice note %}}
This applies to most Sky blocks style packs like FTB Skyfactory 3 and FTB StoneBlock 2. 
{{% /notice %}}

Follow these steps to invite someone to your **existing** area.

1. The person who **owns** the area must run the `/area invite <player>` command. As an example, to invite LethalMrM you would type `/area invite LethalMrM`.
2. The person who **is being added** to the area will need to click "YES" to accept when prompted to join the area.
3. The person who **is being added** can now access the area via `/area spawn [your-name]`. For example LethalMrM has joined RadicalJim's area and wants to go there. He would then run `/area spawn RadicalJim`.

### Island Commands

{{% notice note %}}
This applies to ATM6: To The Sky, and FTB OceanBlock
{{% /notice %}}

To join a team you must first not be in a team if you want to sync all quests. If you simply want to allow someone to build but not sync you can  use `/is trust <name>`.

To invite someone to your **existing** area follow the steps below.

1. The person who **owns** the island must run `/is invite [player]`.  As an example, to invite LethalMrM you would type `/is invite LethalMrM`.
2. The person who **is being added** to the island needs to run the command `/is join`.
3. The person who **is being added** needs to request a teleport from the person who **owns** the island. They can do so with `/tpa [island-owner]`.

### FTB Teams / Party

{{% notice note %}}
This applies to packs like Enigmatica 6: Expert and similar packs.
{{% /notice %}}

To join to team up you must first create a party then invite the person to the party. The party only has to be created once.
To invite someone to an existing party skip to step 2, otherwise, start at 1 to create the party. 

1. The person who's inviting to the party and syncing quests to other person needs to run the following command `/ftbteams party create party_name`.
2. The person who's inviting needs to type `/ftbteams party invite <invited_player>`. For example if I'm inviting Moody_420 I would type /ftbteams party invite Moody_420`.
3. The person who's being invited will then get a prompt in chat to join the party. Once they do so they will need to `/tpa <inviting player>`, who then needs to accept it.
4. Once they are invited they will need to use `/sethome <name>` to set a home there. The  person who invited the other should also be sure to `/trust` them in any claims.

### Sharing Grid Power

Extra Utilities 2 is in a lot of packs and that means there's plenty of features that use Grid Power (GP). A lot of times group members forget about this being per player and not per team. As a result **all players** in the group need to run `/xu_powersharing <player>` for **each player** in the team other than themselves. 