var backgrColChanger = function(srcID) {
    srcElem = document.getElementById(srcID);
    document.body.style.backgroundColor = srcElem.style.backgroundColor;
}

/* var toHex = function(dec) 
{
    hexChars= "0123456789abcdef";

    if (dec > 255)
    {
	return null;
    }

    var i = dec % 16;
    var j = (dec-i) /16;
    var result = hexChars.charAt(j);
    result += hexChars.charAt(i);

    return result;
} */

var toHex = function(dec, size = 2) {
    var zeroed = "00" + dec.toString(16);

    return zeroed.substr(zeroed.length-size);
}

// a better way: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
var writeSafeColoursTable = function()
{
    var j,r,g,b;
    var tableContent;

    r=g=b=0;

    tableContent = "<table>\n";
    
    while(r<=0xff)
    {
	tableContent += ("<tr>\n");
	for(j=0;j<6;j++)
	{
	    var hexColStr = "#" + toHex(r) + toHex(g) + toHex(b);
	    tableContent += "\t<td bgcolor=\"" + hexColStr + "\"";
	    // if (r+g+b<0xff)
	    // {
	    // 	tableContent += " style= \"color: white\"";
	    // }
	    var cellID = "cell" + hexColStr.substr(1,6);
	    tableContent += " id='" + cellID + "'";
	    tableContent += " style='color:" + getContrastColour(hexColStr) + "'";
	    tableContent += " onclick=\"backgrColChanger('" + cellID + "')\"";
	    tableContent += ">";
	    tableContent += hexColStr;
	    b+=0x33;
	    if(b>0xff)
	    {
		b=0;
		g+=0x33;
	    }
	    if(g>0xff)
	    {
		g=0;
		r+=0x33;
	    }
	    tableContent += "</td>\n";
	}
	tableContent += "</tr>\n";
    }

    tableContent += "</table>\n";
//    console.log(tableContent);

    document.write(tableContent);
}
