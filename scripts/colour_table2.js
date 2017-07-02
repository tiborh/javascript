var colChanger = function(srcID,theChangables=[]) {
    var srcElem = document.getElementById(srcID);
    var srcCol = srcElem.style.color;
    var theCol = getRgbContrastColour(srcCol);
    console.log("'" + srcElem.style.color + "'");
    document.body.style.backgroundColor = srcElem.style.backgroundColor;
    nuChangables = theChangables.length
    for (var i = 0; i < nuChangables; ++i) {
	if (srcCol.length == 0)
	    document.getElementById(theChangables[i]).style.color = "black";
	else
	    document.getElementById(theChangables[i]).style.color = theCol;
	
    }
}

var resize = function()
{
    var heights = window.innerHeight;
    document.getElementById("outmostBox").style.height = heights -50 + "px";
}

window.onresize = function() {
    resize();
};
