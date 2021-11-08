/*
*Summary
*Description
*@link URL
*@file
*by Jocque Jefferson
*@since 10.20.21
*/
function putNameInTitle() {

  var field = document.getElementById("mytextarea");
  var name = field.value;


  var headingEl = document.getElementById("titlePart");
  headingEl.innerHTML = "Hi there, " + name;
}

var buttonEl = document.getElementById("mybutton");
buttonEl.addEventListener("click", putNameInTitle);
