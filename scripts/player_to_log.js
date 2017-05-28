var write_to_log = function(player) {
    console.log(player.name + " is in " + player.location);
}

var player1 = { name : "Kandra", location : "The Pit of Doom" };
var player2 = { name : "Dax"   , location : "The Kitchen"     };
var player3 = { name : "Brin"  , location : "The Library"     };

write_to_log(player1);
write_to_log(player2);
write_to_log(player3);
//alert("done");
