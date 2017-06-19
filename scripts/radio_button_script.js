var theRadButts = ["red","green","blue"];

function radColSel(targObj) {
    var theLength = theRadButts.length;
    for(var i = 0; i < theLength; ++i) {
	console.log("Examining: " + theRadButts[i]);
	if (document.getElementById(theRadButts[i]).checked == true) {
	    document.getElementById(targObj).style.color = theRadButts[i];
	    break;
	}
    }
}

function resetCol(targObj) {
    document.getElementById(targObj).style.color = "black";
}
