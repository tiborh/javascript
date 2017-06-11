var helloFunc = function(theId,lang="en") {
    switch(lang) {
    case "en":
	document.getElementById(theId).innerHTML = "Hello World!";
	break;
    case "ja":
	document.getElementById(theId).innerHTML = "今日は！";
	break;
    default:
	document.getElementById(theId).innerHTML = "Unrecognised language.";
    }
}
