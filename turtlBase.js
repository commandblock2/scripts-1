scriptName = "simpleBase";
scriptVersion = 1.0;
scriptAuthor = "simpleBase - LiquidBounce Javascript API Base for begginers and not only";
logtext = '';
nameScript = '';
moduleNames = [];
settings = { defaults: { name: 'simpleBaseScript', values: '', tag: '', animatedTag: false, description: '', category: 'Fun' }, name: '', values: '', tag: '', description: '', category: '', autoEnable: false };

// minified libs (takes less space and works/should work faster than normal libs + not needed to import them), minified using https://javascript-minifier.com/
//string funcs
String.prototype.includes = function (t, e) { "use strict"; return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e) };
//gl funcs
var GL11 = Java.type("org.lwjgl.opengl.GL11"); function drawRect(L, G, l, g, _) { var e = (_ >> 24 & 255) / 255, a = (_ >> 16 & 255) / 255, E = (_ >> 8 & 255) / 255, r = (255 & _) / 255; GL11.glEnable(GL11.GL_BLEND), GL11.glDisable(GL11.GL_TEXTURE_2D), GL11.glBlendFunc(GL11.GL_SRC_ALPHA, GL11.GL_ONE_MINUS_SRC_ALPHA), GL11.glEnable(GL11.GL_LINE_SMOOTH), GL11.glPushMatrix(), GL11.glColor4f(a, E, r, e), GL11.glBegin(GL11.GL_TRIANGLE_FAN), GL11.glVertex2d(l, G), GL11.glVertex2d(L, G), GL11.glVertex2d(L, g), GL11.glVertex2d(l, g), GL11.glEnd(), GL11.glPopMatrix(), GL11.glEnable(GL11.GL_TEXTURE_2D), GL11.glDisable(GL11.GL_BLEND), GL11.glDisable(GL11.GL_LINE_SMOOTH), GL11.glColor4f(1, 1, 1, 1) } function drawCircle(L, G, l, g) { var _ = (g >> 24 & 255) / 255, e = (g >> 16 & 255) / 255, a = (g >> 8 & 255) / 255, E = (255 & g) / 255; GL11.glColor4f(e, a, E, _), GL11.glEnable(GL11.GL_BLEND), GL11.glDisable(GL11.GL_TEXTURE_2D), GL11.glBlendFunc(GL11.GL_SRC_ALPHA, GL11.GL_ONE_MINUS_SRC_ALPHA), GL11.glEnable(GL11.GL_LINE_SMOOTH), GL11.glPushMatrix(), GL11.glLineWidth(1), GL11.glBegin(GL11.GL_POLYGON); for (var r = 0; r <= 360; r++)GL11.glVertex2d(L + Math.sin(r * Math.PI / 180) * l, G + Math.cos(r * Math.PI / 180) * l); GL11.glEnd(), GL11.glPopMatrix(), GL11.glEnable(GL11.GL_TEXTURE_2D), GL11.glDisable(GL11.GL_BLEND), GL11.glDisable(GL11.GL_LINE_SMOOTH), GL11.glColor4f(1, 1, 1, 1) };
//http funcs
function httpGet(e) { var t = new java.net.URL(e).openConnection(); return t.requestMethod = "GET", asResponse(t) } function httpPost(e, t, n) { n = n || "application/json"; var a = new java.net.URL(e).openConnection(); return a.requestMethod = "POST", a.setRequestProperty("Content-Type", n), a.doOutput = !0, write(a.outputStream, t), asResponse(a) } function asResponse(e) { return { data: read(e.inputStream), statusCode: e.responseCode } } function write(e, t) { var n = new java.io.DataOutputStream(e); n.writeBytes(t), n.flush(), n.close() } function read(e) { for (var t, n = new java.io.BufferedReader(new java.io.InputStreamReader(e)), a = new java.lang.StringBuffer; null != (t = n.readLine());)a.append(t); return n.close(), a.toString() };
//mc utils
var globalScope = this, KeyBinding = Java.type("net.minecraft.client.settings.KeyBinding"), EnumFacing = Java.type("net.minecraft.util.EnumFacing"), Vec3 = Java.type("net.minecraft.util.Vec3"), minecraftUtils = function () { var e = {}, n = function (n) { var t; return !("string" != typeof n || !e.hasOwnProperty(n)) && (t = e[n][1], globalScope.hasOwnProperty(n) && globalScope[n] instanceof KeyBinding && globalScope[n].setKeyCode(0), e[n][0].setKeyCode(t), delete e[n], KeyBinding.resetKeyBindingArrayAndHash(), !0) }; return { hookKeyBind: function (t, o) { var i; if (!(t instanceof KeyBinding) || "string" != typeof o) return !1; globalScope.hasOwnProperty(o) && globalScope[o] instanceof KeyBinding || (globalScope[o] = new KeyBinding("key.hook_" + o, 0, "key.categories.misc")), e.hasOwnProperty(o) && n(o); for (var r = Object.keys(e), a = 0; a < r.length; a++)if (e[r[a]][0] == t) { n(r[a]); break } return 0 == (i = t.getKeyCode()) && (i = t.getKeyCodeDefault()), t.setKeyCode(0), globalScope[o].setKeyCode(i), e[o] = [t, i], KeyBinding.resetKeyBindingArrayAndHash(), !0 }, unhookKeyBind: n, unhookAllKeyBinds: function () { for (var t = Object.keys(e), o = 0; o < t.length; o++)n(t[o]); return !0 } } }(); function hookKeyBind(e, n) { return minecraftUtils.hookKeyBind(e, n) } function unhookKeyBind(e) { return minecraftUtils.unhookKeyBind(e) } function unhookAllKeyBinds() { return minecraftUtils.unhookAllKeyBinds() } function getCenterOfBlockSide(e, n) { var t = new Vec3(e).addVector(.5, .5, .5), o = new Vec3(n.getDirectionVec()); return t.addVector(.5 * o.xCoord, .5 * o.yCoord, .5 * o.zCoord) } function isBlockInReach(e, n) { var t = mc.playerController.getBlockReachDistance() + .25, o = e.getPositionEyes(1), i = getCenterOfBlockSide(n, getClosestBlockSide(o, n)); return o.distanceTo(i) <= t } function getClosestBlockSide(e, n) { var t, o, i, r, a, c = null; for (a in EnumFacing.values()) o = getCenterOfBlockSide(n, t = EnumFacing.values()[a]), i = e.distanceTo(o), (null == c || i < c) && (c = i, r = t); return r };
//timing funcs
var Timer = Java.type("java.util.Timer"); function setInterval(e, n) { var t = new Timer("setInterval", !0); return t.schedule(function () { e() }, n, n), t } function clearInterval(e) { e.cancel() } function setTimeout(e, n) { var t = new Timer("setTimeout", !0); return t.schedule(function () { e() }, n), t } function clearTimeout(e) { e.cancel() };
//system funcs
var StringSelection = Java.type("java.awt.datatransfer.StringSelection"), ScaledResolution = Java.type("net.minecraft.client.gui.ScaledResolution"), Toolkit = Java.type("java.awt.Toolkit"); function copyToClipboard(t) { var e = new StringSelection(t); Toolkit.getDefaultToolkit().getSystemClipboard().setContents(e, null) } function getScaledWidth() { return new ScaledResolution(mc).getScaledWidth() } function getScaledHeight() { return new ScaledResolution(mc).getScaledHeight() };
//math funcs
Math.trunc = function (t) { return (t = +t) - t % 1 || (isFinite(t) && 0 !== t ? t < 0 ? -0 : 0 : t) }, Math.toRadians = function (t) { return t * Math.PI / 180 }, Math.toDegrees = function (t) { return 180 * t / Math.PI };

