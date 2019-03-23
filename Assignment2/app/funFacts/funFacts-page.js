/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

/*Isaac Peterson
    Assignment 2*/
    
const HomeViewModel = require("./funFacts-view-model");
const frameModule = require('ui/frame');
const getFrameById = require('tns-core-modules/ui/frame').getFrameById;
var view = require("ui/core/view");
var drawer;

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}

exports.onNavigatingTo = onNavigatingTo;

exports.pageLoaded = function(args) {
    var page = args.object;
    page.className = getFrameById("root-frame").className;
    drawer = view.getViewById(page, "sideDrawer");
}

function goHome(args){
    frameModule.topmost().navigate("home/home-page");
}
exports.goHome = goHome;

function goFunFacts(args){
    frameModule.topmost().navigate("funFacts/funFacts-page");
}
exports.goFunFacts = goFunFacts;

function goCustomize(args){
    frameModule.topmost().navigate("customize/customize-page");
}
exports.goCustomize = goCustomize;

function goDashboard(args){
    frameModule.topmost().navigate("dashboard/dashboard-page");
}
exports.goDashboard = goDashboard;