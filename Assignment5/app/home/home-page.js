const app = require("tns-core-modules/application");
var appSettings = require("application-settings");
const HomeViewModel = require("./home-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
    console.log("drawer opened");
}

function reset(args) {
    appSettings.clear();
}
exports.reset = reset;
exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
