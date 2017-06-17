
function findMaxIndex(theList,theDestination) {
    document.getElementById(theDestination).innerHTML = document.getElementById(theList).length-1;
}

function daySelect(theBox,theList) {
    document.getElementById( theBox ).value = document.getElementById( theBox ).value.replace(/\s+/g,"");
    var theString = document.getElementById( theBox ).value;
    console.log("The input string: " + theString);
    var theIndices = theString.split(",");
    var indLen = theIndices.length;
    console.log("Num of indices: " + indLen)
    console.log(theIndices);
    var selections = document.getElementById( theList );
    var listLen = selections.length;
    console.log("Length of the list: " + listLen);
    for (var i = 0; i < listLen; ++i) {
	selections[i].selected = false;
    }
    for (var i = 0; i < indLen; ++i) {
	theElem = theIndices[i];
	if (theElem == "")
	    continue;
	theIndex = parseInt(theIndices[i]);
	console.log("type of theIndex: " + typeof(theIndex));
	if (isNaN(theIndex))
	    continue;
	if (theIndex < 0 || theIndex >= listLen)
	    continue;
	console.log("the index: " + i);
	console.log("the element: " + theIndex);
	if (theIndices[i] != "")
	    selections[theIndex].selected = true;
    }
    // document.getElementById(theList).selectedIndex = document.getElementById(theBox).value;
}
function numberSelect(theBox,theList) {
    var theSelection = document.getElementById( theList );
    var theLength = theSelection.length;
    var selections = [];
    console.log("The length: " + theLength);
    for (var i = 0, j = 0; i < theLength; ++i) {
	//console.log("Selected? (" + i + ") " + theSelection[i].selected);
	if (theSelection[i].selected) {
	    selections[j++] = i;
	}
    }
    console.log("selections: " + selections);
    document.getElementById(theBox).value = selections;
}

