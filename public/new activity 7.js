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

(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();






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