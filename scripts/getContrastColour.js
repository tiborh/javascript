// source: https://24ways.org/2010/calculating-color-contrast
function getYiq(colArr) {
    var yiq = ((colArr[0]*299)+(colArr[1]*587)+(colArr[2]*114))/1000;
    // console.log("yiq value: " + yiq);
    return (yiq >= 128) ? 'black' : 'white';
}

function getRgbContrastColour(rgbCol) {
    rgbcols = rgbCol.replace("rgb(","").replace(")","").replace(/ /g,"").split(",");
    return(getYiq(rgbcols));
}

function getContrastColour(hexcolor){
    var r = parseInt(hexcolor.substr(1,2),16);
    var g = parseInt(hexcolor.substr(3,2),16);
    var b = parseInt(hexcolor.substr(5,2),16);
    // console.log("basis for yiq analysis: " + r + "," + g + "," + b);
    return(getYiq([r,g,b]));
}
