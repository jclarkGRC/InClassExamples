/*
    This is a basic script
 */

//fields or variables
var counter = 1;
var newCount;

//method or function
function countUp() {
    newCount = counter++;
    document.getElementById("clicks").innerHTML = newCount;
}

//lets send some text to the html page
document.write("I love javascript. It's the best");