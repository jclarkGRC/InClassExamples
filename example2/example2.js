/*
    Joshua Clark
    9/27/17
    Practice with variables, comments, input, and output
 */

//Variables: How do we store values in a program?
//************************************************

//declare a variable
var animal;

//assign the variable
animal = "shark";
console.log(animal);

//reassign a variable
animal = "tiger"
console.log(animal);

//declare and assign a variable (number)
var favoriteNumber = 8

//declare multiple variables
var numberOfFeet, color, hasFur;

numberOfFeet = 4;
color = "brown";
hasFur = true;

//declare multiple variables and assign them
var favoritePet = "gigi", type = "cat", age = 3, fuzzy = true;

//Output: How do we send these to the browser?
//*********************************************

console.log(favoritePet); //this is going to log gigi to the console
console.log("My favorite pet is " + favoritePet);

//write the output to the current page contents
document.write("<p>");
document.write(favoritePet + " loves to play outside with other cats");
document.write("</p>");
document.write("<br>");
document.write(favoritePet + " is " + age);

//select an element on the page (by class, id, or tag)
var sachie = document.getElementById("sachie");

sachie.innerHTML = "Eats lots of food";

//popups are terrible
alert("Your computer is infected call 5555555")

//This is how we get input from our users
//*****************************************

//dialog boxes (read the value and write to the variable)
var howMuchFoodSachieGets = prompt("Hey, I want more food, how much can I have?");
console.log(howMuchFoodSachieGets);

//ask for users name and age and write to the document
var name = prompt("What is your name?");
var age = prompt("How old are you?");

document.write("Hello my name is " + name + " and I am " + age);

