var player;

print_player = function(player) {
    console.log("名前：" + player.name);   
    console.log("健康：" + player.health);    // （けんこう）
    console.log("場所：" + player.place);     // （ばしょ）
    console.log("品目：" + player.items);     // （しなめ）
    console.log("");
};

player = {
    name   : "Kandra",
    health : 50,
    place  : "The Dungeon of Doom",
    items  : ["rusty key","Sword of Destiny","cheese"]    
};

print_player(player);
