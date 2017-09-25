/*
    This is a basic script
 */

var x = 10;

var counter = 1;

function countUp () {
    var newCount = counter++;
    document.getElementById("clicks").innerHTML = newCount;
}

function countUpFrom10 () {
    var newCount = x++;

    document.getElementById("clicks").innerHTML = newCount;
}

document.write("I love javascript. It's the best");