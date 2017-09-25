/*
    This is a basic script
 */

var counter = 1;

function countUp () {
    var newCount = counter++;
    document.getElementById("clicks").innerHTML = newCount;
}

document.write("I love javascript. It's the best");