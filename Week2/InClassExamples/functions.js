//This is Javascript.

/*
Functions or Methods, Object, and how they work.


//Functions -- called by keyword function
			-- parentheses for taking arguments such as other variables or functions / They can also have no arguments at all.
*********
*/


//This is a function that changes a variable
function changeVariableString () {
	var myVariable = "Your your animal has been change to: ";
	var randomAnimals =["Cat", "Mouse", "Dog"];

	for(var i = 0; i < randomAnimals.length; i++) {
		document.write(myVariable + randomAnimals[i]);
		document.write("<br>");
	}

	return myVariable;
}

//call the function here
changeVariableString();


//fields or variables
var counter = 1;
var newCount;
var numberOfClicks = 0;
var myVariable ="Your variable has been changed to: ";
var animals = ["Cat", "Mouse", "Dog"];

//write a function for the button's on click event
function clickButton() {
	//console.log("The button was clicked");

	//check for the number of clicks
	if(numberOfClicks < animals.length - 1) {
		numberOfClicks++;
	}
	else{
		numberOfClicks = 0;
	}

	console.log(numberOfClicks);
	//append the html document with new text
	document.getElementById("clicks").innerHTML = myVariable + animals[numberOfClicks];

}
