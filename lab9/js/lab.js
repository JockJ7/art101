/**
*Author: Jocque Jefferson
*Created: 11/01/2001
*License: Public Domain
**/


//Create a output node
 var outputEl = document.getElementById("Output");

//create list parent node to make list
var node = document.createElement("LI");

//create a new element and assign it to a variable
var new1El = document.createTextNode("Moives");

var new2El = document.createTextNode("Baseball");

//append child node to parent node
node.appendChild(new1El);

//append the nodes to the output in order to experiment
document.getElementById("Output").appendChild(node);
//Repeat as before for Results
node = document.createElement("LI");
node.appendChild(new2El);
document.getElementById("Output").appendChild(node);
