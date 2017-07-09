function checkColVal(colVal) {
    var minColVal = 0;
    var maxColVal = 255;
    if (colVal < minColVal)
	throw new Error("Too small number");
    if (colVal > maxColVal)
	throw new Error("Too large number");
}

function changeCol(theCols,targ) {
    console.log(theCols);
    var redComp   = parseInt(document.getElementById(theCols[0]).value);
    checkColVal(redComp);
    var greenComp = parseInt(document.getElementById(theCols[1]).value);
    checkColVal(greenComp);
    var blueComp  = parseInt(document.getElementById(theCols[2]).value);
    checkColVal(blueComp);
    var colSum = redComp + greenComp + blueComp;
    theCol = "#" + ("0" + redComp.toString(16)).slice(-2) + ("0" + greenComp.toString(16)).slice(-2) + ("0" + blueComp.toString(16)).slice(-2);
    console.log("the colour: " + theCol);
    document.getElementById(targ).innerHTML = theCol;
    document.getElementById(targ).style.backgroundColor = theCol;
    document.getElementById(targ).style.color = getContrastColour(theCol);
}
