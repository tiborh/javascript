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

function changeCol(red,green,blue,targ) {
    var maxColVal = 3 * 255;
    var redComp   = parseInt(document.getElementById(red).value);
    var greenComp = parseInt(document.getElementById(green).value);
    var blueComp  = parseInt(document.getElementById(blue).value);
    var colSum = redComp + greenComp + blueComp;
    theCol = "#" + ("0" + redComp.toString(16)).slice(-2) + ("0" + greenComp.toString(16)).slice(-2) + ("0" + blueComp.toString(16)).slice(-2);
    console.log("the colour: " + theCol);
    document.getElementById(targ).innerHTML = theCol;
    document.getElementById(targ).style.backgroundColor = theCol;
    document.getElementById(targ).style.color = getContrastYIQ(theCol);
}

// source: https://24ways.org/2010/calculating-color-contrast
function getContrastYIQ(hexcolor){
    var r = parseInt(hexcolor.substr(1,2),16);
    var g = parseInt(hexcolor.substr(3,2),16);
    var b = parseInt(hexcolor.substr(5,2),16);
    console.log("basis for yiq analysis: " + r + "," + g + "," + b);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? 'black' : 'white';
}
