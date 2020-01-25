scriptName = "simpleBase";
scriptVersion = 1.0;
scriptAuthor = "simpleBase - LiquidBounce Javascript API Base for begginers and not only";
    logtext = '';
    nameScript = '';
    settings = {defaults:{name:'simpleBaseScript',values:'',tag:'', animatedTag:false,description:'',category:'Fun'},name:'',values:'',tag:'',description:'',category:'',autoEnable:false};

    // minified libs (takes less space and works/should work faster than normal libs + not needed to import them), minified using https://javascript-minifier.com/
    //also contains often used declarations like EntityLiving/ItemFood etc
    function getScaledWidth() { return new ScaledResolution(mc).getScaledWidth() } function getScaledHeight() { return new ScaledResolution(mc).getScaledHeight() }; var System = Java.type('java.lang.System'); var NetworkInterface = Java.type('java.net.NetworkInterface'); var Timer = Java.type("java.util.Timer"); function setInterval(e, t) { var a = new Timer("setInterval", !0); return a.schedule(function () { e() }, t, t), a } function clearInterval(e) { e.cancel() } function setTimeout(e, t) { var a = new Timer("setTimeout", !0); return a.schedule(function () { e() }, t), a } function clearTimeout(e) { e.cancel() } Math.trunc = function (e) { return (e = +e) - e % 1 || (isFinite(e) && 0 !== e ? e < 0 ? -0 : 0 : e) }, Math.toRadians = function (e) { return e * Math.PI / 180 }, Math.toDegrees = function (e) { return 180 * e / Math.PI }; var URL = Java.type("java.net.URL"), BufferedReader = Java.type("java.io.BufferedReader"), InputStreamReader = Java.type("java.io.InputStreamReader"), DateTimeFormatter = Java.type("java.time.format.DateTimeFormatter"), LocalDateTime = Java.type("java.time.LocalDateTime"), GL11 = Java.type("org.lwjgl.opengl.GL11"), Display = Java.type("org.lwjgl.opengl.Display"), StringSelection = Java.type("java.awt.datatransfer.StringSelection"), ScaledResolution = Java.type("net.minecraft.client.gui.ScaledResolution"), Toolkit = Java.type("java.awt.Toolkit"), RenderManager = Java.type("net.minecraft.client.renderer.entity.RenderManager"), GlStateManager = Java.type("net.minecraft.client.renderer.GlStateManager"), Framebuffer = Java.type("net.minecraft.client.shader.Framebuffer"), EXTFramebufferObject = Java.type("org.lwjgl.opengl.EXTFramebufferObject"), EXTPackedDepthStencil = Java.type("org.lwjgl.opengl.EXTPackedDepthStencil"), OpenGlHelper = Java.type("net.minecraft.client.renderer.OpenGlHelper"), Tessellator = Java.type("net.minecraft.client.renderer.Tessellator"), ResourceLocation = Java.type("net.minecraft.util.ResourceLocation"), WorldRenderer = Java.type("net.minecraft.client.renderer.WorldRenderer"), TextureAtlasSprite = Java.type("net.minecraft.client.renderer.texture.TextureAtlasSprite"), Mouse = Java.type("org.lwjgl.input.Mouse"), Keyboard = Java.type("org.lwjgl.input.Keyboard"), Controllers = Java.type("org.lwjgl.input.Controllers"), Robot = Java.type("java.awt.Robot"), GuiChat = Java.type("net.minecraft.client.gui.GuiChat"), GuiNewChat = Java.type("net.minecraft.client.gui.GuiNewChat"), GuiIngameMenu = Java.type("net.minecraft.client.gui.GuiIngameMenu"), GuiButton = Java.type("net.minecraft.client.gui.GuiButton"), GuiMainMenu = Java.type("net.minecraft.client.gui.GuiMainMenu"), drawSelectionBoundingBox = Java.type("net.minecraft.client.renderer.RenderGlobal"), Entity = Java.type("net.minecraft.entity.Entity"), AxisAlignedBB = Java.type("net.minecraft.util.AxisAlignedBB"), C01PacketChatMessage = Java.type("net.minecraft.network.play.client.C01PacketChatMessage"), C0APacketAnimation = Java.type("net.minecraft.network.play.client.C0APacketAnimation"), C02PacketUseEntity = Java.type("net.minecraft.network.play.client.C02PacketUseEntity"), Action = Java.type("net.minecraft.network.play.client.C02PacketUseEntity.Action"), C04PacketPlayerPosition = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition"), C05PacketPlayerLook = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook"), C06PacketPlayerPosLook = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook"), C07PacketPlayerDigging = Java.type("net.minecraft.network.play.client.C07PacketPlayerDigging"), C08PacketPlayerBlockPlacement = Java.type("net.minecraft.network.play.client.C08PacketPlayerBlockPlacement"), S2DPacketOpenWindow = Java.type("net.minecraft.network.play.server.S2DPacketOpenWindow"), C0BPacketEntityAction = Java.type("net.minecraft.network.play.client.C0BPacketEntityAction"), Action2 = Java.type("net.minecraft.network.play.client.C0BPacketEntityAction.Action"), Swords = Java.type("net.minecraft.item.ItemSword"), Egg = Java.type("net.minecraft.item.ItemEgg"), Snowball = Java.type("net.minecraft.item.ItemSnowball"), FishRod = Java.type("net.minecraft.item.ItemFishingRod"), BlockPos = Java.type("net.minecraft.util.BlockPos"), EnumFacing = Java.type("net.minecraft.util.EnumFacing"), ItemFood = Java.type("net.minecraft.item.ItemFood"), Vec3 = Java.type("net.minecraft.util.Vec3"), Block = Java.type("net.minecraft.item.ItemBlock"), Blocks = Java.type("net.minecraft.item.ItemBlock"), Bucket = Java.type("net.minecraft.item.ItemBucket"), Pickaxes = Java.type("net.minecraft.item.ItemPickaxe"), EnderPearl = Java.type("net.minecraft.item.ItemEnderPearl"), Armor = Java.type("net.minecraft.item.ItemArmor"), Client = Java.type("net.minecraft.client.Minecraft"), C00PacketKeepAlive = Java.type("net.minecraft.network.play.client.C00PacketKeepAlive"), C01PacketPing = (C01PacketChatMessage = Java.type("net.minecraft.network.play.client.C01PacketChatMessage"), Java.type("net.minecraft.network.status.client.C01PacketPing")), C03PacketPlayer = (C02PacketUseEntity = Java.type("net.minecraft.network.play.client.C02PacketUseEntity"), Java.type("net.minecraft.network.play.client.C03PacketPlayer")), C09PacketHeldItemChange = (C04PacketPlayerPosition = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition"), C05PacketPlayerLook = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook"), C06PacketPlayerPosLook = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook"), C07PacketPlayerDigging = Java.type("net.minecraft.network.play.client.C07PacketPlayerDigging"), C08PacketPlayerBlockPlacement = Java.type("net.minecraft.network.play.client.C08PacketPlayerBlockPlacement"), Java.type("net.minecraft.network.play.client.C09PacketHeldItemChange")), C0CPacketInput = (C0APacketAnimation = Java.type("net.minecraft.network.play.client.C0APacketAnimation"), C0BPacketEntityAction = Java.type("net.minecraft.network.play.client.C0BPacketEntityAction"), Java.type("net.minecraft.network.play.client.C0CPacketInput")), C0DPacketCloseWindow = Java.type("net.minecraft.network.play.client.C0DPacketCloseWindow"), C0EPacketClickWindow = Java.type("net.minecraft.network.play.client.C0EPacketClickWindow"), C0FPacketConfirmTransaction = Java.type("net.minecraft.network.play.client.C0FPacketConfirmTransaction"), C10PacketCreativeInventoryAction = Java.type("net.minecraft.network.play.client.C10PacketCreativeInventoryAction"), C11PacketEnchantItem = Java.type("net.minecraft.network.play.client.C11PacketEnchantItem"), C12PacketUpdateSign = Java.type("net.minecraft.network.play.client.C12PacketUpdateSign"), C13PacketPlayerAbilities = Java.type("net.minecraft.network.play.client.C13PacketPlayerAbilities"), C14PacketTabComplete = Java.type("net.minecraft.network.play.client.C14PacketTabComplete"), C15PacketClientSettings = Java.type("net.minecraft.network.play.client.C15PacketClientSettings"), C16PacketClientStatus = Java.type("net.minecraft.network.play.client.C16PacketClientStatus"), C17PacketCustomPayload = Java.type("net.minecraft.network.play.client.C17PacketCustomPayload"), C18PacketSpectate = Java.type("net.minecraft.network.play.client.C18PacketSpectate"), C19PacketResourcePackStatus = Java.type("net.minecraft.network.play.client.C19PacketResourcePackStatus"), S26PacketMapChunkBulk = Java.type("net.minecraft.network.play.server.S26PacketMapChunkBulk"), S08PacketPlayerPosLook = (S2DPacketOpenWindow = Java.type("net.minecraft.network.play.server.S2DPacketOpenWindow"), Java.type("net.minecraft.network.play.server.S08PacketPlayerPosLook")), S12PacketEntityVelocity = Java.type("net.minecraft.network.play.server.S12PacketEntityVelocity"), S27PacketExplosion = Java.type("net.minecraft.network.play.server.S27PacketExplosion"), Air = (BlockPos = Java.type("net.minecraft.util.BlockPos"), Java.type("net.minecraft.block.BlockAir")), Material = Java.type("net.minecraft.block.material.Material"), EntityPlayerSP = Java.type("net.minecraft.client.entity.EntityPlayerSP"), ItemBow = (BlockPos = Java.type("net.minecraft.util.BlockPos"), Java.type("net.minecraft.item.ItemBow")), ItemSword = Java.type("net.minecraft.item.ItemSword"), ItemBlock = (Blocks = Java.type("net.minecraft.init.Blocks"), Java.type("net.minecraft.item.ItemBlock")), EntityCritFX = (ItemFood = Java.type("net.minecraft.item.ItemFood"), AxisAlignedBB = Java.type("net.minecraft.util.AxisAlignedBB"), Java.type("net.minecraft.client.particle.EntityCritFX")), Item = Java.type("net.minecraft.item.Item"), MathHelper = (Vec3 = Java.type("net.minecraft.util.Vec3"), Java.type("net.minecraft.util.MathHelper")), Random = Java.type("java.util.Random"), WaterBucket = Java.type("net.minecraft.item.ItemBucket"), EntityPlayer = Java.type("net.minecraft.entity.player.EntityPlayer"), EntityLiving = Java.type("net.minecraft.entity.EntityLivingBase"), EntityMob = Java.type("net.minecraft.entity.monster.EntityMob"), EntityAnimal = Java.type("net.minecraft.entity.passive.EntityAnimal"), EntityAgeable = Java.type("net.minecraft.entity.EntityAgeable");

    function createBoolean(text, state) {
        State = state;
        if (state !== true && state !== false) {
            logtext += ('\n\u00A78Error found when creating \u00A7eBOOLEAN \u00A78 problem happened with statement:' + text);
            State = false;
        }
        return value.createBoolean(text,State);
    };
    function createText(text, text2) {
        return value.createText(text.toString(),text2.toString());
    };
    function createInteger(text, default_value, minimal_value, maximal_value) {
        if ((!isFinite(default_value) || !isFinite(minimal_value) || !isFinite(maximal_value))) logtext += ('\n\u00A78Error found when creating \u00A7cINTEGER \u00A78 problem happened with integer:' + text);
        return value.createInteger(text, isFinite(default_value) ? default_value : 0, isFinite(minimal_value) ? minimal_value : 0, isFinite(maximal_value) ? maximal_value : 0);
    };
    function createFloat(text, default_value, minimal_value, maximal_value) {
        if ((!isFinite(default_value) || !isFinite(minimal_value) || !isFinite(maximal_value))) logtext += ('\n\u00A78Error found when creating \u00A7dFLOAT \u00A78 problem happened with float:' + text);
        return value.createFloat(text, isFinite(default_value) ? default_value : 0, isFinite(minimal_value) ? minimal_value : 0, isFinite(maximal_value) ? maximal_value : 0);
    };
    function createList(text, array, default_value) {
        if (Array.isArray(array) && array.indexOf(default_value) <= -1) logtext += ('\n\u00A78Error found when creating \u00A7dLIST \u00A78 problem happened with default_value:' + text);
        if (!Array.isArray(array)) logtext += ('\n\u00A78Error found when creating \u00A7dLIST \u00A78 problem happened with array:' + text);
        return value.createList(text, Array.isArray(array) ? array : [''], Array.isArray(array) ? default_value : '');
    };

    settings.values = [
        speedFloat = createFloat("Speed", 0.5, 0.1, 3.5),
        modeList = createList("FlyMode", ["motion", "motionteleport", "teleport"], "motion"), 
    ];
    settings.name = 'exampleFly';
    settings.tag = modeList.get();
    settings.description = 'Fly example using turtlBase';
    settings.category = 'Movement';
    settings.autoEnable = true;

    function Script() {
        this.addValues = function (values) { try {for (i in settings.values) { values.add(settings.values[i]) } } catch(errors){chat.print(errors)}};
        this.getName = function () { try {
            nameScript = settings.name;
            return settings.name;
            } catch (errors) {
                logtext += ('\n\u00A78Error found when creating \u00A7eSCRIPT NAME');
                nameScript = settings.defaults.name;
                return settings.defaults.name;
            }
            };
        this.getTag = function () {
                try {
                    tag = settings.tag != null && settings.tag != undefined ? settings.tag : "";
                    return tag;
                } catch (errors) {
                    logtext += ('\n\u00A78Error found when creating \u00A7eSCRIPT TAG');
                    return "";
                }
        };
        this.getDescription = function () {
            try {
            return settings.description;
            } catch (errors) {
                logtext += ('\n\u00A78Error found when creating \u00A7dSCRIPT DESCRIPTION');
                return "";
            }
        };
        this.getCategory = function () {
            possibleCategories = ["Combat","Movement","Player","Exploit","Fun"];
            for (var i in possibleCategories) {
                if (settings.category.toLowerCase() == possibleCategories[i].toLowerCase())
                    return possibleCategories[i];
            }
            logtext += ('\n\u00A78Error found in \u00A7dSCRIPT CATEGORY \u00A78 category given:\u00A7c ' + settings.category + ' \u00A78replaced with \u00A7a' + settings.defaults.category);
            for (var i in possibleCategories) {
                if (settings.defaults.category.toLowerCase() == possibleCategories[i].toLowerCase())
                    return settings.defaults.category;
            }
            logtext += ('\n\u00A78Error found in \u00A7bDEFAULTS: SCRIPT CATEGORY \u00A78 default category given:\u00A7c ' + settings.defaults.category + ' \u00A78replaced with \u00A7aFun');
                return 'Fun';
        };
        this.onMotion = function (event) { // executed 40times/second (40ticks/1second) - once per 0.025s (pre - 20ticks/s post - 20ticks/s), simply executed when you receive motion
            moveYaw = mc.thePlayer.rotationYaw;
            if (mc.thePlayer.moveForward != 0 && mc.thePlayer.moveStrafing == 0) {
                moveYaw += mc.thePlayer.moveForward > 0 ? 0 : 180;
            } else if (mc.thePlayer.moveForward != 0 && mc.thePlayer.moveStrafing != 0) {
                if (mc.thePlayer.moveForward > 0)
                    moveYaw += mc.thePlayer.moveStrafing > 0 ? -45 : 45;
                else
                    moveYaw -= mc.thePlayer.moveStrafing > 0 ? -45 : 45;

                moveYaw += mc.thePlayer.moveForward > 0 ? 0 : 180;
            } else if (mc.thePlayer.moveStrafing != 0 && mc.thePlayer.moveForward == 0) {
                moveYaw += mc.thePlayer.moveStrafing > 0 ? -90 : 90;
            }
                switch (modeList.get()) {
                    case "motion":
                        mc.thePlayer.motionX = -Math.sin(Math.toRadians(moveYaw)) * speedFloat.get();
                        mc.thePlayer.motionZ = Math.cos(Math.toRadians(moveYaw)) * speedFloat.get();
                        mc.thePlayer.motionY = mc.gameSettings.keyBindSneak.isKeyDown() ? -speedFloat.get() : mc.gameSettings.keyBindJump.isKeyDown() ? speedFloat.get() : 0;
                    break;
                    case "teleportmotion":
                        if (event.getEventState() == "POST") {
                            mc.thePlayer.motionX = -Math.sin(Math.toRadians(moveYaw)) * speedFloat.get();
                            mc.thePlayer.motionZ = Math.cos(Math.toRadians(moveYaw)) * speedFloat.get();
                            mc.thePlayer.motionY = mc.gameSettings.keyBindSneak.isKeyDown() ? -speedFloat.get() : mc.gameSettings.keyBindJump.isKeyDown() ? speedFloat.get() : 0;
                        } else {
                            mc.thePlayer.motionX = mc.thePlayer.motionY = mc.thePlayer.motionZ = 0;
                        }
                    break;
                    case "teleport":
                        mc.thePlayer.setPositionAndUpdate(mc.thePlayer.posX - Math.sin(Math.toRadians(moveYaw)) * speedFloat.get(), mc.thePlayer.posY + mc.gameSettings.keyBindSneak.isKeyDown() ? -speedFloat.get() : mc.gameSettings.keyBindJump.isKeyDown() ? speedFloat.get() : 0, mc.thePlayer.posZ + Math.cos(Math.toRadians(moveYaw)) * speedFloat.get());
                    break;
                }
        };
        this.onKey = function (event) { //executed when pressing any key
            var pressedKey = event.getKey(); // Get keyCodes here: (https://minecraft.gamepedia.com/Key_codes)
            var key = ['escape', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'enter', 'left_control', 'a', 's', 'd' , 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '`', 'left_shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'right_shift', 'numpad_*', 'left_alt', 'spacebar', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9' , 'f10', 'num_lock', 'scroll_lock', 'numpad_7', 'numpad_8', 'numpad_9', 'numpad_-', 'numpad_4', 'numpad_5', 'numpad_6', 'numpad_+', 'numpad_1', 'numpad_2', 'numpad_3', 'numpad_0', 'numpad_.', 'unknown', 'unknown', 'f11', 'f12']; // you can expand it using link up here
            var pressedKey_name = key[pressedKey - 1] != undefined ? key[pressedKey - 1] : "unsupported, you can expand it by changing key variable!";
            //chat.print(pressedKey_name); // Prints name of pressed key in chat
        };
    };

   function onLoad() { // executed when script is loaded
        autoEnable = settings.autoEnable == true ? true : settings.autoEnable == false ? false : false;
        moduleManager.getModule(nameScript).setState(autoEnable ? true : moduleManager.getModule(nameScript).getState());

        setTimeout(function(){
            chat.print('\u00A78- - - - - - - - - - - - - - - - - - ')
            chat.print(logtext == '' ? "\u00A78Script " + settings.name + " loaded \u00A7asuccesfully!" : logtext + '\n');
            chat.print('\u00A78- - - - - - - - - - - - - - - - - - ')
        },2500)
   };
    
   modules = [
       new Script()
   ];

function onEnable() {
    for (var i in modules) moduleManager.registerModule(modules[i]);
};

function onDisable() {
    for (var i in modules) moduleManager.unregisterModule(modules[i]);
};
