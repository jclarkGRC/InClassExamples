//verify the types of a variable
var number = 100.99;

//validating numeric values
document.write(typeof number);
document.write("<br>");

//convert between integers and floats
document.write("int: " + parseInt(number) + "<br>");
document.write("float: " + parseFloat(number) + "<br>");

//exponents
document.write((2**8) + "<br>");
document.write(Math.pow(4, 4) + "<br>");

//logs
document.write(Math.log(8) + "<br>");
document.write(Math.log(8) / Math.log(2) + "<br>"); //change of base...

//rounding
number = 1011.539;
document.write(Math.round(number) + "<br>");
document.write(Math.ceil(number) + "<br>");
document.write(Math.floor(number) + "<br>");

//square roots
document.write(Math.sqrt(16) + "<br>");
document.write(Math.sqrt(256) + "<br>");

//special values
document.write("Pi: " + Math.PI + ", e: " + Math.E + "<br>");

//absolute values
document.write("abs(-10): " + Math.abs(-10));











