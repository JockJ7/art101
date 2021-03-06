/*
*Summary
*Description
*@link URL
*@file
*by Jocque Jefferson
*@since 11.8.21
*/

//Find the section you want to add the button to
//Create the button
//Give it a text label
//Add it to the chosen Section

var challenge = $("#challenges");
var problem = $("#problems");
var result = $("#results");

//qwe append to those paragraphs a button each with their own ids
challenge.append("<button id='c_button'>Click</button>")
problem.append("<button id='p_button'>Click</button>")
result.append("<button id='r_button'>Click</button>")

//for the id of C-Button when ever it is clicked it runs the function
$('#c_button').click(function() {
  //this is the targeted selector (c_button) and .parent targets where (c_button) is from where we can toggle the class...
  //"special" from each click
$(this).parent().toggleClass("special");
$('#r_button').toggleClass("changed");
$('#r_button').css("padding", "5px");

})

$('#p_button').click(function() {
  //this is the targeted selector (p_button) and .parent targets where (p_button) is from where we can toggle the class...
  //"special" from each click
$(this).parent().toggleClass("special");
$('#c_button').toggleClass("changed");
})

$('#r_button').click(function() {
  //this is the targeted selector (r_button) and .parent targets where (r_button) is from where we can toggle the class...
  //"special" from each click
$(this).parent().toggleClass("special");
$('#p_button').toggleClass("changed");
})
