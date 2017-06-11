function getRndInt(min, max, num) { // max inclusive
    var retVal = [];
    min = makeNum(min);
    max = makeNum(max);
    num = makeNum(num);
    console.log("min: " + min + " (" + typeof(min) + ")");
    console.log("max: " + max + " (" + typeof(max) + ")");
    console.log("num: " + num + " (" + typeof(num) + ")");
    for (var i = 0; i < num; ++i) {
	retVal[i] = Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    console.log("retVal: " + retVal);
    return retVal;
}

function makeNum(inPut) {
    if (typeof(inPut) != "number")
	return(parseInt(inPut));
    else
	return(inPut);
}
