string_to_code = function(inStr) {
    var outStr = "";
    for (i = 0; i < inStr.length; ++i)
	outStr += inStr.charCodeAt(i) + " ";
    outStr.trim();
    return outStr;
}

var s1 = "Jupiter is the 5th planet of the Solar System.";
console.log("as is:                " + s1);
console.log("upper:                " + s1.toUpperCase());
console.log("lower:                " + s1.toLowerCase());
console.log("length:               " + s1.length);
console.log("substr(from,length): |" + s1.substr(0,"Jupiter".length) + "|");
console.log("substring(from,to+1): " + s1.substring(s1.lastIndexOf("S"),s1.length-1));
console.log("slice(from,to+1):     " + s1.slice(8,10));
console.log("slice(from):          " + s1.slice(19));
console.log("slice(-from):         " + s1.slice(-1));
console.log("slice(-from,-(to+1)): " + s1.slice(-7,-1));
console.log("indexOf 5:            " + s1.indexOf("5"));
console.log("search 5:             " + s1.search("5")); // different only in regex
console.log("lastIndexOf S:        " + s1.lastIndexOf("S"));
console.log("replace(from,to):     " + s1.replace("Jupiter","木星"));
console.log("replace all:          " + s1.replace(/the/g,"ðe"));
console.log("replace case insens.  " + s1.replace(/JUPITER/i,"木星"));
console.log("concat(string pieces) " + s1.concat("one", "two", "three"));
console.log("charAt(s1.length/2):  " + s1.charAt(s1.length/2));
console.log("charCodeAt(length/2): " + s1.charCodeAt(s1.length/2));
console.log("s1 as code:           " + string_to_code(s1));
console.log("\"Apple\".split(\"\"):    " + "Apple".split(""));
