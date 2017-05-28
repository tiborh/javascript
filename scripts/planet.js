var p1 = {
    name:   "木星「もくせい」",	// Jupiter
    radius: "69911"
};				// not an elegant solution. see planet2 for a less error-prone one

calcSizes = function(p) {
    var pi = Math.PI;
    var r = p.radius;
    p.area = 4 * pi * r * r;
    p.volume = 4 * pi * Math.pow(r,3) / 3
}

print.props = function(p) {
    console.log("\n------------------------------");
    console.log("名前\n\t" + p.name);
    console.log("半径「はんけい」\n\t" + p.radius);
    console.log("面積「めんせき」\n\t" + p.area);
    console.log("体積「たいせき」\n\t" + p.volume);
    console.log("------------------------------\n");
}

calcSizes(p1);
print.props(p1);
