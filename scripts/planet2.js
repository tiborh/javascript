var p1 = {
    name:   "木星「もくせい」",	// Jupiter
    radius: "69911",
    area:   null,
    volume: null
};

calcSizes = function(p) {
    var p_out = {		// p_out = p would only alias p, w/o deep copy
	name:   p.name,
	radius: p.radius
    };				// see planet3.js for lack of this redundancy
    var pi = Math.PI;
    var r = p.radius;
    p_out.area = 4 * pi * r * r;
    p_out.volume = 4 * pi * Math.pow(r,3) / 3
    return(p_out);
}

print.props = function(p) {
    console.log("\n------------------------------");
    console.log("名前\n\t" + p.name);
    console.log("半径「はんけい」\n\t" + p.radius);
    console.log("面積「めんせき」\n\t" + p.area);
    console.log("体積「たいせき」\n\t" + p.volume);
    console.log("------------------------------\n");
}

print.props(p1);
p1 = calcSizes(p1);
print.props(p1);
