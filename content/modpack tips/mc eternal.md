---
title: MC Eternal
author: LethalMrM
---

{{% notice note %}}
This list is current as of the time of writing this but might not always be up-to-date. Take advice here with that knoweldge.
{{% /notice %}}

## Important Rules

Our MC Eternal server follows all global rules that are appliciable to all of our other servers. You can find our [global rules](/rules) on our wiki and at `/spawn`.

As an improtant note, do not build a 1 chunk bases or farms. ShadowNode staff will take action as required. Staff response will depend on the situation.

## Recommended Java Arguments
Eternal is a heavier pack and tends to use a lot of RAM and resources we have compiled a list of suggested arugments from the pack's Discord server and are adding them here for ease of use.

* 6.5GB -> 8GB of RAM allocated to Eternal 
  * Please use the following arguments `-XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:MaxNewSize=2000m -XX:+DisableExplicitGC -XX:SurvivorRatio=1 -XX:InitialSurvivorRatio=1 -XX:NewRatio=2`
* 9GB+ of RAM allocated to Eternal
  * Please use the following arguments `XX:MaxNewSize=1800m -XX:+DisableExplicitGC -XX:SurvivorRatio=1 -XX:InitialSurvivorRatio=1 -XX:NewRatio=2`

## Disable Agricraft Particles 
A lot of players use Agricraft as way to enchance the speed at which their crops grow. Typically a single Agricarft spinkler can be used to multiply the speed, however, the effect does stack. This can pose a problem as all the particles from this causes a considerable amount of client-side render time/lag. This means that you will need to disable the particles for optimal FPS and to not lag out while around some bases. Thankfully, doing so is simple.

To disable the particles simply follow these steps while in game.

  1. Press Escape
  2. Click Mod Options
  3. Type `Agricraft` in the search box.
  4. Click `Config`
  5. Look for `AgriCraft Client Settings` and click it. You might need to scroll down.
  6. Click the `Disable particles button` if it says "false" it should turn green and display "true"
  7. Click done and enjoy the disabled particles.

## Disable Dynamic Surroundings Fog
The impact of these changes will be most noticable in any situation there's visual fog on the server. While this typically impacts FPS more than anything else it has been shown to reduce crashing from Night Vision in a few cases. Please note that this currently doesn't solve Night Vision crashses and ShadowNode does not recommend using it.

To disable the fog effects and improve your FPS you can do so by the following steps while in game.

  1. Press Escape.
  2. Click Mod Options
  3. Type `Dynamic Surroundings`
  4. Click `Config`
  5. Click `Fog Options` - You might need to scroll down
  6. Turn all fog options here to `false`.
  7. Click done and you will have disabled fog on MC Eternal.


## Disable Autorefill with Inventory Tweaks
Inventory Tweaks has been known to cause visual glitches to what you have in your hand and is in your inventory as a whole. As a result you might wish to disable to avoid it. Should you have the visual glitch you can typically resync it with what is actually there by simply logging out or opening an inventory other than your characters. Some examples of non-character inventories are chests, ender chests, pouches, AE2 Terminals amoung others.

To disable it is fairly simple and can be done from within your inventory screen.

  1. Press `E` if you're not already within the inventory screen.
  2. In the top right section of this screen you will see a button with 3 horizontal dots. Click this and it will open a configuration screen.
  3. Within this configuration screen you will see an option on the right hand side at the top listed as `Auto-refill: On` you will need to click it once to make it change to `Auto-refill: Off`.
  4. Click Done and enjoy!

## Suggested Keybindings to Adjust

There's a number of keybinding conflicts within this pack so you might want to adjust some of them. Here's a list that you might wish to adjust in order to use the pack to it's best.

  * Simply Jetpacks
    * Hover
    * Enable/Disable Jetpack usage