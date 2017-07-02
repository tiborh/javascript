var picCol = function(srcId,targIds) {
    var theCol = document.getElementById(srcId).value;
    var numOfTargs = targIds.length;
    console.log(theCol);
    for (var i = 0; i < numOfTargs; ++i) {
	document.getElementById(targIds[i]).style.color = theCol;
    }
    document.body.style.backgroundColor = getContrastColour(theCol);
}
