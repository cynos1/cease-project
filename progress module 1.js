// JavaScript Document
$(function() {
  $('.chart').easyPieChart({
    size: 160,
    barColor: "#c52348",
    scaleLength: 0,
    lineWidth: 15,
    trackColor: "#373737",
    lineCap: "circle",
    animate: 2000,
  });
	$('.chart1').easyPieChart({
    size: 160,
    barColor: "#89287c",
    scaleLength: 0,
    lineWidth: 15,
    trackColor: "#373737",
    lineCap: "circle",
    animate: 2000,
  });
	$('.chart2').easyPieChart({
    size: 160,
    barColor: "#005d9b",
    scaleLength: 0,
    lineWidth: 15,
    trackColor: "#373737",
    lineCap: "circle",
    animate: 2000,
  });
});

var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}
