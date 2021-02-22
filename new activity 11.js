/*
let container = document.querySelector('.container');
let bucket = document.querySelector('.bucket img');

Draggable.create('.option1',{
	bounds: window;
	cursor:'pointer';
	throwProps:true;
	ondrag:*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$(function () {
  $(".good1").draggable({
	snapMode:"inner",
	
	
  });
  $(".bad").draggable({
    revert:"invalid",
	snapMode:"inner"
	
  });

  $("#trashCan").droppable({
    activeClass:"ui-state-active",
    hoverClass: "ui-state-active",
    accept:"#one",
    drop: function(event,ui) {
	$(".good1").addClass("disappear1");
    }
  });
});

$(function () {
  $(".good2").draggable({
	snapMode:"inner",
	
	
  });
  $(".bad").draggable({
    revert:"invalid",
	snapMode:"inner",
	
  });

  $("#trashCan").droppable({
    activeClass:"ui-state-active",
    hoverClass: "ui-state-active",
    accept:"#two",
    drop: function(event,ui) {
	$(".good2").addClass("disappear2");
      $("#trashCan")
      .addclass("fa-check-circle")
      ui.draggable.fadeOut(function () {
        ui.draggable.remove();
      });     
    }
  });
});

$(function () {
  $(".good3").draggable({
	snapMode:"inner",
	
	
  });
  $(".bad").draggable({
    revert:"invalid",
	snapMode:"inner",
	
  });

  $("#trashCan").droppable({
    activeClass:"ui-state-active",
    hoverClass: "ui-state-active",
    accept:"#three",
    drop: function(event,ui) {
	$(".good3").addClass("disappear3");
      $("#trashCan")
      .addclass("fa-check-circle")
      ui.draggable.fadeOut(function () {
        ui.draggable.remove();
      });     
    }
  });
});

$(function () {
  $(".good4").draggable({
	snapMode:"inner",
	
	
  });
  $(".bad").draggable({
    revert:"invalid",
	snapMode:"inner",
	
  });

  $("#trashCan").droppable({
    activeClass:"ui-state-active",
    hoverClass: "ui-state-active",
    accept:"#three",
    drop: function(event,ui) {
	$(".good4").addClass("disappear3");
      $("#trashCan")
      .addclass("fa-check-circle")
      ui.draggable.fadeOut(function () {
        ui.draggable.remove();
      });     
    }
  });
});

$(function () {
  $(".good5").draggable({
	snapMode:"inner",
	
	
  });
  $(".bad").draggable({
    revert:"invalid",
	snapMode:"inner",
	
  });

  $("#trashCan").droppable({
    activeClass:"ui-state-active",
    hoverClass: "ui-state-active",
    accept:"#three",
    drop: function(event,ui) {
	$(".good5").addClass("disappear3");
      $("#trashCan")
      .addclass("fa-check-circle")
      ui.draggable.fadeOut(function () {
        ui.draggable.remove();
      });     
    }
  });
});


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
