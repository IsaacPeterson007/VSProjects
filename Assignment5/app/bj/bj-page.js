const app = require("tns-core-modules/application");
var view = require("ui/core/view");
const HomeViewModel = require("./bj-view-model");
var stackModule = require("tns-core-modules/ui/layouts/stack-layout");
const frameModule = require("tns-core-modules/ui/frame");
const observableModule = require("tns-core-modules/data/observable");

var currSpeed;
var currMight;
var currSanity;
var currKnowledge;

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}

function onPageLoaded(args) {
    const page = args.object;
    var speed = page.getViewById("0");
    var might = page.getViewById("1");
    var sanity = page.getViewById("2");
    var knowledge = page.getViewById("3");

    var i;
    for(i = 0; i < 9; i++){
        if(currSpeed == null){
            if(speed.getChildAt(i).className == "statNum default"){
                speed.getChildAt(i).className = "current default";
            }
        }
        else{
            if(speed.getChildAt(currSpeed).className == "current default")
                speed.getChildAt(currSpeed).className = "current default";
            else{
                speed.getChildAt(currSpeed).className = "current";
            }
        }
        if(currMight == null){
            if(might.getChildAt(i).className == "statNum default"){
                might.getChildAt(i).className = "current default";
            }
        }
        else{
            if(speed.getChildAt(currSpeed).className == "current default")
                speed.getChildAt(currSpeed).className = "current default";
            else{
                speed.getChildAt(currSpeed).className = "current";
            }
        }
        if(currSanity == null){
            if(sanity.getChildAt(i).className == "statNum default"){
                sanity.getChildAt(i).className = "current default";
            }
        }
        else{
            if(speed.getChildAt(currSpeed).className == "current default")
                speed.getChildAt(currSpeed).className = "current default";
            else{
                speed.getChildAt(currSpeed).className = "current";
            }
        }
        if(currKnowledge == null){
            if(knowledge.getChildAt(i).className == "statNum default"){
                knowledge.getChildAt(i).className = "current default";
            }
        }
        else{
            if(speed.getChildAt(currSpeed).className == "current default")
                speed.getChildAt(currSpeed).className = "current default";
            else{
                speed.getChildAt(currSpeed).className = "current";
            }
        }   
    }

    console.log("page loaded");
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

function onTap(args) {
    var stat = args.object;
    let list = stat.parent;
    var i;
    for (i = 0; i < list.getChildrenCount(); i++) {
        if (list.getChildAt(i).className == "statNum default" || list.getChildAt(i).className == "current default")
            list.getChildAt(i).className = "statNum default";
        else {
            list.getChildAt(i).className = "statNum";
        }
    }
    if (stat.className == "statNum default")
        stat.className = "current default";
    else {
        stat.className = "current";
    }


}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
exports.onTap = onTap;
exports.onPageLoaded = onPageLoaded;
