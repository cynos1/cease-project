/*===========================================================================*/
/*===== In the following section you can add/remove/modify the spots  =======*/
/*===========================================================================*/
var spotsconfiga = {
  "pins":[
  {
    "hover": "Blindness.",//info of the popup
    "pos_X": 190,//check the X, Y coordinates guide in the documentation
    "pos_Y": 246,
    "size": 15,//size of the pin
    "outline": "#cc2900",//outline color of the pin
    "upColor": "green",//color of the pin when drawing load
    "overColor": "#cc2900",//color of the pin when mouse hover
    "url": "",//link to any webpage
    "target": "none",// use "new_window", "same_window", "modal", or "none"
    "enabled": true//true/false to activate/deactivate this pin
  },
  {
    "hover": "Reduced sense of smell.",
    "pos_X": 241, "pos_Y": 300,
    "size": 15,
    "outline": "#FF0000",
    "upColor": "green", 
	"overColor": "rgba(255, 0, 0, 0.7)",
    "url": "", 
	"target": "none",
    "enabled": true
  },
  {
   "hover": "Reduced sense of taste",
    "pos_X": 241, "pos_Y": 354,
    "size": 15,
    "outline": "#FF0000",
    "upColor": "green", 
	"overColor": "rgba(255, 0, 0, 0.7)",
    "url": "", 
	"target": "none",
    "enabled": true  
  },
  {
	"hover": "Throat cancer",
    "pos_X": 245, "pos_Y": 432,
    "size": 15,
    "outline": "#FF0000",
    "upColor": "green", 
	"overColor": "rgba(255, 0, 0, 0.7)",
    "url": "", 
	"target": "none",
    "enabled": true
  },
  ]
};
/*==============================================================================*/
/*==============================================================================*/
/*===== The following is the script for pins interaction DON'T EDIT !!!  =======*/
/*==============================================================================*/
/*==============================================================================*/
function isTouchEnabled() {
  return (("ontouchstart" in window)
    || (navigator.MaxTouchPoints > 0)
    || (navigator.msMaxTouchPoints > 0));
}
jQuery(function () {
  var pins_len = spotsconfiga.pins.length;
  if(pins_len > 0) {
    var xmlns = "http://www.w3.org/2000/svg";
    var tsvg_obj = document.getElementById("anaspotsa");
    var svg_circle;
    for (var i = 0; i < pins_len; i++) {
      svg_circle = document.createElementNS(xmlns, "circle");
      svg_circle.setAttributeNS(null, "cx", spotsconfiga.pins[i].pos_X);
      svg_circle.setAttributeNS(null, "cy", spotsconfiga.pins[i].pos_Y);
      svg_circle.setAttributeNS(null, "r", spotsconfiga.pins[i].size / 2);
      svg_circle.setAttributeNS(null, "fill", spotsconfiga.pins[i].upColor);
      svg_circle.setAttributeNS(null, "stroke", spotsconfiga.pins[i].outline);
      svg_circle.setAttributeNS(null, "stroke-width", 1);
      svg_circle.setAttributeNS(null, "id", "anaspotsa_" + i);
      tsvg_obj.appendChild(svg_circle);
      anaspotsaAddEvent(i);
    }
  }
});
function anaspotsaAddEvent(id) {
  var obj = jQuery("#anaspotsa_" + id);
  if(spotsconfiga.pins[id].enabled === true){
    obj.attr({"cursor": "pointer"});
    obj.hover(function () {
      jQuery("#anatip").show().html(spotsconfiga.pins[id].hover);
      obj.css({"fill":spotsconfiga.pins[id].overColor});
    }, function () {
      jQuery("#anatip").hide();
      obj.css({"fill":spotsconfiga.pins[id].upColor});
    });
    obj.mouseup(function(){
      obj.css({"fill":spotsconfiga.pins[id].overColor});
      if (spotsconfiga.pins[id].target === "new_window"){
        window.open(spotsconfiga.pins[id].url);  
      } else if (spotsconfiga.pins[id].target === "same_window") {
        window.parent.location.href = spotsconfiga.pins[id].url;
      } else if (spotsconfiga.pins[id].target === "modal") {
        jQuery(spotsconfiga.pins[id].url).modal("show");
      }
    });
    obj.mousemove(function (e) {
      var x = e.pageX + 10, y = e.pageY + 15;
      var tipw =jQuery("#anatip").outerWidth(), tiph =jQuery("#anatip").outerHeight(),
      x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw - (20 * 2) : x ;
      y = (y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() - tiph - 10 : y ;
      jQuery("#anatip").css({left: x, top: y});
    });
    if (isTouchEnabled()) {
      obj.on("touchstart", function (e) {
        var touch = e.originalEvent.touches[0];
        var x = touch.pageX + 10, y = touch.pageY + 15;
        var tipw=jQuery("#anatip").outerWidth(), tiph=jQuery("#anatip").outerHeight(),
        x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw -(20 * 2) : x ;
        y =(y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() -tiph - 10 : y ;
        jQuery("#anatip").show().html(spotsconfiga.pins[id].hover);
        jQuery("#anatip").css({left:x, top:y});
      });
      obj.on("touchend", function () {
        jQuery("#" + id).css({"fill":spotsconfiga.pins[id].upColor});
        if (spotsconfiga.pins[id].target === "new_window") {
          window.open(spotsconfiga.pins[id].url);
        } else if (spotsconfiga.pins[id].target === "same_window") {
          window.parent.location.href = spotsconfiga.pins[id].url;
        } else if (spotsconfiga.pins[id].target === "modal") {
          jQuery(spotsconfiga.pins[id].url).modal("show");
        }
      });
    }
  }
}