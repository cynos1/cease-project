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

let container = document.querySelector('.container');
let jar = document.querySelector('.jar img');
Draggable.create('.cookie', {
    bounds: window,
    cursor: 'pointer',
    autoScroll:1,
    onDrag: dragCookie, onRelease: releaseCookie,
    zIndexBoost: true
});

Draggable.create('.notcookie', {
  bounds: window,
    cursor: 'pointer',
    autoScroll:1,
    onDrag: dragCookie,
    zIndexBoost: true
})




function dragCookie() {
  let dragDirection = this.getDirection('velocity');
  let skew;
  dragDirection === 'right' ? skew = 9 : dragDirection === 'left' ? skew = -9 : 0;
   if (this.hitTest(jar, '40%')) {
     shakeJarAnimation().play() ;
     TweenMax.to(this.target, 0.3, {scale: 0.7, 'filter': 'brightness(80%)'});
   } else {  
     shakeJarAnimation().kill(0);
     TweenMax.to(this.target, 0.3, {skewX: skew,scale: 1, 'filter': 'brightness(100%)',});     
   }
}

function releaseCookie() {
  shakeJarAnimation().kill(0);
  let jarBottom = $(window).height() - $('.jar').offset().top - $('.jar').height();
  let cookieBottom = $(window).height() -  $(this.target).offset().top - $(this.target).height();
  let distance = (cookieBottom - jarBottom) + this.y + $(this.target).height()*0.1;

  if (this.hitTest(jar, '80%')) {
     TweenMax.to(this.target,1, {skewX: 0, x: this.x, y: distance, ease: Bounce.easeOut} )   
$('.drop-area jar column').css('color','green');
  } else {
     TweenMax.to(this.target, 1, {skewX: 0, x: 0, y: 0, scale: 1, 'filter': 'brightness(100%)', ease: Elastic.easeOut});
$('.drop-area jar column').css('color','red');
  }
	
}
/*switch(true){
	case ".cookie":
	$('.jar').css('color','green');
	break;
	case ".notcookie":
	$('.jar').css('color','red');
	break;
	}*/
  


function shakeJarAnimation() {
  return TweenMax.fromTo(jar, 0.3, { x: -1, y: -1, }, { x: 1, y: 1, repeat: -1, ease: RoughEase.ease.config({ strength: 7, points: 7, template: Linear.easeNone, randomize: false }), clearProps: "x" }, 0);
  TweenLite.to(rectangle,1,{fill:"red"})
}










var visiblediv = 0;
function showdiv(){
	$(".tab").hide();
	$(".tab:eq(" + visiblediv + ")").show();
}
showdiv();

function shownext(){
	if(visiblediv == $(".tab").length-1){
		visiblediv = 0;
	}else{
		visiblediv++;
	}
	showdiv();
}
function showprev(){
	if(visiblediv == $(".tab").length-1){
		visiblediv = 0;
	}else{
		visiblediv--;
	}
	showdiv();
}
