---
Title: Advanced Claim Management
Author: LethalMrM
Contributors: Toxic_Goblin
tags: ["modded Minecraft commands", "Modded Minecraft", "Minecraft Network", "ShadowNode", "ShadowNode Modded", "Modded MC", "Modded MC Network",
"Grief Prevention tricks", "Grief Prevention Tips",  "GP Tips", "Claim Flags" ]
---
 
 
## Public Transit Within Claims
Viaducts and Waystones are a great and fun way to get around an expansive base while not forcing the use of homes and teleportation requests to other friends and basemates! That being said, typically you would need to give them full access to inventories such as your chests, crates, ME systems, etc. You can solve this by issuing some commands that will set "flags", these are extra settings that override the default behavior.
 
The question ultimately comes down to if you want to fully trust everyone that you want to have access to your Waystones, Viaducts, etc. or if you rather they have access exclusively to the Waystones, etc.
 
### How to grant access to Waystones
 
To fix this you simply need to run 4 commands within your claim(s) - This must be run in every single claim that you wish to use it within or they will not have permission to do so in other claims.
 
The following commands will need to be run one at a time and will allow you to have anyone who visits your claim to have access to use your Waystones, etc. but nothing else, they will not have access to build or access other items. As with other transportation items they will need to be run on all claims that you wish this to be enabled in.
 
`/cf interact-inventory waystones:waystone true` - This allows interactions of inventory *only* when the inventory is a waystone. In this case it’s looking for the mod waystones and the material waystone.

`/cf interact-inventory-click waystones:waystone true` - The same applies here, however, it’s applying to inventory clicking/usage.
 
`/cf interact-item-secondary waystones:waystone true` - This allows the item to be right-clicked when it is of the proper type. This means it will bring the waystones’ UI up.

`/cf interact-block-secondary waystones:waystone true`  - Same as directly above, but will allow you to interact with waystones in the sense of it being a block.

#### How to grant access to Viaducts
 
Viaducts are a bit different as well as they will require you to have the chunks loaded on both the entrance/exit. The commands will change from `waystones:waystone` to `thermaldynamics:duct_64`. This is changing the item/material’s ID to the correct one for Viaducts. You can find this out via some changes you can make within Walia or JEI.

To simply run the commands to enable it please issue the commands below.

`/cf interact-inventory thermaldynamics:duct_64 true`

`/cf interact-inventory-click thermaldynamics:duct_64 true`

`/cf interact-item-secondary thermaldynamics:duct_64 true`

`/cf interact-block-secondary thermaldynamics:duct_64 true`
