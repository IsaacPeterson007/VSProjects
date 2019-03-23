/*
Isaac Peterson
CMSC 4233
*/

const observableModule = require("tns-core-modules/data/observable");
const labelModule = require("tns-core-modules/ui/label");
const imageModule = require("tns-core-modules/ui/image");
const frameModule = require("tns-core-modules/ui/frame");

var title;
var imageUrl;
var content;

//When 
function onNavigatingTo(args) {
    const page = args.object;
    //page.bindingContext = new HomeViewModel();
    var gotData=page.navigationContext;

    //assign passed data to variables
    title = gotData.title;
    imageUrl = gotData.imageUrl;
    content = gotData.content;

}
exports.onNavigatingTo = onNavigatingTo;

function onPageLoaded(args){

    const page = args.object;
    const list = page.getViewById("newsPage");
    const ob = new observableModule.Observable();

    //add label
    var label = new labelModule.Label();
    label.text = title;
    label.className = "labelCSS txt";
    label.textWrap = true;
    list.addChild(label);

    //add image
    var imageSrc = imageUrl;
    var image = new imageModule.Image();
    image.src = imageSrc;
    list.addChild(image);

    //add label
    var contentlabel = new labelModule.Label();
    contentlabel.text = content;
    contentlabel.className = "labelCSS txt";
    contentlabel.textWrap = true;
    list.addChild(contentlabel);

    page.bindingContext = ob;
}
exports.onPageLoaded = onPageLoaded;

//When back button is tapped
function backBtn(args){
    frameModule.topmost().navigate('home/home-page');
}
exports.backBtn = backBtn;

