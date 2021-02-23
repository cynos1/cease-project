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
var btn = document.querySelector(".bubble>button");
var menu = document.querySelector(".bubble.menu");
var isOpen = false;
btn.addEventListener("click", function() {
  menu.className = !isOpen ? "bubble menu active" : "bubble menu";
  isOpen = !isOpen;
});

$(function() {
	//----- OPEN
	$('[data-popup-open]').on('click', function(e)  {
		var targeted_popup_class = jQuery(this).attr('data-popup-open');
		$('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

		e.preventDefault();
	});

	//----- CLOSE
	$('[data-popup-close]').on('click', function(e)  {
		var targeted_popup_class = jQuery(this).attr('data-popup-close');
		$('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

		e.preventDefault();
	});
});

function speak() {
  
  var utterance = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  utterance.voice = voices[4];
  
  utterance.text = $('body').text();
  speechSynthesis.speak(utterance);
  
}





$('.play').on('click', function() {
  speak();
});

$('.pause').on('click', function() {
  speechSynthesis.pause();
});

// $('.resume').on('click', function() {
//   speechSynthesis.resume();
// });


function next() {
  location.replace("new activity 3.html")
}
var animEndEventNames = {

	'WebkitAnimation' : 'webkitAnimationEnd',
	'OAnimation' : 'oAnimationEnd',
	'msAnimation' : 'MSAnimationEnd',
	'animation' : 'animationend'

};

var animEndEventName = animEndEventNames[Modernizr.prefixed('animation')];


function initTooltip() {

	var $trigger	= $('[data-tooltip-trigger]'),
		$tooltip	=  $trigger.next('[data-tooltip]');

	// Hide tooltips
	$tooltip.hide();

	$('[data-tooltip-trigger]').on('click', function(e) {

		var self = $(this);

		e.preventDefault();

		if ( !self.hasClass('active') ) {

			self.addClass('active');
			self
				.next()
				.show()
				.addClass('tooltip-in')
				.on(animEndEventName, function() {
					$(this).removeClass('tooltip-in').show();
				});

		} else {

			closeTooltip();

		}

		$('body').on('click', function() {

			if ( !$(event.target).closest($trigger).length ) {

				if ( $trigger.hasClass('active') ) {

					closeTooltip();

				}

			}

		});


	});

	function closeTooltip() {

		$trigger.removeClass('active');
		$tooltip
			.addClass('tooltip-out')
			.on(animEndEventName, function() {
				$(this).removeClass('tooltip-out').hide();
			});

	}

}

initTooltip();