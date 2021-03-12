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

var quiztitle = "QUIZ 1";

    /**
    * Set the information about your questions here. The correct answer string needs to match
    * the correct choice exactly, as it does string matching. (case sensitive)
    *
    */
    var quiz = [
        {
            "question"      :   "Harmful chemicals are found in which of these process steps of tobacco products?",
            "choices"       :   [
                                    "Growing of tobacco plant.",
                                    "Manufacturing the tobacco product.",			                    "Lighting up the cigarette.",
									"Using the tobacco product.",
									"All of the above."
                                ],
            "correct"       :   "All of the above.",
            "explanation"   :   "",
        },
        {
            "question"      :   "Which of the following statements is TRUE about growing tobacco?",
            "image"         :   "",
            "choices"       :   [
                                    "It contains nicotine which is highly addictive, changes the brain, and causes cravings.",
                                    "Heavy metals are not found in the soil where tobacco is grown.",
									"Fertilizers contain nitrates which cannot enter the tobacco.",
									"Natural, organic or addictive-free cigarettes are safer alternatives to traditional cigarretttes.",
									"Harmful chemicals that build up in the growing plant do not escape when you light up."
                                ],
            "correct"       :   "It contains nicotine which is highly addictive, changes the brain, and causes cravings.",
            "explanation"   :   "",
        },
		{
            "question"      :   "Identify the error below: The tobacco manufacturing progress uses dangerous chemicals to",
            "image"         :   "",
            "choices"       :   [
                                    "Control moisture in cigarettes.",
                                    "Promote health through cigarettes.",
									"Enhance flavour of cigarettes.",
									"Reduce harshness of cigarettes.",
									"Increase addiction to cigarettes."
                                ],
            "correct"       :   "Promote health through cigarettes.",
            "explanation"   :   "",
        },
		{
            "question"      :   "Which of the following statements is FALSE about using tobacco products?",
            "image"         :   "",
            "choices"       :   [
                                    "Burning a cigarette produces new harmful chemicals not found in prior processing stages.",
                                    "Inhaling carbon monoxide can lead to heart damage.",
									"Lighting up a cigarette can release chemicals harmful to the reproductive system.",
									"Most chemicals released during cigarette lighting are non-cancer causing.",
									"It is possible to reverse the lung damage caused by chemicals released by a lit cigarette."
                                ],
            "correct"       :   "Most chemicals released during cigarette lighting are non-cancer causing.",
            "explanation"   :   "",
        },
        {
            "question"      :   "Which of the following chemicals is NOT found in cigarettes?",
            "image"         :   "",
            "choices"       :   [
                                    "Acetone: found in nail polish remover.",
                                    "Arsenic: found in rat poison.",
									"Detergent: used for laundry.",
									"Tolulene: used to manufacture paint."
                                ],
            "correct"       :   "Detergent: used for laundry.",
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
			/*setTimeout(function(){location.href="new activity 2.html"},5000);after score of 80 and 100% comes up, in 5secs it goes to a new page*/
		/*document.getElementById("navigation").style.display="none";*/
		$("#passed").show();
		$("#navigation").hide();
			}
	else {
		$("#navigation").show();
		$("#passed").hide();
	/*document.getElementById("navigation").style.display= "block";*/
		/*setTimeout(function(){location.href="disclaimer.html"}, 5000);/*disclaimer page that redirects to the modules.html after 10secs */
		
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


   