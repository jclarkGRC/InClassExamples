/*
Joshua Clark
This is a file to show javascript math functions
10/11/2017

document.write("<br>");
 */
//verifying numerical values
var number = "100.99";
document.write(typeof number);
document.write("<br>");

//get numbers out of strings with the parse function of the math object
var integer = parseInt(number);
var floatingPoint = parseFloat(number);

document.write(floatingPoint + "<br>")

//exponents -- Uses the Math object
number = Math.pow(4,4); // 2^4

number = Math.pow(parseFloat(number), 2);


document.write("65536 to the power of two is: " + number);

//logs - uses the Math object
number = Math.log(64);
//console.log(number);

//rounding - uses the Math object also
number = -10011.789;

console.log("round() " + Math.round(number));

//square roots
number = Math.sqrt(64);

console.log("The square root of 64: " + number);

//Special values

console.log("PIE IS GOOD TWICE => " + Math.PI * 2);

//absolute values

console.log(number);

number = Math.abs(number);

console.log("The absolute value of number is: " + number);














