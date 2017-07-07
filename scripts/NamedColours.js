var newWindow = new Array();
var k = 0;

function makeNewWindow(locName,winName,winHeight,winWidth) 
{
    var params;

    params = "resizable,scrollbars,status,height=" + winHeight + ",width=" + winWidth;
    newWindow[k] = window.open(locName,winName,params);
    k++;
}

function writeNamedTable()
{
  var j,i;
  var tableContent;

  tableContent = "<table>\n";
  
  for(i = 0; i < HTML_NamedColours.length; i++)
    {
      tableContent += ("<tr>\n");

      for(j = 0; j < 7; j++)
	{
	  tableContent += "\t<td style='color: " + colFnt[i] + "' bgcolor=\"" + HTML_NamedColours[i] + "\">";
	  tableContent += HTML_NamedColours[i];
	  tableContent += "</td>\n";
	  i++;
	}
      i--;
      tableContent += "</tr>\n";
    }

  tableContent += "</table>\n";

  return tableContent;
  
}


function writeNamedColours()
{
  if (newWindow[k-1].closed)
  {
    k--;
    makeNewWindow("","",768,1024);
  }
  newWindow[k-1].focus();
  var newContent = "<html>\n<head>\n<title>Named Colours</title>\n";
  newContent += "</head>\n";
  newContent += "<body bgcolor='white' onSubmit='return false'>\n<h1>Named Colours</h1>\n";

  newContent += writeNamedTable();

  newContent += "<p><input name='btn1' value='close window' type='button' onClick='window.close()'></p>\n";
  newContent += "</body>\n</html>\n";
  newWindow[k-1].document.write(newContent);
  newWindow[k-1].document.close();
}

function main_NamedColours()
{
  makeNewWindow("","",600,850);
  writeNamedColours();
}
