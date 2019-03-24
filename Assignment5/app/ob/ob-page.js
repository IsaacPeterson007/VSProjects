const app = require("tns-core-modules/application");
var view = require("ui/core/view");
const HomeViewModel = require("./ob-view-model");
var stackModule = require("tns-core-modules/ui/layouts/stack-layout");
const frameModule = require("tns-core-modules/ui/frame");
const observableModule = require("tns-core-modules/data/observable");

var currSpeed;
var currMight;
var currSanity;
var currKnowledge;

// var speed;
// var might;
// var sanity;
// var knowledge;

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}
exports.onNavigatingTo = onNavigatingTo;

function onPageLoaded(args) {
    let view = args.object;
    
    let speed = view.getViewById("0");

    setSpeed(speed);
}
exports.onPageLoaded = onPageLoaded;

function onMightLoaded(args) {
    let view = args.object;

    let might = view.getViewById("1");
    setMight(might);
}
exports.onMightLoaded = onMightLoaded;

function onSanityLoaded(args) {
    let view = args.object;

    let sanity = view.getViewById("2");
    setSanity(sanity);
}
exports.onSanityLoaded = onSanityLoaded;

function onKnowledgeLoaded(args) {
    let view = args.object;

    let knowledge = view.getViewById("3");
    setKnowledge(knowledge);
}
exports.onKnowledgeLoaded = onKnowledgeLoaded;

function setSpeed(speed){
    var i;
    for (i = 0; i < 9; i++) {
        
        //SET SPEED MARKER
        if (currSpeed == null) {
            if (speed.getChildAt(i).className == "statNum default") {
                speed.getChildAt(i).className = "current default";
            }
        } else {
            if (speed.getChildAt(currSpeed).className == "statNum default"){
                speed.getChildAt(currSpeed).className = "current default";
            }
            else{
                speed.getChildAt(currSpeed).className = "current";
            }
        }
    }
}
exports.setSpeed = setSpeed;

function setMight(might){
    var i;
    for (i = 0; i < 9; i++) {
        
        // SET MIGHT MARKER
        if (currMight == null) {
            if (might.getChildAt(i).className == "statNum default") {
                might.getChildAt(i).className = "current default";
            }
        } else {
            if (might.getChildAt(currMight).className == "statNum default"){
                might.getChildAt(currMight).className = "current default";
            }
            else{
                might.getChildAt(currMight).className = "current";
            }
        }
    }
}
exports.setMight = setMight;

function setSanity(sanity){
    var i;
    for (i = 0; i < 9; i++) {
        
        //SET SPEED MARKER
        if (currSanity == null) {
            if (sanity.getChildAt(i).className == "statNum default") {
                sanity.getChildAt(i).className = "current default";
            }
        } else {
            if (sanity.getChildAt(currSanity).className == "statNum default"){
                sanity.getChildAt(currSanity).className = "current default";
            }
            else{
                sanity.getChildAt(currSanity).className = "current";
            }
        }

    }
}
exports.setSanity = setSanity;

function setKnowledge(knowledge){
    var i;
    for (i = 0; i < 9; i++) {
        
        //SET SPEED MARKER
        if (currKnowledge == null) {
            if (knowledge.getChildAt(i).className == "statNum default") {
                knowledge.getChildAt(i).className = "current default";
            }
        } else {
            if (knowledge.getChildAt(currKnowledge).className == "statNum default"){
                knowledge.getChildAt(currKnowledge).className = "current default";
            }
            else{
                knowledge.getChildAt(currKnowledge).className = "current";
            }
        }
    }
}
exports.setKnowledge = setKnowledge;

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}
exports.onDrawerButtonTap = onDrawerButtonTap;

function onTap(args) {
    var stat = args.object;
    let list = stat.parent;
    var i;

    //CLEAR ROW OF FORMATTING
    for (i = 0; i < list.getChildrenCount(); i++) {
        if (
            list.getChildAt(i).className == "statNum default" ||
            list.getChildAt(i).className == "current default"
        ) {
            list.getChildAt(i).className = "statNum default";
        } else {
            list.getChildAt(i).className = "statNum";
        }
    }

    //ASSIGN FORMATTING
    if (stat.className == "statNum default") stat.className = "current default";
    else {
        stat.className = "current";
    }

    if (list.id == 0) currSpeed = stat.id;
    if (list.id == 1) currMight = stat.id;
    if (list.id == 2) currSanity = stat.id;
    if (list.id == 3) currKnowledge = stat.id;
}
exports.onTap = onTap;




