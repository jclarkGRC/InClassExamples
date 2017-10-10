/*
Joshua Clark
Working with functions
10/9/2017
 */

console.log("This is working!");

//declaring and invoking functions

// function calculateDogYears () {
//     var dogYears = parseInt(prompt("Enter your dog's age."));
//
//     //first three years: 1 dog year == 10 human years
//     //afterwards: 1 dog year == 7 human years
//
//     var humanYears = 0;
//
//     if(dogYears <= 3) {
//         humanYears = dogYears * 10;
//     }else{
//         //we know we have at least 3 dog years
//         humanYears = 30;
//         dogYears-= 3;
//
//         humanYears += (dogYears * 7);
//     }
//
//     document.write("The dog is : " + humanYears + " years old");
// }
//
// calculateDogYears();

//return types

// function tripCalculator(minMph, maxMph, distance){
//     //return the number of hours you need to travel until
//     //you reach your destination, based on the average MPH
//
//     var average =(maxMph + minMph)/2;
//
//     return distance / average; //calculate the amount of hours
// }
//
// var hours = tripCalculator(30, 60, 100);
// document.write("Your trip will take " + hours.toFixed(1) + "Hours!");

//parameters
//
// function convertCurrency (dollars, currencyType){
//     if(currencyType === "euro"){
//         return dollars * 0.94;
//     }
//     else if (currencyType === "pound"){
//         return dollars * 0.80;
//     }
//     else if (currencyType === "peso"){
//         return dollars * 18.52;
//     }
//     else {
//         return -1;
//     }
// }
//
// var dollars = 3.50;
// var euros = convertCurrency(dollars,"euro");
// var pounds = convertCurrency(dollars,"pound");
// var pesos = convertCurrency(dollars,"peso");
//
// document.write("$3.50 == €" + euros );

//functions can be stored as variables

//sort 3 numbers

// var less = function (first, second) {
//     return first < second;
// }
//
// var greater = function (first, second) {
//     return first > second;
// }
//
// //sorts an array of numbers in either ascending or descending order
// function sort(elements, compare) {
//     var first = elements[0];
//     var second = elements[1];
//     var third = elements[2];
//
//
//     //swap first two numbers if true
//     if(compare(first, second)){
//         var temp = first;
//         first = second;
//         second = temp;
//     }
//
//     //swap second and third number if true
//     if(compare(second, third)){
//         var temp = second;
//         var second = third;
//         var third = temp;
//     }
//
//     if(compare(first, second)){
//         var temp = first;
//         first = second;
//         second = temp;
//     }
//
//     return [first, second, third];
// }
//
// //sort descending
// var results = sort([30, 10, 20], less);
// document.write(results + "<br>");
//
// //sort ascending
// results = sort([30,10,20], greater);
// document.write(results);

//function decomposition

birthDate();

function birthDate() {

    var bday = getParts();

    if(validateMonth(bday[0]) && validateDay(bday[1]) && validateYear(bday[2])){
        printSuccess(bday[0], bday[1], bday[2]);
    }
    else{
        printFailure();
    }
}

//gets the different elements of the birth date from user
function getParts(){

    var month = parseInt(prompt("Month?"));
    var day = parseInt(prompt("Day?"));
    var year = parseInt(prompt("Year?"));

    return [month, day, year];
}

function validateMonth(month){
    return month >= 1 && month <= 12;
}

function validateDay(day){
    return day >= 1 && day <= 31;
}

function validateYear(year){
    return year >= 1900 && year < 2018;
}

function printSuccess(day, month, year){
    document.write("<p><strong>Success!</strong> Your birthday was entered correctly</p>");
    document.write("<br>");
    document.write("<p>Birthdate: " + day + "/" + month + "/" + year + "</p>");
    document.write("You were born "+ (2017 - year) + " years ago! ")
}

//write to the document that the user failed the bday test
function printFailure(){
   document.write("<p><strong>Error! Your birthday is formatted incorrectly!</strong></p>");
}


//variable scope


//math functions