// JavaScript Document
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


function blink(){
    $('.help-tip').delay(1000).fadeTo(100,0.5).delay(1000).fadeTo(100,1, blink);
}

$(document).ready(function() {
    blink();
});


var quiztitle = "QUIZ 2";

    /**
    * Set the information about your questions here. The correct answer string needs to match
    * the correct choice exactly, as it does string matching. (case sensitive)
    *
    */
    var quiz = [
        {
            "question"      :   "Barriers to quitting may be",
            "choices"       :   [
                                    "Physical.",
                                    "Emotional.",
									"Behavioural.",
									"All of the above.",
									"None of the above."
                                ],
            "correct"       :   "All of the above.",
            "explanation"   :   "",
        },
        {
            "question"      :   "Which of the following is NOT a nicotine withdrawal symptom?",
            "image"         :   "",
            "choices"       :   [
                                    "Flu-like symptoms.",
                                    "Sleep disturbance.",
									"Increased appetite.",
									"Frustration.",
									"Improved concentration."
                                ],
            "correct"       :   "Improved concentration.",
            "explanation"   :   "",
        },
		{
            "question"      :   "Managing cravings involves",
            "image"         :   "",
            "choices"       :   [
                                    "Knowing your triggers and when they occur.",
                                    "Avoiding daily activities such as eating, drinking and socializing.",
									"Not mindful of situations and times of the day that make you want to smoke.",
									"Socializing with friends who smoke.",
									"Focusing your thoughts on your cravings."
                                ],
            "correct"       :   "Knowing your triggers and when they occur.",
            "explanation"   :   "",
        },
		{
            "question"      :   "Choose the accurate statement below:",
            "image"         :   "",
            "choices"       :   [
                                    "Coffee and alcohol may be triggers for smoking.",
                                    "Triggers cannot be tied to activities such as working, driving, or studying.",
									"Smoking is addictive but is not tied with your everyday life.",
									"It is easy to change a behaviour that is associated with your daily activities.",
									"Triggers can only occur at certain times of the day and not others."
                                ],
            "correct"       :   "Coffee and alcohol may be triggers for smoking.",
            "explanation"   :   "",
        },
        {
            "question"      :   "Which of the following is NOT a personal belief?",
            "image"         :   "",
            "choices"       :   [
                                    "'Smoking helps me relax.'",
                                    "'It's cool to smoke!",
									"'Smoking is highly addictive.'",
									"'Smoking keeps my weight down.'"
                                ],
            "correct"       :   "'Smoking is highly addictive.'",
            "explanation"   :   "",
        },

    ];

var currentquestion = 0,
     score = 0,
     submt = true,
     picked;

 jQuery(document).ready(function ($) {


     function htmlEncode(value) {
         return $(document.createElement('div')).text(value).html();
     }


     function addChoices(choices) {
         if (typeof choices !== "undefined" && $.type(choices) == "array") {
             $('#choice-block').empty();
             for (var i = 0; i < choices.length; i++) {
                 $(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#choice-block');
             }
         }
     }

     function nextQuestion() {
         submt = true;
         $('#explanation').empty();
         $('#question').text(quiz[currentquestion]['question']);
         $('#pager').text('Question ' + Number(currentquestion + 1) + ' of ' + quiz.length);
         if (quiz[currentquestion].hasOwnProperty('image') && quiz[currentquestion]['image'] != "") {
             if ($('#question-image').length == 0) {
                 $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question'])).insertAfter('#question');
             } else {
                 $('#question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question']));
             }
         } else {
             $('#question-image').remove();
         }
         addChoices(quiz[currentquestion]['choices']);
         setupButtons();


     }


     function processQuestion(choice) {
         if (quiz[currentquestion]['choices'][choice] == quiz[currentquestion]['correct']) {
             $('.choice').eq(choice).css({
                 'background-color': '#50D943'
             });
             $('#explanation').html('<strong><center>Correct!</center></strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
             score++;
         } else {
             $('.choice').eq(choice).css({
                 'background-color': '#D92623'
             });
             $('#explanation').html('<strong>Incorrect.</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
         }
         currentquestion++;
         $('#submitbutton').html('Submit &raquo;').on('click', function () {
             if (currentquestion == quiz.length) {
                 endQuiz();
             } else {
                 $(this).text('Check Answer').css({
                     'color': '#222'
                 }).off('click');
                 nextQuestion();
             }
         })
     }


     function setupButtons() {
         $('.choice').on('mouseover', function () {
             $(this).css({
                 'background-color': '#e1e1e1'
             });
         });
         $('.choice').on('mouseout', function () {
             $(this).css({
                 'background-color': '#fff'
             });
         })
         $('.choice').on('click', function () {
             picked = $(this).attr('data-index');
             $('.choice').removeAttr('style').off('mouseout mouseover');
             $(this).css({
                 'border-color': '#222',
                 'font-weight': 700,
                 'background-color': '#c1c1c1'
             });
             if (submt) {
                 submt = false;
                 $('#submitbutton').css({
                     'color': '#000'
                 }).on('click', function () {
                     $('.choice').off('click');
                     $(this).off('click');
                     processQuestion(picked);
                 });
             }
         })
     }


     function endQuiz() {
         $('#explanation').empty();
         $('#question').empty();
         $('#choice-block').empty();
         $('#submitbutton').remove();
         $('#question').text("You got " + score + " out of " + quiz.length + " correct.");
         $(document.createElement('h2')).css({
             'text-align': 'center',
             'font-size': '4em'
         }).text(Math.round(score / quiz.length * 100) + '%').insertAfter('#question');
if (score >= 4){
	//setTimeout(function(){location.href="new activity 9.html"},5000);
	$("#navigation"). hide();
	$("#passed").show();
	}
	else{
		$("#navigation").show();
		$("#passed"). hide();
		
	//setTimeout(function(){location.href="disclaimer.html"},5000);/*disclaimer page that redirects to the modules.html after 10secs*/
	}
}
	

     function init() {
         //add title
         if (typeof quiztitle !== "undefined" && $.type(quiztitle) === "string") {
             $(document.createElement('h1')).text(quiztitle).appendTo('#frame');
         } else {
             $(document.createElement('h1')).text("Quiz").appendTo('#frame');
         }

         //add pager and questions
         if (typeof quiz !== "undefined" && $.type(quiz) === "array") {
             //add pager
             $(document.createElement('p')).addClass('pager').attr('id', 'pager').text('Question 1 of ' + quiz.length).appendTo('#frame');
             //add first question
             $(document.createElement('h2')).addClass('question').attr('id', 'question').text(quiz[0]['question']).appendTo('#frame');
             //add image if present
             if (quiz[0].hasOwnProperty('image') && quiz[0]['image'] != "") {
                 $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[0]['image']).attr('alt', htmlEncode(quiz[0]['question'])).appendTo('#frame');
             }
             $(document.createElement('p')).addClass('explanation').attr('id', 'explanation').html('&nbsp;').appendTo('#frame');

             //questions holder
             $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame');

             //add choices
             addChoices(quiz[0]['choices']);

             //add submit button
             $(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Check Answer').css({
                 'font-weight': 700,
                 'color': '#222',
                 'padding': '30px 0'
             }).appendTo('#frame');

             setupButtons();
         }
     }

     init();
 });


   