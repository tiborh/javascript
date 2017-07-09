'use strict';
const MINCOLVAL = 0;
const MAXCOLVAL = 255;
const NUMOFCOLS = 3;

function checkColVal(colVal) {
    if (isNaN(colVal))
	throw new Error("Not a number");
    if (colVal < MINCOLVAL)
	throw new Error("Too small number");
    if (colVal > MAXCOLVAL)
	throw new Error("Too large number");
}

function changeCol(theCols,otherCols,targ,numBase=10,otherBase=16) {
    //console.log(theCols);
    var redComp   = parseInt(document.getElementById(theCols[0]).value,numBase);
    checkColVal(redComp);
    document.getElementById(otherCols[0]).value = redComp.toString(otherBase);
    var greenComp = parseInt(document.getElementById(theCols[1]).value,numBase);
    checkColVal(greenComp);
    document.getElementById(otherCols[1]).value = greenComp.toString(otherBase);
    var blueComp  = parseInt(document.getElementById(theCols[2]).value,numBase);
    checkColVal(blueComp);
    document.getElementById(otherCols[2]).value = blueComp.toString(otherBase);
    var colSum = redComp + greenComp + blueComp;
    var theCol = "#" + ("0" + redComp.toString(16)).slice(-2) + ("0" + greenComp.toString(16)).slice(-2) + ("0" + blueComp.toString(16)).slice(-2);
    console.log("the colour: " + theCol);
    document.getElementById(targ).innerHTML = theCol;
    document.getElementById(targ).style.backgroundColor = theCol;
    document.getElementById(targ).style.color = getContrastColour(theCol);
}

function setRgb(theCols,theForm,onWhat="change") {
    var rgbCols = getRndInts(MINCOLVAL,MAXCOLVAL,NUMOFCOLS);
    for(var i = 0; i < NUMOFCOLS; ++i)
	document.getElementById(theCols[i]).value = rgbCols[i];
    if (onWhat == "change")
	document.getElementById(theForm).onchange();
    else if (onWhat == "input")
	document.getElementById(theForm).oninput();
}
