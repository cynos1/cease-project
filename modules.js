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
          element: '.logo',
          intro: 'Welcome to CEASE! Go through this quick tour to know your way around the website. Hint: Click here to return to the homepage.',
          position: 'bottom'
        },
        {
          element: '#myUL',
          intro: 'You will have three modules to complete but lessons will become available as you progress. ',
          position: 'bottom'
        },
        {
          element: '.survey',
          intro: 'Click on module 1 to take your readiness survey.',
          position: 'bottom'
        }
    ]
});
introguide.start();
});
	
	
$(function() {
  $('.chart').easyPieChart({
    size: 160,
    barColor: "#c52348",
    scaleLength: 0,
    lineWidth: 15,
    trackColor: "#373737",
    lineCap: "circle",
    animate: 2000,
  });
	$('.chart1').easyPieChart({
    size: 160,
    barColor: "#89287c",
    scaleLength: 0,
    lineWidth: 15,
    trackColor: "#373737",
    lineCap: "circle",
    animate: 2000,
  });
	$('.chart2').easyPieChart({
    size: 160,
    barColor: "#005d9b",
    scaleLength: 0,
    lineWidth: 15,
    trackColor: "#373737",
    lineCap: "circle",
    animate: 2000,
  });
});








var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

