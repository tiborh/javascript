var theChkButts = ["red","green","blue"];

function chkColSel(targObj) {
    var theLength = theChkButts.length;
    var theCol = "#";
    for(var i = 0; i < theLength; ++i) {
	console.log("Examining: " + theChkButts[i]);
	if (document.getElementById(theChkButts[i]).checked == true)
	    theCol += "FF";
	else
	    theCol += "00";
    }
    if (document.getElementById("fore").checked == true)
	document.getElementById(targObj).style.color = theCol;
    else if (document.getElementById("back").checked == true)
	document.getElementById(targObj).style.backgroundColor = theCol;

}

function resetCol(targObj) {
    document.getElementById(targObj).style.backgroundColor = "lightgrey";
    document.getElementById(targObj).style.color = "black";
}
