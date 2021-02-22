// JavaScript Document
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function save(){
	var a = document.getElementById("fname").value;
	if (a != null)
		{
			document.getElementById("instruction").innerHTML = "Select all that apply."
			document.getElementById("answer").innerHTML = a + " will help me with: ";
			$("#who").show();
			document.getElementById("answer").style.color="#efa82c";
			document.getElementById("instruction").style.fontStyle=" italic";
		}
	//"this.style.visibility= 'hidden';
	}