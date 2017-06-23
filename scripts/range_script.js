
function changeCol(itemName,targetName,inclName) {
    theColour = document.getElementById(itemName).value;
    theRgbCol = "rgb(" + parseInt(theColour) + ",0,0)";
    console.log("the colour: " + theColour);
    document.getElementById(inclName).style.backgroundColor = theRgbCol; 
    document.getElementById(targetName).style.color = theRgbCol;
    document.getElementById(targetName).innerHTML = theColour;
}
