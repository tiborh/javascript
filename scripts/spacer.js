var spacer = {
    blank: function () {
	return "";
    },

    newLine: function () {
	return "\n";
    },

    line: function (length, character, lang = "en") {
	var longString = "****************************************";
	longString += "----------------------------------------";
	longString += "========================================";
	longString += "++++++++++++++++++++++++++++++++++++++++";
	longString += "                                        ";
	var jaLongString = "＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊";
	jaLongString += "ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー";
	jaLongString += "＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝";
	jaLongString += "＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋";
	
	length = Math.max(0, length);
	length = Math.min(40, length);
	if (lang == "en") {
	    return longString.substr(longString.indexOf(character), length);
	} else if (lang == "ja") {
	    return jaLongString.substr(longString.indexOf(character), length);
	}
    },
    
    wrap : function (text, length, character, lang = "en") {
	var a_space = " ";
	if (lang == "ja")
	    a_space = "   ";
	var padLength = length - text.length - 3;
	var wrapText = character + a_space + text;      
	wrapText += spacer.line(padLength, a_space);
	wrapText += character;
	return wrapText;
    },

    box: function (text, length, character, lang) {
	var boxText = spacer.newLine();
	boxText += spacer.line(length, character, lang) + spacer.newLine();
	boxText += spacer.wrap(text, length, character,lang) + spacer.newLine(); 
	boxText += spacer.line(length, character, lang) + spacer.newLine();
	return boxText;
    }
};

console.log(spacer.box("水星",7,"*","ja"));
console.log("length of 水星 is: " + "水星".length);
console.log(spacer.box("Mercury", 11, "*"));
console.log(spacer.box("火星",7,"=","ja"));
console.log(spacer.box("Mars", 11, "="));
