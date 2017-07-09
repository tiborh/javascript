function changeBarCol(theRange,theSpan,theIndex,outPut) {
    var rgbArray = [0,0,0];
    var theColour = document.getElementById(theRange).value;
    //var theString = document.getElementById(theRange).innerHTML;
    //console.log("the string: " + document.getElementById(theRange).innerHTML);
    var outVal = document.getElementById(outPut).value;
    rgbArray[theIndex] = theColour;
    var theRgbCol = "rgb(" + rgbArray[0] + "," + rgbArray[1] + "," + rgbArray[2] + ")";
    //console.log("Bar colour: " + theRgbCol);
    document.getElementById(theSpan).style.backgroundColor = theRgbCol;
    document.getElementById(outPut).innerHTML = theColour;
}

function changeRangeCol(colIDs,targ) {
    // console.log(colIDs);
    var maxColVal = 3 * 255;
    var redComp   = parseInt(document.getElementById(colIDs[0]).value);
    var greenComp = parseInt(document.getElementById(colIDs[1]).value);
    var blueComp  = parseInt(document.getElementById(colIDs[2]).value);
    var colSum = redComp + greenComp + blueComp;
    theCol = "#" + ("0" + redComp.toString(16)).slice(-2) + ("0" + greenComp.toString(16)).slice(-2) + ("0" + blueComp.toString(16)).slice(-2);
    // console.log("the colour: " + theCol);
    document.getElementById(targ).innerHTML = theCol;
    document.getElementById(targ).style.backgroundColor = theCol;
    document.getElementById(targ).style.color = getContrastColour(theCol);
}
