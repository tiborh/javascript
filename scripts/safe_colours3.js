var targetHandler = function(theTargs,theCol,theForm) {
    // console.log(theTargs);
    // console.log(theCol);
    rgbCols = theCol.replace("rgb(","").replace(")","").replace(/ /g,"").split(",");
    // console.log(rgbCols);
    if (rgbCols.length > theTargs.length)
	console.log("Three targets are required.");
    else {
	var numElems = rgbCols.length
	for(var i = 0; i < numElems; ++i) {
	    document.getElementById(theTargs[i]).value = rgbCols[i];
	    document.getElementById(theTargs[i]).oninput();
	}
    }
    document.getElementById(theForm).oninput();
}

var toHex = function(dec, size = 2) {
    var zeroed = "00" + dec.toString(16);

    return zeroed.substr(zeroed.length-size);
}

// source: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces 
// document.getElementsByTagName("body")[0] is replaced by ById
var writeSafeColoursTable = function(tableTargID,colourTargIDs,colourForm)
{
    var j,r,g,b;
    var tableContent;

    r=g=b=0;

    theTarget = document.getElementById(tableTargID);
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    
    while(r<=0xff)
    {
	var tblRow = document.createElement("tr");
    	for(j=0;j<6;j++)
    	{
    	    var hexColStr = "#" + toHex(r) + toHex(g) + toHex(b);
	    var tblCell = document.createElement("td");

    	    var cellID = "cell" + hexColStr.substr(1,6);
	    tblCell.setAttribute("id",cellID);
	    
	    var cellTxt = document.createTextNode(hexColStr);
	    tblCell.appendChild(cellTxt);
    	     b+=0x33;
    	     if(b>0xff) {
    	 	b=0; g+=0x33;
    	     }
    	     if(g>0xff) {
    	 	g=0; r+=0x33;
    	     }
	    tblRow.appendChild(tblCell);
	    tblCell.style.background = hexColStr;
	    tblCell.style.color = getContrastColour(hexColStr);
	    tblCell.addEventListener("click",function(e) {
		console.log(e.target.style.backgroundColor);
		targetHandler(colourTargIDs,e.target.style.backgroundColor,colourForm);
	    })
    	}
	tblBody.appendChild(tblRow);
    }

    tbl.appendChild(tblBody);
    theTarget.appendChild(tbl);
    console.log("table has been added");
}
