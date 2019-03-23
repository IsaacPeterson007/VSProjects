/*
Isaac Peterson
CMSC 4233
*/

const HomeViewModel = require("./settings-view-model");
const frameModule = require("tns-core-modules/ui/frame");
var application = require("tns-core-modules/application");
var utilityModule = require("utils/utils");

function onNavigatingTo(args) {
    const page = args.object;

    const darkBtn = page.getViewById("darkBtn");
    if(darkMode){
        darkBtn.text = "Enabled";
    }
    else{
        darkBtn.text = "Disabled";
    }

    const largeBtn = page.getViewById("largeBtn");
    if(largeTxt){
        largeBtn.text = "Enabled";
    }
    else{
        largeBtn.text = "Disabled";
    }


    page.bindingContext = new HomeViewModel();
}
exports.onNavigatingTo = onNavigatingTo;

//When back button is tapped
function backBtn(args){
    frameModule.topmost().navigate('home/home-page');
}
exports.backBtn = backBtn;

//When large text button is tapped
function largeTxtBtn(args) {
    if(largeTxt){
        if(darkMode){
            var text = args.object;
            text.text = "Disabled"
            largeTxt = false;
            application.setCssFileName("smallDark.css");
        }
        else{
            var text = args.object;
            text.text = "Disabled"
            largeTxt = false;
            application.setCssFileName("smallLight.css");
        }
    }
    else{
        if(darkMode){
            var text = args.object;
            text.text = "Enabled"
            largeTxt = true;
            application.setCssFileName("app.css");
        }
        else{
            var text = args.object;
            text.text = "Enabled"
            largeTxt = true;
            application.setCssFileName("largeLight.css");
        }
    }
    frameModule.topmost().navigate('settings/settings-page');
}
exports.largeTxtBtn = largeTxtBtn;

//When dark button is tapped
function darkModeBtn(args) {
    if(darkMode){
        if(largeTxt){
            var text = args.object;
            text.text = "Disabled"
            darkMode = false;
            application.setCssFileName("largeLight.css");
        }
        else{
            var text = args.object;
            text.text = "Disabled"
            darkMode = false;
            application.setCssFileName("smallLight.css");
        }
    }
    else{
        if(largeTxt){
            var text = args.object;
            text.text = "Enabled"
            darkMode = true;
            application.setCssFileName("app.css");
        }
        else{
            var text = args.object;
            text.text = "Enabled"
            darkMode = true;
            application.setCssFileName("smallDark.css");
        }
    }
    frameModule.topmost().navigate('settings/settings-page');
}
exports.darkModeBtn = darkModeBtn;

//Open a browser to give credit to news api
function openBrowser(args) {
    utilityModule.openUrl("https://newsapi.org");
}
exports.openBrowser = openBrowser;
