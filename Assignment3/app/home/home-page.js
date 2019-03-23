/*
Isaac Peterson
CMSC 4233
*/

var myKey = "e7a01146683d4e7090551d870902ad21";
var req = new Request( 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + myKey );

const HomeViewModel = require("./home-view-model");
const observableModule = require("tns-core-modules/data/observable");
const labelModule = require("tns-core-modules/ui/label");
const imageModule = require("tns-core-modules/ui/image");
const frameModule = require("tns-core-modules/ui/frame");


function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}
exports.onNavigatingTo = onNavigatingTo;

//When the page is loaded with will hit api and add labels and images to a stacklayout
function onPageLoaded(args){
    const page = args.object;
    const list = page.getViewById("newsList");
    const ob = new observableModule.Observable();

    fetch(req).then(responce => responce.json()).then(data => {
    
        var i;
        for(i = 0; i < data.articles.length; i++){

            //add label
            var label = new labelModule.Label();
            label.text = data.articles[i].title;
            label.className = "labelCSS txt";
            label.textWrap = true;
            label.addEventListener('tap', onImageTap, data.articles[i])
            list.addChild(label);

            //add image
            var imageUrl = data.articles[i].urlToImage;
            var image = new imageModule.Image();
            image.src = imageUrl;
            image.addEventListener('tap', onImageTap, data.articles[i])
            list.addChild(image);
        }
    })
    .catch(error => console.error(error));

    page.bindingContext = ob;
}
exports.onPageLoaded = onPageLoaded;


//When image is tapped
function onImageTap(args){
    //pass title, image, and context to newsPage
    var param={
        moduleName:'newsPage/newsPage-page',
        context:{   
            title: this.title,
            imageUrl: this.urlToImage,
            content: this.content
            }
    }
    frameModule.topmost().navigate(param);
}
exports.onImageTap = onImageTap;

//When settings button is tapped
function settingsBtn(args){
    frameModule.topmost().navigate('settings/settings-page');
}
exports.settingsBtn = settingsBtn;