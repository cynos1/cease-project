// JavaScript Document
function speak(obj) {
  var speaking = $().articulate('isSpeaking');
  var paused = $().articulate('isPaused');
  
  // This is how you can use one button for a speak/pause toggle
  // Is browser speaking? (This returns 'true' even when paused)
  // If it is, is speaking paused? If paused, then resume; otherwise pause
  // If it isn't, then initiate speaking

  if (speaking) {
    if (paused) {
      $().articulate('resume');
    } else {
      $().articulate('pause');
    }
  } else {
    $(obj).articulate('speak');
  }
}

function stop() {
  $().articulate('stop');
}

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length -1) ) {
	//document.getElementsById("nextBtn").style.display = "none";
	//document.getElementById("prevBtn").style.display = "none";
    document.getElementById("nextBtn").innerHTML = "Next";
	//document.getElementById("prevBtn").innerHTML = "Repeat Tryout"
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
	
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  
  if (n == 1 && !validateForm()) return false;{
	x[currentTab].style.display = "none";
	currentTab = currentTab + n;
  }
	
  // Increase or decrease the current tab by 1:
  //currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("survey-form").submit();
	
    return false;
  }
	else{
		showTab(currentTab);
	}
  // Otherwise, display the correct tab:
}


function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = true;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}









 






function myfunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myfunction1() {
  var x = document.getElementById("myDIV1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function myfunction2() {
  var x = document.getElementById("myDIV2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function repeat(){
	location.replace("activity6.1.html")
}

function continues(){
	location.replace("realquit.html")
}

/*$(document).ready(function(){
  $("#radio1").click(function(){
    $("#radio2").find('input,textarea').prop('disabled', true);
	$("#radio1").show().find('input,textarea').prop('disabled', false);
  });
  $("#radio2").click(function(){
    $("#radio1").find('input,textarea').prop('disabled', true);
$("#radio2").show().find('input,textarea').prop('disabled', false);
  });
});
*/


var timer;
function settimer()
{
	clearInterval(timer);
	var timer_date = document.getElementById()
}










  
