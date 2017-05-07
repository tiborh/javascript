var players = [];
var print_player_prop;
var print_player;

print_player_prop = function(player,prop) {
    switch(prop) {
    case "name":
	console.log("名前：\n\t" + player.name);
	break;
    case "health":
	console.log("健康（けんこう）：\n\t" + player.health);    // 
	break;
    case "place":
	console.log("場所（ばしょ）：\n\t" + player.place);     // 
	break;
    case "items":
	console.log("品目（しなめ）：");     // 
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

print_player = function(player) {
    console.log("");
    print_player_prop(player,"name");
    console.log("----------------------------");
    print_player_prop(player,"health");
    print_player_prop(player,"place");
    print_player_prop(player,"items");
    console.log("----------------------------");
    console.log("");
};

players[0] = {
    name   : "Kandra",
    health : 50,
    place  : "The Dungeon of Doom",
    items  : ["rusty key","Sword of Destiny","cheese"]    
};

players[1] = {
    name   : "Sherbyl",
    health : 60,
    place  : "台所（だいどころ）",
    items  : []
};

for (it in players) {
    print_player(players[it]);
}
