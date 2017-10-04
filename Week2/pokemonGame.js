/*
This is a silly pokemon game developed by Joshua Clark to explain objects and functions 
to students at Green River College in IT207 FALL 2017
*/


//fields
//*******
var players = [];
var pokemon = [];

//objects
//*******

//Player object
var player1 = {
	name: "",
	pokemon: {
		name: "",
		attackPower: "",
		healthPoints: "",
	},
	numberOfWins: 0,
	currentScore: function calculateScore(numberOfWins)
	winner: false
}

var player2 = {
	name: "",
	pokemon: {
		name: "",
		attackPower: "",
		healthPoints: "",
	},
	numberOfWins: 0,
	currentScore: function calculateScore(numberOfWins)
	scores: [],
	winner: false
}



//Pokemon Object

//functions or methods


//function to calculate the players score
function calculateScore(numberOfWins){
	return numberOfWins * 5;
}


//function to go to battle page
function clickButton () {
	console.log("button was clicked");
	
	//check the number of clicks
	if(numberOfClicks < strings.length - 1){
	numberOfClicks++;
	}
	else{
		numberOfClicks = 0;
	}

	console.log(numberOfClicks);

	//how to append an html document with new text
	//document.getElementById("parentID").innerHTML+= "new content"
	//document.getElementById("buttonText").innerHTML = myVariable;
	document.getElementById("clicks").innerHTML = myVariable + strings[numberOfClicks];

	console.log(myVariable);
	

}