// source: 
// https://stackoverflow.com/questions/1573053/javascript-function-to-convert-color-names-to-hex-codes
// 1. Create html element
// 2. Set the color
// 3. Get the rgb-code form the element which is just appended to the body 
//    (so it is rendered), filter numbers and convert each number to an integer.
// 4. Remove the html element we just created
// 5. Return the HEX code using zyklus code (see credits for more info)
function getHexColor(colorStr) {
    var a = document.createElement('div');
    a.style.color = colorStr;
    var colors = window.getComputedStyle( document.body.appendChild(a) ).color.match(/\d+/g).map(function(a){ return parseInt(a,10); });
    document.body.removeChild(a);
    return (colors.length >= 3) ? '#' + (((1 << 24) + (colors[0] << 16) + (colors[1] << 8) + colors[2]).toString(16).substr(1)) : false;
}

function getNamedColHash() {
    if (htmlNamedColours.length != fontCol.length)
	throw new Error("Colour names and font names mismatched length:" + htmlNamedColours.length + " vs " + fontCol.length);
    var theLength = fontCol.length;
    var theOutHash = new Array();
    for (var i = 0; i < theLength; ++i) {
	theOutHash[htmlNamedColours[i]] = fontCol[i];
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
		rowArray["#0000" + i.toString(16)] = "#ffffff";
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

function drawNamedColsTable(theHash,targStr) {
    //theLength = Object.keys(colHash).length;
    var theTarget = document.getElementById(targStr);
    var i = 0;
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    for(var aKey in theHash) {
	    var tblRow = document.createElement("tr");
	    var tblCell = document.createElement("td");
	    var cellTxt = document.createTextNode(aKey);
	    tblCell.setAttribute("id",aKey);
	    tblCell.appendChild(cellTxt);
	    //console.log(i + ": " + aKey);
	    tblRow.appendChild(tblCell);
	    tblCell.style.background = aKey;
	    tblCell.style.color = theHash[aKey];
	++i;
	if ( i % 10 == 0) {
	    //console.log("");
	    tblBody.appendChild(tblRow);
	    var tblRow = document.createElement("tr");
	}
    }
    for( ; i % 10 != 0; ++i)
	console.log(i + ": <filler>");
}
