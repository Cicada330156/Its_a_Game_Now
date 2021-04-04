gameDivOpen = "<div id=\"gameText\">"
gameDivClose = "</div>"
currentPage = 0;

pages = [
	{storyText:"", options:[{buttonText:"", nextPage:2}, {buttonText:"", nextPage:3}]}, //blank template (page 0)
	{storyText:"oh no, looks like there was an error. Please reload your browser window.", options:[]}, //error page (page 1)
	{},
	{},
	{},
	"<p>You snap back into reality, stumbling to keep your balance. You think to yourself \"That damn root\", and kick it. Johny turns back to look at you. It feels good to see him after three years living on another world. <br><br> Waaaait a minute. Johny wasn't going to travel back for another year, and you hadn't stepped foot of Terrone in your life. And roots? There shouldn't be gnarled roots like this - or any at all, for that matter - in <em>the dome</em>.<br><br>\"Come on, man\"<br><br>You look up to see Johny leaning against a tree and realize it's been a couple minutes since you stopped for that root.<br><br>\"We've got to get to the quarry by midday, remember?\"<br><br>You step over the root and start walking, and Johny pushes himself from the tree to fall into a step just in front of you. You don't remember exactly where the quarry is, or where you are for that matter, but you get yourself ready for what feels like it will be a long trek.</p><button onClick=\"goToPage(6);\">LETS'S GO!</button>", //welcome screen, add intro info here (page 5)
	//end of non-story pages
	
	//start of story pages
	{storyText:"time to go", options:[{buttonText:"just keep silent", nextPage:7}, {buttonText:"ask Johny WTF is up", nextPage:1}, {buttonText:"suck it up", nextPage:1}]}, //page 6
	{storyText:"time to go", options:[{buttonText:"KILL YOUR FRIEND!", nextPage:8}, {buttonText:"suck it up", nextPage:1}]}, //page 7
	{storyText:"", options:[{buttonText:"", nextPage:2}, {buttonText:"", nextPage:3}]} //page 8
]

function startGame() {
	document.getElementById("startButton").remove();
	document.body.innerHTML += gameDivOpen + pages[5] + gameDivClose;
}

function goToPage(page) {
	document.getElementById("gameText").remove();
	document.body.innerHTML += gameDivOpen + pages[page].storyText + gameDivClose + "<br>";
	for (i = 0; i < pages[page].options.length; i++) {
		document.getElementById("gameText").innerHTML += "<button onClick=\"goToPage(" + pages[page].options[i].nextPage + ")\">" + pages[page].options[i].buttonText + "</button>";
	}
	currentPage = page;
}