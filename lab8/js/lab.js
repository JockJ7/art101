/*
*Authors: Jocque Jefferson <jopjeffe@ucsc.edu> and
*Sophia Syed <sosyed@ucsc.edu>
*Created: 27 October
*License: Public Domain
*/

function isOdd(x){
  var results = (x % 2 == 1);
  return results;
}
console.log("Is 1 odd? ", isOdd(1));
console.log("Is 2 odd? ", isOdd(2));

array = [10, 81, 54, 16, 422, 144, 110]
console.log("My array", array);

var result = array.map(isOdd);
console.log("Test of oddness of array:", result);

var result = array.map(function(x){
    return x / 2;
})
console.log("Half of array:", result);
