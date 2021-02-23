// JavaScript Document
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$(function(){
  var introguide = introJs();
  // var startbtn   = $('#startdemotour');

  introguide.setOptions({
    steps: [
        {
            element: '.lesson1',
          intro: 'Congratulations! you just unlocked lesson 1.',
          position: 'bottom'
        },
        {
          element: '.activity1',
          intro: 'Click here to start your first lesson.',
          position: 'bottom'
        }
    ]
});
introguide.start();
});
	
	






var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

