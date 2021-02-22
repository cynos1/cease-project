// JavaScript Document
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//function next(){
	//window.location.replace("new activity 7.html")
//}

let currentCard = 1,
	lastcard=1,
  carousel = document.querySelector(".carousel"),
  next = document.querySelector(".next"),
  prev = document.querySelector(".prev");

next.addEventListener("click", function(e) {
  if (currentCard >= cards.length) {
 return;
	}
	currentCard++;
  cardFly();
if(currentCard == 7){
	$("#navigation").show();
	$("#prevnext").hide();
}
});
prev.addEventListener("click", function(e) {
  if (currentCard - 1 <= 0) {
    return;
  }
  currentCard--;
  cardFly();
});