var classRoom = {
    //attributes
    seats: 30,
    projectorAvailable: true,
    roomNumber: "TC 120",
    studentsPresent: ["Jose Garcia", "Amelia Smith", "Tony Adams"],
    
    //methods
    addToClass(first, last) {
        var name = first + " " + last;
        
        this.studentsPresent.push(name);
    },
    seatsAvailable() {
        return this.seats - this.studentsPresent.length;
    }
};

//store my paragraph tag in a variable
var paragraph = document.getElementById("content");
paragraph.innerHTML = "Seats: " + classRoom.seats + "<br>";
paragraph.innerHTML += "Available Seats: " + classRoom.seatsAvailable() + "<br>";

//add a few students to the class
classRoom.addToClass("Sean", "Carter");
classRoom.addToClass("Lebron", "James"); //the king!
paragraph.innerHTML += "Available Seats after adding students: " +
                       classRoom.seatsAvailable() + "<br>";

classRoom['projectorAvailable'] = false;
paragraph.innerHTML += "Projector? " + classRoom.projectorAvailable + "<br>";

var roomNum = classRoom['roomNumber'];

//alternative notation
var fruit = new Object();

//dynamically add attributes & methods
fruit.name = "Mango";
fruit.isTasty = true;

fruit.eat = function(name) {
    alert(name + " just ate a " + this.name + "!");  
};

fruit.eat = function() {
    paragraph.innerHTML += "A nameless person ate the " + this.name + "!<br>";
}

paragraph.innerHTML += "You created a " + fruit.name + "<br>";
fruit.eat();

//remove an attribute or method
paragraph.innerHTML += "Is the " + fruit.name + " tasty? " + fruit.isTasty + "<br>";
delete fruit.isTasty;
paragraph.innerHTML += "Is the " + fruit.name + " tasty? " + fruit.isTasty + "<br>";

//object (function) constructors

var Color = function(red, green, blue) {
    //attributes
    this.red = red;
    this.green = green;
    this.blue = blue;
    
    //methods
    this.isGrayScale = function() {
        //returns true if the color is grayscale, otherwise false
        return this.red === this.green === this.blue;
    }
};

var red = new Color(255, 0, 0);
var purple = new Color(255, 0, 255);

//are either of these colors grayscale?
paragraph.innerHTML += "Red: " + red.isGrayScale() + ", Purple: " +
                      purple.isGrayScale() + "<br>";

function createPerson(fname, lname)
{
    var person = {
        first: fname,
        last: lname,
        
        sayHi: function() {
            alert("Hello, " + this.first + " " + this.last);
        }
    };
    
    return person;
}

var tony = createPerson("tony", "wilson");
var susie = createPerson("susie", "smith");

susie.sayHi();

















