/*
Joshua Clark
This is an example of a quiz
10/2/2017
 */

//present question

window.alert("Which of the following was the 4th president of the United States\n" +
    "1. John Adams\n" +
    "2. James Monroe\n" +
    "3. James Madison\n" +
    "4. Thomas Jefferson");

//get the answer
var answer = prompt("Enter your answer");

//convert string to number
answer = parseInt(answer);

//show the right anwser

if (answer === 3){
    document.write("You got the right answer")
}
else{
    document.write("You have the incorrect anwser, it was number 3");
}

document.write("<br>");

var difficult = confirm("Was the quiz hard?");

if(!difficult){
    document.write("You are great at history")
}
else{
    document.write("You need to brush up on your history");
}