// JavaScript Document
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function hideWarningMessage(elementId){
  var empty = document.getElementById('empty-error');
  var incorrectPwd = document.getElementById(elementId);
  if(empty.style.display == "block"){
    empty.style.display = "none";
  }
  if (incorrectPwd.style.display == "block"){
    incorrectPwd.style.display = "none";
  }
}


$('.dropdown-toggle').dropdown()