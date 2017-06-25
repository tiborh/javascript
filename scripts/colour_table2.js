var colChanger = function(srcID) {
    srcElem = document.getElementById(srcID);
    document.body.style.backgroundColor = srcElem.style.backgroundColor;
}

var resize = function()
{
    var heights = window.innerHeight;
    document.getElementById("outmostBox").style.height = heights -50 + "px";
}

window.onresize = function() {
    resize();
};
