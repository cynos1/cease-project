// JavaScript Document
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Hide Error
function hideError(){
  var incorrectPwd = document.getElementById("incorrectpwd");
  if (incorrectPwd.style.display == "block"){
    incorrectPwd.style.display = "none";
  }
}

//show code
function showpassword() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

//function openmessage(){
	//document.getElementById("popupmessage").style.display="block";
//}
//function closemessage(){
	//document.getElementById("popupmessage").style.display="none";
	//window.location.href="modulesurvey.html";
//}