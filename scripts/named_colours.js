// source: 
// https://stackoverflow.com/questions/1573053/javascript-function-to-convert-color-names-to-hex-codes
// 1. Create html element
// 2. Set the color
// 3. Get the rgb-code form the element which is just appended to the body 
//    (so it is rendered), filter numbers and convert each number to an integer.
// 4. Remove the html element we just created
// 5. Return the HEX code using zyklus code (see credits for more info)
function getHexColour(colorStr) {
    var a = document.createElement('div');
    a.style.color = colorStr;
    var colors = window.getComputedStyle( document.body.appendChild(a) ).color.match(/\d+/g).map(function(a){ return parseInt(a,10); });
    document.body.removeChild(a);
    return (colors.length >= 3) ? '#' + (((1 << 24) + (colors[0] << 16) + (colors[1] << 8) + colors[2]).toString(16).substr(1)) : false;
}

function getNamedColHash() {
    var theLength = htmlNamedColours.length;
    var theOutHash = new Array();
    for (var i = 0; i < theLength; ++i) {
	theOutHash[htmlNamedColours[i]] = getHexColour(htmlNamedColours[i]);
    }
    //console.log(theOutHash);
    //console.log(theOutHash["aliceblue"]);
    return(theOutHash);
}

function getArrayOfColHashes(colHash) {
    var outArray = new Array();
    var theKeys = Object.keys(colHash);
    var theLength = theKeys.length;
    for(var i = 0,z = 0; i < theLength; ++z) {
	var rowArray = new Array();
	for(var j = 0; j < 10; ++j,++i) {
	    if(i < theLength)
		rowArray[theKeys[i]] = colHash[theKeys[i]];
	    else
		rowArray["#0000" + i.toString(16)] = "#0000" + i.toString(16);
	}
	outArray[z] = rowArray;
    }
    return(outArray);
}

function printColArrHashes(colHash) {
    var theLength = colHash.length;
    for (var i = 0; i < theLength; ++i)
	for(var aKey in colHash[i])
	    console.log(aKey + " => " + colHash[i][aKey]);
}

function getRgbStr(hexStr) {
    var rgbArr = hex2rgb(hexStr);
    return("rgb(" + rgbArr[0] + "," + rgbArr[1] + "," + rgbArr[2] + ")");
}

function drawNamedColsTable(colArrHashes,targStr,colourTargIDs,colourFormID) {
    // theLength = Object.keys(colHash).length;
    // console.log(targStr);
    var theTarget = document.getElementById(targStr);
    // console.log(theTarget);
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var theArrLength = colArrHashes.length;
    for (var i = 0; i < theArrLength; ++i) {
	var tblRow = document.createElement("tr");
	for(var aKey in colArrHashes[i]) {
	    var tblCell = document.createElement("td");
	    var cellTxt = document.createTextNode(aKey);
	    tblCell.setAttribute("id",colArrHashes[i][aKey]);
	    tblCell.appendChild(cellTxt);
	    //console.log(i + ": " + aKey);
	    tblRow.appendChild(tblCell);
	    tblCell.style.background = aKey;
	    tblCell.style.color = getContrastColour(colArrHashes[i][aKey]);
	    tblCell.addEventListener("click",function(e) {
		console.log(e.target.id);
		targetHandler(colourTargIDs,getRgbStr(e.target.id),colourFormID);
	    })
	}
	tblBody.appendChild(tblRow);
    }
    tbl.appendChild(tblBody);
    theTarget.appendChild(tbl);
}
