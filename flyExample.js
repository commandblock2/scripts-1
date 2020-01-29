script.import('turtlBase.js');
scriptName = 'anims';
scriptVersion = 1.0;
scriptAuthor = 'Author:Turtl, Ideas:CzechHek(main idea of recoding it + functions ideas + isHolding function), yorik100(function ideas)';

var Values = [
    bool = createBoolean("simple boolean", false), // (text, state)
    text = createText("simple text", "simple text 2"), // (text, text after :)
    int = createInteger("simple integer", 1, -10, 10.0), // (text, default value, minimal value, maximal value) [integer doesn't accept decimal places]
    float = createFloat("simple float", 0.5, -12.5, 25.0), // (text, defualt value, minimal value, maximal value) [float accepts decimal places]
    list = createList("simple list", ["option1", "option2", "option3"], "option2"), // (name, text, list(javascript array), default value)
];

var moduleName, moduleTag, script_description, moduleCategory;

function simpleScript() {
    this.getName = function () {
        moduleName = name('simpleScript');  // usage - name(text[var/string]) //name of a module "simpleScript"
        modulesStr.push(moduleName); // pushes moduleName to a modulesStr which fixes values error
        return moduleName;
    };
    this.getTag = function () {
        moduleTag = tag(list.get()); // usage - tag(text[var/string]) //this module uses list selected thing as tag
        return moduleTag;
    };
    this.getDescription = function () {
        script_description = description(moduleName + 'is a cool script!') //usage - description(text[var/string]); //sets description to "simpleScript is a cool script!"
        return script_description;
    };
    this.getCategory = function () {
        moduleCategory = category('player'); //usage - category(category[var/string]) //sets category to player
        return moduleCategory;
    };
    this.onEnable = function () {
        //swing item on enable idk why
        mc.thePlayer.swingItem();
    };
    this.addValues = function (values) {
        for (val in Values) { //simple for loop
            values.add(Values[val]);
        };
    };
    this.onUpdate = function () {
        //code for some fly
        if (isInputUpOrDown() == 1) //if holds space -> 1
            mc.thePlayer.motionY = 0.3365;
        else if (isInputUpOrDown() == -1) //if holds sneak -> -1
            mc.thePlayer.motionY == -0.3365;
        else mc.thePlayer.motionY = 0; //if holds none/all of them at the same time -> 0
        setSpeed(getSpeed(),true);
    }
};

var modules = [ //add scripts functions here
    new simpleScript(),
];
var modulesStr =  [ //add scripts names here

]

function onLoad() { // logs errors, if they are clear print in chat nothing, else print errors
    if (logs != '')
        chat.print(logs);
}

function onEnable() {
    for (r in modules) { //registers module
        moduleManager.registerModule(modules[r]);
    }
};

function onDisable() {
    for (d in modulesStr) { //disabling module before unregistering (fixes values bug)
        moduleManager.getModule(modulesStr[d]).state = false;
    }
    for (u in modules) { //unregistering module
        moduleManager.unregisterModule(modules[r]);
    }
};
