---
title: Recommended Java Args
author: LethalMrM
---

## About Java Args
Java Args are a way to direct java as a program on how to handle a Modpack on how to handle itself the best. We have a few recommended Java arguments for specific packs, however, they should work for any pack in general.

We always recommend having at least 1.5GB to 2GB of RAM left over for your computer to perform normal tasks outside of Minecraft to ensure that it doesn't cause crashes. Please keep in mind that most modern Modpacks recommend at least 2/3GB of allocated RAM, so we won't focus on anything below that. 

For instructions on how to set the Java args per launcher please see our [launchers section](/home/launchers/).

#### 2GB - 8GB of Ram Allocated
Please use the following arguments:

`-XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:MaxNewSize=2000m -XX:+DisableExplicitGC -XX:SurvivorRatio=1 -XX:InitialSurvivorRatio=1 -XX:NewRatio=2`

####  9GB of Ram Allocated
Please use the following arguments:

`XX:MaxNewSize=1800m -XX:+DisableExplicitGC -XX:SurvivorRatio=1 -XX:InitialSurvivorRatio=1 -XX:NewRatio=2`