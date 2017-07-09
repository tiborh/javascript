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

function hex2rgb(hexCol) {
    var r = parseInt(hexCol.substr(1,2),16);
    var g = parseInt(hexCol.substr(3,2),16);
    var b = parseInt(hexCol.substr(5,2),16);
    return([r,g,b]);
}

function getContrastColour(hexcolour){
    rgb = hex2rgb(hexcolour);
    // console.log("basis for yiq analysis: " + r + "," + g + "," + b);
    return(getYiq([rgb[0],rgb[1],rgb[2]]));
}
