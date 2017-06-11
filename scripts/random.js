function getRndInt(min, max) { // max inclusive
    console.log("min: " + min);
    console.log("max: " + max);
    retVal = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1) ) + parseInt(min);
    console.log("retVal: " + retVal);
    return retVal;
}
