function changeBarCol(theRange,theSpan,theIndex,outPut) {
    var rgbArray = [0,0,0];
    var theColour = document.getElementById(theRange).value;
    //var theString = document.getElementById(theRange).innerHTML;
    console.log("the string: " + document.getElementById(theRange).innerHTML);
    var outVal = document.getElementById(outPut).value;
    rgbArray[theIndex] = theColour;
    var theRgbCol = "rgb(" + rgbArray[0] + "," + rgbArray[1] + "," + rgbArray[2] + ")";
    console.log("Bar colour: " + theRgbCol);
    document.getElementById(theSpan).style.backgroundColor = theRgbCol;
    document.getElementById(outPut).innerHTML += " " + theColour;
}

function changeCol(red,green,blue,targ) {
    var redComp   = parseInt(document.getElementById(red).value);
    var greenComp = parseInt(document.getElementById(green).value);
    var blueComp  = parseInt(document.getElementById(blue).value);
    theCol = "#" + redComp.toString(16) + greenComp.toString(16) + blueComp.toString(16);
    console.log("the colour: " + theCol);
    document.getElementById(targ).style.color = theCol;
    document.getElementById(targ).innerHTML = theCol;
}

