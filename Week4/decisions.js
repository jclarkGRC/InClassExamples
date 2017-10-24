/*
This is a javascript file to demonstrate the different ways you can make decisions in javascript by Joshua Clark
10/16/17
 */

//basic decisions

var currentMph = 110;
var carLane = "hov";
var rainy = false;
var speedLimit = 70;

//if its standard lane
if(carLane === "standard") {
    if(currentMph >= speedLimit){
        document.write("Slow down! <br>");
    }
}

//if it's the hov lane
else if (carLane === "hov") {
    if (currentMph < 65) {
        document.write("You're going too slow, get out of the HOV lane! <br>");
    }
    else if (currentMph > 70 && rainy) {
        document.write("Slow down! <br>");
    }
}

//switch statement

//colors example

var color = "red";

switch(rainy) {
    case true:
    document.write("It's raining, be sure to drive slow!");
    break;

    case false:
    document.write("Its nice and dry today! Enjoy the ride!");
    break;

}