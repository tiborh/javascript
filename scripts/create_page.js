'use strict';

function create_page() {
    var aTitle = "Page Title";
    var aHeading = "A Heading";
    var aPar = "A paragraph";

    var win = window.open("");
    var thePage = document.createElement("html");
    var theHead = document.createElement("head");
    var theTitle = document.createElement("title");
    var titleTxt = document.createTextNode(aTitle);

    theTitle.appendChild(titleTxt);
    theHead.appendChild(theTitle);
    thePage.appendChild(theHead);
    
    var theBody = document.createElement("body");
    var theHeading = document.createElement("h1");
    var headTxt = document.createTextNode(aHeading);
    
    theHeading.appendChild(headTxt);
    theBody.appendChild(theHeading);
    
    var thePar = document.createElement("p");
    var parTxt = document.createTextNode(aPar);

    thePar.appendChild(parTxt);
    theBody.appendChild(thePar);
    thePage.appendChild(theBody);

    win.document.open();
    win.document.appendChild(thePage);
    win.document.close();
}
