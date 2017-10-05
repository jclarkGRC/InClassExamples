/*
Joshua Clark

This is a leap year calculator

 */

//read in the parts of the birthdate
var month = prompt("Enter your birth month");
var day = prompt("Enter your birth day");
var year = prompt("Enter your birth year");

//verify whether this is a leap year
var divisibleBy4 = false;

if (year % 4 == 0) {
    divisibleBy4 = true;
}

if (divisibleBy4) {
    //this year will not be a leap year if divisible by 100, unless
    // also divisible by 400
    var divisibleBy100 = (year % 100 === 0);
    var divisibleBy400 = (year % 400 === 0);

    //not a leap year
    if (divisibleBy100 && !divisibleBy400) {
        document.write("Your birthday " + month + "/" + day + "/" + year +
            " is not a leap year.  The year is divisible by 100, but not 400"
        )
    }
    else {
        document.write("Your birthday " + month + "/" + day + "/" + year +
            " is a leap year.");
    }

}