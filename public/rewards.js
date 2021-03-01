// JavaScript Document

$(document).ready(function (){
  
  //Variable declarations that use or refer to jquery should be INSIDE the ready function to make sure jquery is instanciated. 
   //notice the different declaration…
  
  $reward = $('select[name="reward"]');
  $date = $('input[name="date"]');
  $goal = $('select[name="goal"]');
  
  var formatDate = function(d) {
    //2014-07-09
     d = d.split('-');//Since we know the value comes yyyy-mm-dd…
    
    var dt = new Date(d[0],d[1],d[2]);//Note: The month is off by +1 - for JS Date object, 
    
    var formattedDate = "";
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];//Now we can get the month like this:
    
    formattedDate += months[ dt.getMonth()-1 ]; //Months are 0-11 for getDate

    var formattedDay;//We are gonna store the formatted day here.
    
    switch( d[2].substring(1) ) {//We can use the string of the day (dd format) to access the last number, which determines what we append...
      case '1':
        formattedDay = parseInt(d[2]) + "st"; //1st, 21st, etc
        break;        
      case '2':
        formattedDay = parseInt(d[2]) + "nd"; //2nd
        break;        
      case '3':
        formattedDay = parseInt(d[2]) + "rd"; //etc…
        break;  
      default:
        formattedDay = parseInt(d[2]) + "th";
    }
    //Add a space and the day, now correctly appended
    formattedDate += ' ' + formattedDay;
    //Return nice formatted date!
    return formattedDate;
  }
  
  //Notice the $varname - Now each of these is is a jquery object corresponding to the DOM element and can be used to call the .val() method directly at any time. The way you had it before would only grab the value at the time of the declarations - ie before the values are set.
  
  $('#button').click(function () {
    // Making it always add a icon in the type row
    var type_icon; //Store the html fragment to a variable when needed.
    if ($goal.val() == 'meal') {
      type_icon = "1 week";
    } else if ($goal.val() == 'movie') {
      type_icon = "2 weeks";
    } else if ($goal.val() == 'footsies') {
      type_icon = "1 month";
    } else if ($goal.val() == 'class') {
      type_icon = "3 months";
    }else if ($goal.val() == 'bill') {
      type_icon = "6 months";
	}else if ($goal.val() == 'trip') {
      type_icon = "1 year";
	}
    var form_validated = true;
    //Add your validation tests, have them set form_validated to false if they fail
    //TODO
    
    if(form_validated) {
      //Now we can use our references we made before
      $("table tr:first").after('<tr><td>'+type_icon+'</td><td>'+($date.val())+'</td><td>'+()+'</td></tr>');
      $date.val(null);
      
   // the empty bracket is for rewards that will pop up... but how?
      $("#if-empty").remove();
		
    }
  });
  
});