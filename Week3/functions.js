//how do we declare and invoke functions?
function calculateDogYears()
{
    var dogYears = parseFloat(prompt("Enter your dog's age!"));
    
    //rules: for the first 3 years, 10 dy = 1 hy
    //       for the next years, 7 dy = 1 hy
    
    var humanYears = 0;
    if (dogYears <= 3)
    {
        humanYears = dogYears * 10;
    }
    else
    {
        //the dog is at least 3 years old
        humanYears = 30;
        dogYears -= 3;
        
        humanYears += (dogYears * 7);
    }
    
    document.write("Your dog is " + humanYears + " old in human years!<br>");
}

//invoke the function
//calculateDogYears();

//how do we return values from functions?

//return the number of hours it will take to achieve the given distance,
//given the average of the mph given
function tripCalculator(minMph, maxMph, distance)
{
    var averageMph = (minMph + maxMph) / 2;
    
    return distance / averageMph;
}

//how many hours to cover 100 miles?
var hours = tripCalculator(10, 30, 100);
document.write("Your trip will take " + hours + " hours on average!<br>");

//how do we send parameters to a function?
function convertCurrency(dollars, currencyType)
{
    if (currencyType == "pound")
    {
        return dollars * 0.78;
    }
    else if (currencyType == "euro")
    {
        return dollars * 0.92;
    }
    else if (currencyType == "yen")
    {
        return dollars * 108.49;
    }
    else
    {
        var conversion = parseFloat(prompt("Enter the number of " + currencyType +
                                           " to the dollar."));
        
        return dollars * conversion;
    }
}

var dollars = 3.50;
var pounds = convertCurrency(dollars, "pound");
var euro = convertCurrency(dollars, "euro");
var yen = convertCurrency(dollars, "yen");
//var peso = convertCurrency(dollars, "peso");

//document.write("Your $" + dollars + " is " + pounds + " pounds, " +
//               euro + " euros, " + yen + " yen, " + peso + " pesos.<br>");

//storing functions in variables
var lessThan = function(first, second) {
    document.write("lessThan() invoked");
    return first < second;  
};

var greaterThan = function(first, second) {
    return first > second;
};

var less = lessThan(10, 20);
document.write(less + "<br>");

var greater = greaterThan(10, 20);
document.write(greater + "<br>");

function sort(elements, compareFunction)
{
    //assume we have exactly three elements
    var first = elements[0];
    var second = elements[1];
    var third = elements[2];
    
    if(compareFunction(first, second) == false)
    {
        temp = 10;
        
        //swap first & second
        var temp = first;
        first = second;
        second = temp;
    }
    
    if (compareFunction(second, third) == false)
    {
        temp = second;
        second = third;
        third = temp;
    }
    
    if(compareFunction(first, second) == false)
    {
        //swap first & second
        temp = first;
        first = second;
        second = temp;
    }
    
    return [first, second, third];
}

var sortedResults = sort( [20, 7, 3], greaterThan);
document.write("Sorted: " + sortedResults + "<br>");

//functional decomposition

//birthDate();

//ask the user for their birthdate, verify the date, then print a response
function birthDate()
{
    //retrieve the birthdate
    var parts = getBirthDate();
    
    //validate
    if (validateDay(parts[0]) && validateMonth(parts[1]) &&
        validateYear(parts[2]))
    {
        //valid date!
        document.write("Your birthday is " + parts[1] + "/" + parts[0] +
                       "/" + parts[2] + ". Your are " + (2017 - parts[2]) +
                       " years old!<br>");
    }
    else
    {
        //invalid date!
        document.write("You entered an invalid birthdate!");
    }
}

//this will return an array - [day, month, year]
function getBirthDate()
{
    var month = parseInt(prompt("Enter a birth month"));
    var day = parseInt(prompt("Enter a birth day"));
    var year = parseInt(prompt("Enter a birth year"));
    
    return [day, month, year];
}

function validateDay(day)
{
    //add some rudimentary checks
    return day >= 1 && day <= 31;
}

function validateMonth(month)
{
    //add some rudimentary checks
    return month >= 1 && month <= 12;
}

function validateYear(year)
{
    //add some rudimentary checks
    return year >= 1900;
}

//scope
var weather = "rainy"; //global variable

checkTheWeather();

function checkTheWeather()
{
    if (true)
    {
        var citizenOf = "washington"; //local variable
    }
    weather = "sunny";
    
    //document.write(citizenOf);
}


//invoking anonymous functions
(function() {
    document.write("Calling an anonymous function.");
})();


















