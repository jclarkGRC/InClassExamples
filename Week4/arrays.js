/*
This is a javascript file about arrays by Joshua Clark

 */

var output = document.getElementById("output");  //grab the html element and variablize it

//creating arrays ****************
var numbers = [0,1,2,3,4,5];

//array with address, city, state, zip, unit number?
var mixedTypes = ["1000 1st ave", "tacoma", "wa", 98999, false];

//assign values to the array and retrieve them
var city = mixedTypes[1];
var zip = mixedTypes[3];

mixedTypes[3] = "98999-4000";

//variables for our object
var genre;
var title;
var platform;
var players;
var id;

var videoGame = {
    id: 0,
    genre: "action",
    title: "Call of Duty",
    platform: "Xbox",
    players: 4
}


//object constructor
function VideoGame (id, genre, title, platform, players) {
    this.id = id;
    this.genre = genre;
    this.title = title;
    this.platform = platform;
    this.players = players;
}


mixedTypes = ["1000 1st ave", "tacoma", "wa", 98999, false];


//looping over the array
for (var i = 0; i < mixedTypes.length; i++){
    output.innerHTML = mixedTypes[i] + "<br>"
}