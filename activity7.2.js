// JavaScript Document

document.getElementById('buttons').addEventListener('click', function(evt) {
  var target = evt.target;
  if (target.id === 'yes') {
$("#how1").show();

    
  } else if(target.id === 'no') {
$("#how1").hide();
$("#buttons").hide();	 
  }
});


document.getElementById('buttons1').addEventListener('click', function(evt) {
  var target = evt.target;
  if (target.id === 'yes1') {
$("#how2").show();

    
  } else if(target.id === 'no1'){
$("#how2").hide();
$("#buttons1").hide();
  }
});