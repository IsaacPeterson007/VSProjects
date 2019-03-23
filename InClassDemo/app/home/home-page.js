/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

const HomeViewModel = require("./home-view-model");
const view = require("tns-core-modules/ui/core/view");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}
exports.onNavigatingTo = onNavigatingTo;

var count = 0;
function onTap(args){
    count++;
    const button = args.object;
    const label = view.getViewById(button.parent, 'label');
    if(label){
        label.text = `Thank you for touching me ${count} times`;
    }
}
exports.onTap = onTap;

function gotox(args){
    frame.topmost().navigate('path');
}
