var players = [];
var print_player_prop;
var print_player;

num_of_items = function(player) {
    return(player.items.length);
}

print_player_prop = function(player,prop) {
    switch(prop) {
    case "name":
	console.log("名前：\n\t" + player.name);
	break;
    case "health":
	console.log("健康（けんこう）：\n\t" + player.health);
	break;
    case "place":
	console.log("場所（ばしょ）：\n\t" + player.place);
	break;
    case "items":
	console.log("品目（しなめ）：");
	if (player.items.length == 0) {
	    console.log("\t<empty>");
	} else {
	    for (it in player.items) {
		console.log("\t" + player.items[it]);
	    }
	}
	break;
    default:
	console.log("unrecognised property:" + prop);
    }
};

get_player_prop = function(player,prop) {
    switch(prop) {
    case "name":
	return(player.name);
    case "health":
	return(player.health);
    case "place":
	return(player.place);
    case "items":
	return(player.items);
    default:
	console.log("Unrecognised property:" + prop);
	return(null);
    }
};


print_player = function(player) {
    console.log("");
    print_player_prop(player,"name");
    console.log("----------------------------");
    print_player_prop(player,"health");
    print_player_prop(player,"place");
    print_player_prop(player,"items");
    console.log("品目の数（しなめのかず）：\n\t"+num_of_items(player));
    console.log("----------------------------");
    console.log("");
};

// players array can be regarded as an array of objects (or associated arrays)
players[0] = {
    name   : "カンドラ",
    health : 50,
    place  : "命運の地下牢（めいうんのちかろう）",
    items  : ["錆び付いた鍵（さびついたかぎ）","運命の剣（うんめいのけん）","チーズ"]
};

players[1] = {
    name   : "シェリブル",
    health : 60,
    place  : "台所（だいどころ）",
    items  : []
};

for (it in players) {
    print_player(players[it]);
}
