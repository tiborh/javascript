/* Get Programming with JavaScript
 * Listing 7.11
 * Displaying player information using objects
 */

var spacer = {
  blank: function () {
    return "";
  },

  newLine: function () {
    return "\n";
  },

  line: function (length, character) {
      var longString = "****************************************";
      longString += "----------------------------------------";
      longString += "========================================";
      longString += "++++++++++++++++++++++++++++++++++++++++";
      longString += "＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊";
      longString += "ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー";
      longString += "＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝";
      longString += "＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋";
      longString += "                                        ";

    length = Math.max(0, length);
    length = Math.min(40, length);
    return longString.substr(longString.indexOf(character), length);
  },
  
  wrap : function (text, length, character) {
    var padLength = length - text.length - 3;
    var wrapText = character + " " + text;      
    wrapText += spacer.line(padLength, " ");
    wrapText += character;
    return wrapText;
  },

  box: function (text, length, character) {
    var boxText = spacer.newLine();
    boxText += spacer.line(length, character) + spacer.newLine();
    boxText += spacer.wrap(text, length, character) + spacer.newLine(); 
    boxText += spacer.line(length, character) + spacer.newLine();
    return boxText;
  }
};

var getPlayerName = function (player) {
  return player.name;
};

var getPlayerHealth = function (player) {
  return player.name + "は" + player.health + "の健康イントを持っています。";
};

var getPlayerPlace = function (player) {
  return player.name + "は" + player.place + "にいます。";
};

var getPlayerItems = function (player) {
    retStr = player.name + "の品目：";
	if (player.items.length == 0) {
	    retStr += "<>";
	} else {
	    itemsLength = player.items.length;
	    // console.log("length:" + itemsLength);
	    for (it in player.items) {
		// console.log("it+1:" + (parseInt(it) + parseInt(1)));
		retStr += player.items[it];
		if (parseInt(it) + parseInt(1) < itemsLength)
		    retStr += ", ";
	    }
	}
    return(retStr);
}

var getPlayerInfo = function (player) {  
    var place = getPlayerPlace(player);
    var health = getPlayerHealth(player);
    var items = getPlayerItems(player);
    var longest = Math.max(place.length, health.length, items.length) + 4;

  var info = spacer.box(getPlayerName(player), longest, player.symbol);
    info += spacer.wrap(place, longest, player.symbol);
    info += spacer.newLine() + spacer.wrap(health, longest, player.symbol);
    info += spacer.newLine() + spacer.wrap(items, longest, player.symbol);
    info += spacer.newLine() + spacer.line(longest, player.symbol);
    info += spacer.newLine();

  return info;
};

players = [];

players[0] = {
    symbol : "＝",
    name   : "カンドラ",
    health : 50,
    place  : "命運の地下牢",
    items  : ["錆び付いた鍵","運命の剣","チーズ"]
};

players[1] = {
    symbol : "＋",
    name   : "シェルビリ",
    health : 60,
    place  : "台所",
    items  : []
};

for (it in players) {
    console.log(getPlayerInfo(players[it]));
}



/* Further Adventures
 *
 * 1) Add an items property to each player.
 *    items: "a rusty key, a piece of cheese"
 *
 * 2) Write a getPlayerItems function to return
 *    a string for a player's items.
 *
 * 3) Update the getPlayerInfo function so it
 *    also includes the items info.
 *    Take the items info string into account
 *    when working out the longest string.
 *
 */
