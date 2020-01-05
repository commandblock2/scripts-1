/* -------> imported libs <-------*/
function setInterval(func, milliseconds) {
    var timer = new Timer("setInterval", true);
    timer.schedule(function () {
        func();
    }, milliseconds, milliseconds); return timer;
}
function clearInterval(timer) { timer.cancel() }
function setTimeout(func, milliseconds) {
    var timer = new Timer("setTimeout", true);
    timer.schedule(function () {
        func();
    }, milliseconds); return timer;
}
function clearTimeout(timer) { timer.cancel() }

var Timer = Java.type("java.util.Timer");
var Mouse = Java.type("org.lwjgl.input.Mouse")
/* ------> version etc. <----------*/
var scriptName = "AntiAim";
var scriptVersion = 0.3;
var scriptAuthor = "Author: Turtl (Shiv3R/To Ja #8190)| Contributors: CzechHek (CzechHek#3391)";
/*    -------> anti-aim <-------      */
/* functions */

/* values */
var Yaw = value.createBoolean("Yaw", true);
var YawOffset = value.createInteger("Yaw Offset", 0, -180, 180);
var YawFromCrosshair = value.createBoolean("Yaw Offset From Crosshair", true);
var YawJitterMin = value.createFloat("Yaw Jitter Min Range", 0, -180, 180);
var YawJitterMax = value.createFloat("Yaw Jitter Max Range", "0", -180, 180);
var YawSpinSpeed = value.createInteger("Yaw Spin speed", 0, 0, 10);

var Pitch = value.createBoolean("Pitch", true);
var PitchOffset = value.createInteger("Pitch Offset", 0, -89, 89);
var PitchFromCrosshair = value.createBoolean("Pitch Offset From Crosshair", true);
var PitchJitterMin = value.createFloat("Pitch Jitter Min Range", 0, -89.9, 89.9);
var PitchJitterMax = value.createFloat("Pitch Jitter Max Range", 0, -89.9, 89.9);
var PitchPingPongSpeed = value.createInteger("Pitch Ping-Pong speed", 0, 0, 10);

var infClamping = value.createText("Pitch mode Fake-Zero don't work with Clamping Angles!\n", "");
var infClamping2 = value.createText("Clamping Movement prevents you from sprinting sideways/backwards\n", "");

var Clamp = value.createBoolean("Clamp Angles", true);
var ClampMovement = value.createBoolean("Clamp Movement", false);
var MaxAngleDelta = value.createFloat("Max Angle Delta", "45", "0.0", "180.0");

var DisplayAngles = value.createBoolean("Display Angles", true);

var YawMode = value.createList("Yaw Mode", ["Static", "Jitter", "Zero", "Backwards", "Spins"], "Jitter");
var PitchMode = value.createList("Pitch Mode", ["Static", "Jitter", "Zero", "Inverted", "Ping-Pong", "Fake-Zero"], "Jitter");

var InteractDelay = value.createInteger("Interact Delay", 1500, 1, 4500);

