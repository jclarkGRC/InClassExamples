//This is Javascript.

/*
Functions or Methods, Object, and how they work.


//Functions -- called by keyword function
			-- parentheses for taking arguments such as other variables or functions / They can also have no arguments at all.
*********
*/

function changeVariableString (myVariable) {

	myVariable = "Your variable has been changed to: ";
	var strings = ["'Silly Goose'", "'Hello Kitty'", "'Pikachu FTW'"];
	var stringChoice = 0;

	for(i = 0; i < strings.length; i++) {
		document.write(myVariable + strings[i]);
		document.write("<br>");
	}

	return myVariable;
}

//call the function
var myVariable = changeVariableString("example String");




//fields or variables
var counter = 1;
var newCount;

var numberOfClicks = 0;
var myVariable = "Your variable has been changed to: ";
var strings = ["'Silly Goose'", "'Hello Kitty'", "'Pikachu FTW'"];

//method or function
function countUp() {
    newCount = counter++;
    document.getElementById("clicks").innerHTML = newCount;
}

//write function for the button's on click event
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

