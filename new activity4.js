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
/*
function perday()
{
	var num1=document.getElementById("your number").value;
	document.getElementById("result").innerHTML= num1 * 7.75;
	document.getElementById("result1").innerHTML= num1*7.75*30;
	document.getElementById("result2").innerHTML=num1*7.75*365;
}*/


var y= document.getElementById("y");
var d1 = document. getElementById("d1");
var d2 = document. getElementById("d2");
var d3 = document. getElementById("d3");
var ystored= y.getAttribute("data-in");


setInterval(function(){
	if (y == document.activeElement){
		var temp = y.value;
		if (ystored != temp){
			y.setAttribute("data-in", temp);
			calculate();
		}
	}
},50);

function calculate(){
	d1.innerHTML = y.value * 7.75;
	d2.innerHTML = y.value * 7.75 * 30;
	d3.innerHTML = y.value * 7.75 * 365;
}
calculate()


	var x, text;
	x= document.getElementById('y').value;
	if (y <= 25){
		text="That is your grocery payment right there!"
	}else {
		text=""
	}
document.getElementById("result").innerHTML