function createBoolean(text, state) {
    State = state;
    if (state !== true && state !== false) {
        logtext += ('\n\u00A78Error found when creating \u00A7eBOOLEAN \u00A78 problem happened with statement:' + text);
        State = false;
    }
    return value.createBoolean(text, State);
};
function createText(text, text2) {
    return value.createText(text.toString(), text2.toString());
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
    bool = createBoolean("simple boolean", false), // (text, state)
    text = createText("simple text", "simple text 2"), // (text, text after :)
    int = createInteger("simple integer", 1, -10, 10.0), // (text, default value, minimal value, maximal value) [integer doesn't accept decimal places]
    float = createFloat("simple float", 0.5, -12.5, 25.0), // (text, defualt value, minimal value, maximal value) [float accepts decimal places]
    list = createList("simple list", ["option1", "option2", "option3"], "option2"), // (name, text, list(javascript array), default value)
];
settings.name = 'script';
settings.tag = 'test';
settings.description = 'customized base!';
settings.category = 'Combat';
settings.autoEnable = true;

function Script() {
    this.addValues = function (values) { try { for (i in settings.values) { values.add(settings.values[i]) } } catch (errors) { chat.print(errors) } };
    this.getName = function () {
        try {
            nameScript = settings.name;
            moduleNames.push(nameScript);
            return settings.name;
        } catch (errors) {
            logtext += ('\n\u00A78Error found when creating \u00A7eSCRIPT NAME');
            nameScript = settings.defaults.name;
            moduleNames.push(nameScript);
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
        possibleCategories = ["Combat", "Movement", "Player", "Exploit", "Fun"];
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
    this.onEnable = function () { // executed on enabling module
    };
    this.onDisable = function () { // executed on disabling module

    };
    this.onUpdate = function () { // executed 20times/second (20ticks/1second) - once per 0.05s

    };
    this.onMotion = function (event) { // executed 40times/second (40ticks/1second) - once per 0.025s (pre - 20ticks/s post - 20ticks/s), simply executed when you receive motion
        if (event.getEventState() == "PRE") { //pre motion

        } else { //post motion

        }
    };
    this.onRender2D = function (event) { // used to render 2D things or things which need to be refreshed very frequently, refresh very frequently

    };
    this.onRender3D = function (event) { // used to render 3D things or things which need to be refreshed very frequently, refresh very frequently

    };
    this.onAttack = function (event) { //executed when you attack enemy

    };
    this.onJump = function (event) { //executed on your jump

    };
    this.onPacket = function (event) { //executed when handling packet

    };
    this.onKey = function (event) { //executed when pressing any key
        pressedKey = event.getKey(); // Get keyCodes here: (https://minecraft.gamepedia.com/Key_codes)
        key = ['escape', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'enter', 'left_control', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '`', 'left_shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'right_shift', 'numpad_*', 'left_alt', 'spacebar', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'num_lock', 'scroll_lock', 'numpad_7', 'numpad_8', 'numpad_9', 'numpad_-', 'numpad_4', 'numpad_5', 'numpad_6', 'numpad_+', 'numpad_1', 'numpad_2', 'numpad_3', 'numpad_0', 'numpad_.', 'unknown', 'unknown', 'f11', 'f12']; // you can expand it using link up here
        pressedKey_name = key[pressedKey - 1] != undefined ? key[pressedKey - 1] : "unsupported, you can expand it by changing key variable!";
        //chat.print(pressedKey_name); // Prints name of pressed key in chat
    };
    this.onMove = function (event) { //executed on your move

    };
};

function onLoad() { // executed when script is loaded
    autoEnable = settings.autoEnable == true ? true : settings.autoEnable == false ? false : false;
    moduleManager.getModule(nameScript).state = autoEnable ? true : moduleManager.getModule(nameScript).state;

    setTimeout(function () {
        chat.print('\u00A78- - - - - - - - - - - - - - - - - - ')
        chat.print(logtext == '' ? "\u00A78Script " + settings.name + " loaded \u00A7asuccesfully!" : logtext + '\n');
        chat.print('\u00A78- - - - - - - - - - - - - - - - - - ')
    }, 2500)
};

modules = [
    new Script()
];

function onEnable() {
    for (i in modules) moduleManager.registerModule(modules[i]);
};

function onDisable() {
    for (i in moduleNames) moduleManager.getModule(moduleNames[i]).state = false;
    for (i in modules) moduleManager.unregisterModule(modules[i]);
};
