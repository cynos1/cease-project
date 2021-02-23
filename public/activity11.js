// JavaScript Document
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
var myaudio = document.createElement('audio');
myaudio.controls=true;
myaudio.src='Ping-tone.mp3';

var mysecaudio = document.createElement('audio');
mysecaudio.controls=true;
mysecaudio.src='wrong-answer-sound-effect.mp3';

$(function() {
   $("#draggableThree").draggable({
     revert: "invalid",
     snap: ".drapCircle",
     snapMode: "inner"
   });
   $("#dropableOne").droppable({
     accept: "#draggableThree",
     hoverClass: "ui-state-active",
     drop: function(event, ui) {
	myaudio.play();
	$("#draggableThree")
	.addClass("disappear");
   $("#dropableOne")
	.addClass("fa-check-circle")
    .addClass("colorChangered")
    .addClass("grow");
     }
   });
 });

 $(function() {
   $("#draggableOne").draggable({
     revert: "invalid",
	snapMode:"inner"
   });
   $("#dropableTwo").droppable({
     accept: "#draggableOne" ,
     hoverClass: "ui-state-active",
     drop: function(event, ui) {
       $("#draggableOne")
		.addClass("disappear");
		$("#dropableTwo")
	.addClass("fa-check-circle")
        .addClass("colorChangered")
        .addClass("grow");
     }
   });
 });

 $(function() {
   $("#draggableFour").draggable({
     revert: "invalid"
   });
   $("#dropableThree").droppable({
     accept: "#draggableFour",
     activeClass: "ui-state-hover",
     hoverClass: "ui-state-active",
     drop: function(event, ui) {
       $("#draggableFour")
         .addClass("disappear");
       $("#dropableThree")
		.addClass("fa-check-circle")
         .addClass("colorChangered")
         .addClass("grow");
     }
   });
 });

 $(function() {
   $("#draggableTwo").draggable({
     revert: "invalid"
   });
   $("#dropableFour").droppable({
     accept: "#draggableTwo",
     activeClass: "ui-state-hover",
     hoverClass: "ui-state-active",
     drop: function(event, ui) {
       $("#draggableTwo")
         .addClass("disappear");
       $("#dropableFour")
		.addClass("fa-check-circle")
         .addClass("colorChangered")
         .addClass("grow");
     }
   });
 });

 $(function() {
   $("#draggableFive").draggable({
     revert: "invalid"
   });
   $("#dropableSix").droppable({
     accept: "#draggableFive",
     activeClass: "ui-state-hover",
     hoverClass: "ui-state-active",
     drop: function(event, ui) {
       $("#draggableFive")
         .addClass("disappear");
       $("#dropableSix")
		.addClass("fa-check-circle")
         .addClass("colorChangered")
         .addClass("grow");
     }
   });
 });

 $(function() {
   $("#draggableSix").draggable({
     revert: "invalid"
   });
   $("#dropableSeven").droppable({
     accept: "#draggableSix",
     activeClass: "ui-state-hover",
     hoverClass: "ui-state-active",
     drop: function(event, ui) {
       $("#draggableSix")
         .addClass("disappear");
       $("#dropableSeven")
		.addClass("fa-check-circle")
         .addClass("colorChangered")
         .addClass("grow");
     }
   });
 });

 $(function() {
   $("#draggableSeven").draggable({
     revert: "invalid"
   });
   $("#dropableFive").droppable({
     accept: "#draggableSeven",
     activeClass: "ui-state-hover",
     hoverClass: "ui-state-active",
     drop: function(event, ui) {
       $("#draggableSeven")
         .addClass("disappear");
       $("#dropableFive")
		.addClass("fa-check-circle")
         .addClass("colorChangered")
         .addClass("grow");
     }
   });
 });

 