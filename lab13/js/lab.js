/*
*Summary
*Description
*@link URL
*@file
*by Jocque Jefferson
*@since 11.22.21
*/

function fizzBuzzBoom() {
  for(i=0; i<=200; i++){
    var outputstr= "";
    if(i%3== 0 && i%5== 0 && i%7 == 0){
      outputstr += "FizzBuzzBoom";
      console.log("FizzBuzzBoom"+i);
      $("#output").append("<p>" + outputstr + "</p>");
    } else if(i%3== 0 && i%5== 0){
      outputstr += "FizzBuzz";
      $("#output").append("<p>" + outputstr + "</p>");
    } else if(i%3== 0 && i%7== 0){
      outputstr += "FizzBoom";
      $("#output").append("<p>" + outputstr + "</p>");
    } else if(i%7== 0 && i%5== 0){
      outputstr += "BuzzBoom";
      $("#output").append("<p>" + outputstr + "</p>");
    } else if(i%3== 0 ){
      outputstr = "Fizz";
      $("#output").append("<p>" + outputstr + "</p>");
    } else if (i%5== 0){
      outputstr = "Buzz";
      $("#output").append("<p>" + outputstr + "</p>");
    } else if (i%7 == 0){
      outputstr = "Boom";
      $("#output").append("<p>" + outputstr + "</p>");
    } else{
      outputstr= i;
      $("#output").append("<p>" + outputstr + "</p>");
    }
  }
}

$("#my-button").click(function(){
  console.log("click");
  fizzBuzzBoom();
})
