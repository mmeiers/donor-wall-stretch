"use strict";

var slideshowInterval1;

//rotate the floaters every 5s
function startFloaterAnimation1() {
  slideshowInterval1 = setInterval(function() {
var random = Math.floor(Math.random()*100);


  $(".floaters__entry1").eq(random)
  .fadeOut(200)
  .next()
  .delay(0)
  .fadeIn(200)
  .end()
  .appendTo(".container--floaters1");

  },  2000);
};
startFloaterAnimation1();



var slideshowInterval2;

//rotate the floaters every 5s
function startFloaterAnimation2() {
  slideshowInterval2 = setInterval(function() {
var random = Math.floor(Math.random()*100);


  $(".floaters__entry2").eq(random)
  .fadeOut(200)
  .next()
  .delay(50)
  .fadeIn(200)
  .end()
  .appendTo(".container--floaters2");


  },  4000);
};
startFloaterAnimation2();


var slideshowInterval3;

//rotate the floaters every 5s
function startFloaterAnimation3() {
  slideshowInterval2 = setInterval(function() {
var random = Math.floor(Math.random()*100);


  $(".floaters__entry3").eq(random)
  .fadeOut(200)
  .next()
  .delay(1000)
  .fadeIn(200)
  .end()
  .appendTo(".container--floaters3");

  },  5000);
};
startFloaterAnimation3();




