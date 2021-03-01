
// JavaScript Document
$(document).ready( function() {
  
  var text = "QUIZ 3";
  var index = 0;
  var chars = text.length - 1;
  var speed = 100;
  var div = "typing";

  function typing() {
  
    document.getElementById(div).innerHTML += text[index];

    if(index < chars){
      setTimeout(function(){
        index++;
        typing();
      }, speed);
    }

    setTimeout(function(){location.href="quiz 3.html"
    }, 4200);
  }

  // When the browser is load or reaload
  $(window).load(function() {
    $('#overlay').fadeOut();
    setTimeout(function(){
      typing();
    }, 1000);
  });
});