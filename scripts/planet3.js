planetBasics = function(name,radius,rank) {
    return {
	name:   name,
	radius: radius,
	rank:   rank
    };
};

planetBuilder = function(name,radius,rank) {
    var p = planetBasics(name,radius,rank);
    p = calcSizes(p);
    return p;
};  

calcSizes = function(p) {
    var p_out = planetBasics(p.name,p.radius,p.rank);
    var pi = Math.PI;
    var r = p.radius;
    p_out.area = 4 * pi * r * r;
    p_out.volume = 4 * pi * Math.pow(r,3) / 3
    return(p_out);
}

printProps = function(p) {
    console.log("\n------------------------------");
    console.log("名前\n\t" + p.name);
    console.log("位「くらい」\n\t" + p.rank);
    console.log("半径「はんけい」\n\t" + p.radius);
    console.log("面積「めんせき」\n\t" + p.area);
    console.log("体積「たいせき」\n\t" + p.volume);
    console.log("------------------------------\n");
}

var p = [];
p[0] = planetBuilder("木星「もくせい」",     69911,1);
p[1] = planetBuilder("土星「どせい」",       58232,2);
p[2] = planetBuilder("天王星「てんおうせい」",25362,3);
p[3] = planetBuilder("海王星「かいおうせい」",24622,4);

printProps(p[0]);
printProps(p[1]);
printProps(p[2]);
printProps(p[3]);
console.log("最小限の位「さいしょうげん」:" + Math.min(p[0].rank,p[1].rank,p[2].rank,p[3].rank));
console.log("最大限の位「さいだいげん」:" + Math.max(p[0].rank,p[1].rank,p[2].rank,p[3].rank));
