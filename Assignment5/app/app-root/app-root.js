const application = require("tns-core-modules/application");
const frameModule = require("tns-core-modules/ui/frame");
const imageModule = require("tns-core-modules/ui/image");

const AppRootViewModel = require("./app-root-view-model");

function onLoaded(args) {
    const drawerComponent = args.object;
    drawerComponent.bindingContext = new AppRootViewModel();
}

function onNavigationItemTap(args) {
    const component = args.object;
    const componentRoute = component.route;
    const componentTitle = component.title;
    const bindingContext = component.bindingContext;

    //ADD CHECK MARK AND X TO CHARACTER WHEN CLICKED
    if (component.getChildrenCount() < 3 && component.id != 0) {

        var image = new imageModule.Image();
        image.src = "~/images/checkmark.png";
        image.row = "0";
        image.col = "2";
        image.className = "check";
        image.id = 2;
        component.addChild(image);

        var x = new imageModule.Image();
        x.src = "~/images/x.png";
        x.row = "0";
        x.col = "3";
        x.className = "x";
        x.id = 3;
        component.addChild(x);
        x.addEventListener('tap', () => {

            //THIS IS THE BUG WHERE SOMETIMES THE X BUTTON DOSENT WORK
            try{
            component.removeChild(component.parent.getViewById(2));
            component.removeChild(component.parent.getViewById(3));
            }
            catch(err) {
                console.log(err);
            }
        });
        
    }

    bindingContext.set("selectedPage", componentTitle);

    frameModule.topmost().navigate({
        moduleName: componentRoute,
        transition: {
            name: "fade"
        }
    });

    const drawerComponent = application.getRootView();
    drawerComponent.closeDrawer();
}

exports.onLoaded = onLoaded;
exports.onNavigationItemTap = onNavigationItemTap;
