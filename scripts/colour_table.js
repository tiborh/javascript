var colChanger = function(srcID,trgID) {
    srcElem = document.getElementById(srcID);
    trgElem = document.getElementById(trgID);
    trgElem.innerHTML = srcElem.innerHTML;
    trgElem.style.color = srcElem.style.color;
    trgElem.style.backgroundColor = srcElem.style.backgroundColor;
}
