/*
*Summary
*Description
*@link URL
*@file
*by Jocque Jefferson
*@since 10.20.21
*/

//Declare and Define Variables
var myTransport = ["Walking", "Bus", "Car"];


var myMainRide = {
make: "UCSC Bus",
model: "Grayhound Santa Cruz",
color: "Blue, Yellow, White",
year: 2021,
ownIt: false,

};


//output
document.writeln("The transportation I use to get around is: " + myTransport +"<br>");
document.writeln("My Main Ride is: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
