/*
This is a document to demonstrate javascript objects by Joshua Clark
10/11/2017
 */

//JSON -- Javascript object notation

// var classRoom = {};//empty object

var classRoom = {
    //properties
    seats: 30,
    projectorAvailable: true,
    room: "AC330",
    hdmiPort: true,
    registeredStudents: ["Jack Sparrow", "Sally Shells", "Jimmy Johns"],
    //methods
    register: function (first, last) {
        var name = first + " " + last;
        this.registeredStudents.push(name);
    }
};

//console.log(classRoom);

//register a new student in this classroom object
classRoom.register("Joshua", "Clark");
classRoom.register("Jeff", "Clark");


//console.log(classRoom);

//access specific elements of the object
var port = classRoom.hdmiPort;
var port = classRoom['hdmiPort'];

//console.log("Is there a port in the class room?" + port);

//constructors

function testObject (seats, projectorAvailable, room, hdmiPort) {

    this.seats = seats,
    this.projectorAvailable = projectorAvailable,
    this.room = room,
    this.hdmiPort = hdmiPort,
    this.registeredStudents = [];
    this.register = function (first, last) {
            var name = first + " " + last;
            this.registeredStudents.push(name);
    }
}



const myClassroom = new testObject(30, false, "AC330", true);
//var yourClass = new testObject(1, true, "", true);

document.write("What are the registered students?" + myClassroom.registeredStudents + "</br>");

myClassroom.register("Joshua", "Clark");

document.write("What are the registered students?" + myClassroom.registeredStudents + "</br>");

myClassroom.register("James", "Franco");

document.write("What are the registered students?" + myClassroom.registeredStudents + "</br>");


// var classRoomObject = new Object();
//
// classRoomObject.name = "my name";
// classRoomObject.newKey = "new key";
//
// console.log(classRoomObject);

