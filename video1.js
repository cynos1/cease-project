// JavaScript Document
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function blink(){
    $('.help-tip').delay(1000).fadeTo(100,0.5).delay(1000).fadeTo(100,1, blink);
}

$(document).ready(function() {
    blink();
});


$('a').click(function(event){
    event.preventDefault(); 
	});

function next() {
  location.replace("quiz1loading.html")
}

$(window).scroll(function () {
	var headerHeight = $('.site-header').innerHeight();
	var contentHeight = $('.site-main').innerHeight();
	var sidebarHeight = $('.side-navigation').height();
  var sidebarBottomPos = contentHeight - sidebarHeight; 
  var trigger = $(window).scrollTop() - headerHeight;

 if ($(window).scrollTop() >= headerHeight) {
  $('.side-navigation').addClass('fixed');
  } else {
  $('.side-navigation').removeClass('fixed');
   }
if (trigger >= sidebarBottomPos) {
 $('.side-navigation').addClass('bottom');
  } else {
  $('.side-navigation').removeClass('bottom');
  }
});