/* vars */
var tick = 0, interacting = false, dontloopthat = false, playerInRange = false;
var frameX = 0, frameY = 0;
var yaw = 0, pitch = 0, yawDelta = 0;
function AntiAim() {

    this.getName = function () {
        return "AntiAim";
    };

    this.getTag = function () {
        return "";
    };

    this.getDescription = function () {
        return "";
    };

    this.getCategory = function () {
        return "Fun";
    };

    this.addValues = function (values) {
        values.add(Yaw);
        values.add(YawOffset);
        values.add(YawFromCrosshair);
        values.add(YawJitterMin);
        values.add(YawJitterMax);
        values.add(YawSpinSpeed);

        values.add(Pitch);
        values.add(PitchOffset);
        values.add(PitchFromCrosshair);
        values.add(PitchJitterMin);
        values.add(PitchJitterMax);
        values.add(PitchPingPongSpeed);

        values.add(infClamping);
        values.add(infClamping2);

        values.add(Clamp);

        values.add(ClampMovement);
        values.add(MaxAngleDelta);

        values.add(YawMode);
        values.add(PitchMode);

        values.add(DisplayAngles);

        values.add(InteractDelay);
    };

    this.onPacket = function (event) {
        playerInRange = !moduleManager.getModule("Killaura").state ? false : playerInRange;

        if (interacting && !dontloopthat) {
            dontloopthat = true;
            setTimeout(function () { interacting = false; dontloopthat = false }, InteractDelay.get())
        }
        if ((playerInRange && moduleManager.getModule("Killaura").state) || moduleManager.getModule("Scaffold").state || Mouse.isButtonDown(0) || Mouse.isButtonDown(1) || interacting) {
            interacting = !interacting ? !interacting : interacting;
            playerInRange = playerInRange ? !playerInRange : playerInRange;
        } else {
            if (Yaw.get()) {
                yaw = YawFromCrosshair.get() ? mc.thePlayer.rotationYaw + YawOffset.get() : YawOffset.get();
                switch (YawMode.get()) {
                    case "Static":
                        break;
                    case "Zero":
                        yaw = 0;
                        break;
                    case "Jitter":
                        yaw += Math.random() * (YawJitterMax.get() - YawJitterMin.get()) + YawJitterMin.get();
                        break;
                    case "Backwards":
                        yaw += 180;
                        break;
                    case "Spins":
                        yaw += YawSpinSpeed.get() * tick;
                        break;
                }
            }
            if (Pitch.get()) {
                pitch = PitchFromCrosshair.get() ? mc.thePlayer.rotationPitch + PitchOffset.get() : PitchOffset.get();
                switch (PitchMode.get()) {
                    case "Static":

                        break;
                    case "Jitter":
                        pitch += Math.random() * (PitchJitterMax.get() - PitchJitterMin.get()) + PitchJitterMin.get();
                        break;
                    case "Zero":
                        pitch = 0;
                        break;
                    case "Inverted":
                        pitch = -pitch;
                        break;
                    case "Ping-Pong":
                        pitch += pitch > 0 ? pitch <= 90 ? PitchPingPongSpeed.get() * tick : -pitch - 1 : pitch < 0 ? pitch >= -90 ? -PitchPingPongSpeed.get() * tick : -pitch + 1 : 1;
                        break;
                    case "Fake-Zero":
                        pitch = 360;
                        break;
                }
            }
            if (Clamp.get()) pitch = Math.abs(pitch) > 90 ? pitch > 0 ? 90 : -90 : pitch;
            if (ClampMovement.get()) {
                if (Math.abs(yaw - mc.thePlayer.rotationYaw) > MaxAngleDelta.get() && mc.thePlayer.isSprinting()) {
                    mc.thePlayer.setSprinting(false);
                    mc.thePlayer.motionX *= 0.8;
                    mc.thePlayer.motionZ *= 0.8;
                }
            }
            event.getPacket().yaw = yaw;
            event.getPacket().pitch = pitch;
            mc.thePlayer.renderYawOffset = yaw;
            mc.thePlayer.rotationYawHead = yaw;
        }
    };

    this.onRender2D = function (event) {
        /* ---------------------> ANIMATION <---------------------------------------*/
        frameX += mc.thePlayer.ticksExisted % 2 == 0 && frameX <= 20 ? 1 : 0;
        frameY += mc.thePlayer.ticksExisted % 2 == 0 && frameY <= 30 ? 1 : 0;

        if (DisplayAngles.get()) {
            mc.fontRendererObj.drawStringWithShadow("■ Silent Yaw:" + yaw.toFixed(2), frameX / 2 + 2.5, frameY + 40, 0xFFBAFFAB);
            mc.fontRendererObj.drawStringWithShadow("■ Engine Yaw:" + mc.thePlayer.rotationYaw.toFixed(2), frameX + 90 + 2.5, frameY + 40, 0xFFFAFFAB);
            mc.fontRendererObj.drawStringWithShadow("■ Silent Pitch:" + pitch.toFixed(2), frameX / 2 + 2.5, frameY + 20, 0xFFBAFFAB);
            mc.fontRendererObj.drawStringWithShadow("■ Engine Pitch:" + mc.thePlayer.rotationPitch.toFixed(2), frameX + 90 + 2.5, frameY + 20, 0xFFFAFFAB);
            mc.fontRendererObj.drawStringWithShadow("■ Delta:" + yawDelta.toFixed(2), frameX / 2 + 2.5, frameY + 60, 0xFFBAFFFB);
        }

    };

    this.onMotion = function (event) {
        mc.thePlayer.rotationYaw += event.getEventState() == "PRE" ? 1E-4 : -1E-4;
        tick += event.getEventState() == "PRE" ? 1 : mc.thePlayer.ticksExisted % 360 == 0 ? -tick : 0;
        yawDelta = Math.abs(yaw - mc.thePlayer.rotationYaw);
        for (i in mc.theWorld.loadedEntityList) if (mc.theWorld.loadedEntityList[i] != mc.thePlayer && mc.thePlayer.getDistanceToEntity(mc.theWorld.loadedEntityList[i]) <= (moduleManager.getModule("Killaura").getValue("Range").get() + .5)) playerInRange = true;
    };
}

/* ----> nothing rn <----- */
function onLoad() {

};

/* -----> registering modules <---- */
var modules = [
    new AntiAim()
];

function onEnable() {
    for (var i in modules) moduleManager.registerModule(modules[i]);
};

function onDisable() {
    for (var i in modules) moduleManager.unregisterModule(modules[i]);
};

