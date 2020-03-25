---
title: Chunkloaders
author: YourMCGeek
contributors: Babymillie
---

## Chunk Loaders
Modded Chunk Loaders have been disabled on ShadowNode servers globally, therefore we have added a plugin known as Better Chunk  Loaders to achieve their purpose. There are two types of Chunk Loaders, Always On and Online Only. To view chunk borders, hit ``F3+g``

The most basic command in the plugin is ``/betterchunkloader``, or just ``/bcl`` for short. Executing this command will open an interface in the chat that the user may interact with. The interface will contain a list of active chunk loaders you currently own, along with some user-friendly icons. An example of the interface is below.
![Interface](../../../assets/images/bcl/bcl_interface.png)

### Always On vs Online Only
Always On is a chunk loader which is online 24/7 and will keep the chunk loaded. However, the chunk loader will stop loading the chunk after 3 days of activity. Once the owner returns, it will resume loading the chunk.The Online Only chunk loader will only load the chunk when the owner of the loader is online.

### Checking Your Balance
To check the number of chunks you may use/have used, you can click the ``Balance`` or run ``/bcl bal``. The interface will state the number of both Always Online and Online Only chunks that are currently active (used) and are available.
![Balance](../../../assets/images/bcl/bcl_balance.png)

### How to Create Chunk Loaders
From the main interface, you should click the ``Create`` icon or run ``/bcl create`` to begin the process of creating a Chunk Loader. An interface will open and should look like the following image.
![Create a Chunk Loader](../../../assets/images/bcl/bcl_create.png)

The interface will state the name of the chunk loader Owner. It will also give you the coordinates of the chunk that you are currently standing in. Please note that these coordinates are different than regular XYZ coordinates. To create an Always Online chunk loader or Online Only chunk loader, click their respective icons. You should be prompted with the following interface.
![Create a Chunk Loader](../../../assets/images/bcl/bcl_create2.png)

The ``Radius`` icons will determine the size of the chunk loader. You can only load as many chunks as your balance allows. Hovering over the icon will display how many chunks will be loaded with each radius upgrade.
![Radius](../../../assets/images/bcl/bcl_create3.png)

After you select your radius size, your chunk loader will be created. You will be shown a confirmation window which will display your name, loader id, and state. If you'd like to delete your loader and regain your chunk balance, click the ``Delete`` icon.
![Chunk Confirmation](../../../assets/images/bcl/bcl_created.png)

### How to View Active Chunk Loaders
Once you have Chunk Loaders active, running ``/bcl`` will contain some information regarding regarding your active chunk loaders. You can hover over the ``Chunk`` icon to view the coordinates of the chunk loader. Clicking ``View`` will pull up the same prompt that was displayed after you created your loader originally.
![BCL Balance](../../../assets/images/bcl/bcl_list.png)

### How to Read Chunk Coordinates
To view the coordinates of the chunk you are currently in, press ``F3``. You will see the typical statistics of your game, which should resemble the image below. The value in the red box is your chunk coordinates.
![Chunk Coordinates](../../../assets/images/bcl/bcl_chunkcoords.png)
