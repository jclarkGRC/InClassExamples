/*
This is a javascript file to help demonstrate how Javascript uses events and event listeners by Joshua Clark
10/23/17
 */

//event handlers**************************

window.onload = function () {
    print("All resources have been loaded");
};

window.addEventListener("load", function () {
    print("a")
});

window.addEventListener("load", function () {
    print("b")
});

window.addEventListener("load", function () {
    print("c")
});

//respond to IE or something older

if(window.addEventListener){
    window.addEventListener("load", function(){
        //do something here....
    })
}
else{
    window.attachEvent("load", function(){
        //do something here...
    })
}

//mouse events

window.addEventListener("load", function () {
    var button = document.getElementById("button");

    button.onclick = click;
    button.onmouseenter = mouseEnter;
    button.onmouseleave = mouseLeave;
    button.onmousemove = mouseMove;
    button.onmouseup = mouseUp;
    button.onmousedown = mouseDown;
});

function mouseUp(){
    print("Mouse down (" + event.clientX + ", " + event.clientY + ")");
}

function mouseDown(){
    print("Mouse down (" + event.clientX + ", " + event.clientY + ")");
}

function mouseMove(){
    print("( " + event.clientX + ", " + event.clientY + " )")
}

function mouseLeave(){
    print("mouse left");
}

function mouseEnter(){
    print("mouse entered");
}

function click(){

    console.log(this);

    console.log(event);

    this.innerHTML = "You clicked me";
}

//focus events 

window.addEventListener("load", function () {
    var name = document.querySelector('input[name="userName"]');

    name.onfocus = textGainFocus;
    name.onblur = textLoseFocus;

    var phone = document.querySelector('input[name="phone"]');

    phone.onkeypress = updatePhone;
});

function updatePhone() {
    //stop normal key entry
    event.preventDefault();

    //get control and text
    var phone = document.querySelector('input[name="phone"]');
    var text = phone.value;

    //is this a numeric digit
    if(event.charCode < 48 || event.charCode > 57) {
        return;
    }

    //(xxx)xxx-xxxx
    //add the character
    if(text.length <= 13) {
        text += event.key;
    }

    //add special characters when needed
    if(text.length === 1){
        text = "(" + text;
    }

    if(text.length === 4){
        text = text + ")-";
    }

    if(text.length === 9){
        text += "-";
    }

    //assign the text to the value
    phone.value = text;
}

function textGainFocus(){
    this.value = "";
}

function textLoseFocus(){
    if(this.value.length < 5){
        alert("Please enter a valid name with at least 5 characters");
    }
}

//event bubbling!!!
window.addEventListener('load', function () {
    var space = document.getElementById("space");
    var colorChanger = document.getElementById("color-changer");

    space.onclick = resetColor;
    colorChanger.onclick = randomizeColor;
});

function randomizeColor() {
    //This line of code will stop esvent propagation
    event.stopPropagation();

    var space = document.getElementById("space");
    space.style.backgroundColor = "rgb(" + getRandomColor() + "," + getRandomColor() + "," + getRandomColor() + ")"
}

function resetColor() {
    var space = document.getElementById("space");
    space.style.backgroundColor = "white";
}

function getRandomColor(){
    return Math.floor(Math.random() * 255);
}

function print(message)
{
    var console = document.getElementById("console");
    console.innerHTML = message + "\n" + console.innerHTML;
}