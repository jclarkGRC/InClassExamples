/*
This is a javascript file about loops by Joshua Clark
10/16/2017
 */

//loops and displays even or odd numbers up to the amount the user enters

function iterate (){
    //iterate from 0 - n and print out zero, even or odd depending on the number
    var n = prompt("Please enter a non negative number");

    //check if the number is a number and not negative
    while(!isNumeric(n) || n < 0) {
        n = prompt("Invalid input. Please enter a non-negative number");
    }

    //loop over the numbers 0 - n
    for(var i = 0; i <= n; i++){
        if(i === 0){
            document.write(i + ": zero <br>");
        }
        else if (i % 2 === 0){ //even
            document.write(i + ": even <br>");
        }
        else if (i % 2 === 1){ //odd
            document.write(i + ": odd <br>");
        }
    }

}

//function to check if is numeric value
function isNumeric(number) {
    return !isNaN(number);
}

iterate();