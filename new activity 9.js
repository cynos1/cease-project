 // JavaScript Document
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
let cards = [
  {
    front: "Cancer",
    back: "Smoking increases risk for lung, mouth, voice box(larynx), throat(pharnyx), esophagus, bladder, kidney, cervix, stomach, and some blood cancers (leukemias)."
  },
  {
    front: "Lung Disease",
    back: "Smoking can cause pneumonia, chronic bronchitis, emphysema, which are all Chronic Obstructive Pulmonary Diseases (COPD), that can lead to long-lasting illness, disability, and death."
	
  },
  {
    front: "Heart attacks, and strokes",
    back: "Smokers are twice as likely to die from heart disease as non-smokers. Smoking can weaken the walls of vessels that carry blood to the brain which can cause strokes. Blood vessel disease can contribute to erectile dysfunction in men."
  },
  {
	front:"Blindness",
	back:"Smoking can cause macular degeneration, an eye disease that can cause blindness."
  },
  {
	front:"Premature Aging",
	back:"Smoking causes skin wrinkling, yellowing of finger nails, and other signs of premature aging."
  },
  {
	front:"Risks to Women and Babies",
	back:"Women over 35 who smoke and use birth control are at a higher risk for heart attack, stroke, and blood clots of the leg. Miscarriages and low birthweight are also more likely."  
  },
  {
	front:"Years of Life Lost",
	back:"On average, males lose 13.2 and females lose 14.5 years of their life due to smoking."
  }
 
];

let currentCard = 1,
	lastcard=1,
  carousel = document.querySelector(".carousel"),
  next = document.querySelector(".next"),
  prev = document.querySelector(".prev");

renderCards();

function renderCards() {
  carousel.style.width = `${cards.length}00vw`;
  cards.map(el => {
    let div = document.createElement("div");
    div.classList.add("card");
    let front = document.createElement("div");
    front.classList.add("front");
    let back = document.createElement("div");
    back.classList.add("back");
    front.textContent = el.front;
    back.textContent = el.back;
    div.appendChild(front);
    div.appendChild(back);
    div.addEventListener("click", function(e) {
      e.srcElement.parentNode.classList.toggle("active");
    });
    carousel.appendChild(div);
  });
}

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

function cardFly() {
  carousel.style.transform = `translateX(-${currentCard - 1}00vw)`;
}
function nextpage(){
	location.replace("new activity 10.html")
}



var card = $(".cards");

$(document).on("mousemove",function(e) {  
  var ax = -($(window).innerWidth()/2- e.pageX)/20;
  var ay = ($(window).innerHeight()/2- e.pageY)/10;
  card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
});