// JavaScript Document
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


var quiztitle = "QUIZ 3";

    /**
    * Set the information about your questions here. The correct answer string needs to match
    * the correct choice exactly, as it does string matching. (case sensitive)
    *
    */
    var quiz = [
        {
            "question"      :   "According to the Health Belief Model, you will be more likely to stop smoking if you:",
            "choices"       :   [
                                    "Believe that you could get a smoking-related disease and this worries you.",
                                    "Believe that you will make an honest attempt at quitting smoking.",
									"Believe that the benefits of quitting outweigh the benefits of continuing to smoke.",
									"Know people who have had health problems as a result of their smoking.",
									"All of the above."
                                ],
            "correct"       :   "All of the above.",
            "explanation"   :   "",
        },
        {
            "question"      :   "The stages of behavior change includes which of the following stages?",
            "image"         :   "",
            "choices"       :   [
                                    "Contemplation.",
                                    "Pre-consideration.",
									"Mentoring.",
									"Relapsing.",
									"Desiring."
                                ],
            "correct"       :   "Contemplation.",
            "explanation"   :   "",
        },
		{
            "question"      :   "The stages of behavior change includes all of the following stages EXCEPT",
            "image"         :   "",
            "choices"       :   [
                                    "Pre-contemplation.",
                                    "Post-consideration.",
									"Preparation.",
									"Action.",
									"Maintenance."
                                ],
            "correct"       :   "Post-consideration.",
            "explanation"   :   "",
        },
		{
            "question"      :   "Which of the following is false about behavior change to quit smoking?",
            "image"         :   "",
            "choices"       :   [
                                    "Pre-contemplation: The smoker is seriously thinking about quitting.",
                                    "Contemplation: The smoker thinks about it but is not serious.",
									"Preparation: The smoker has a plan and plans to quit next month.",
									"Action: The first six months when the smoker is actively quitting.",
									"Maintenance: The period when the ex-smoker takes steps to avoid relapse."
                                ],
            "correct"       :   "Pre-contemplation: The smoker is seriously thinking about quitting.",
            "explanation"   :   "",
        },
        {
            "question"      :   "Which of the following statements is true about behavior change for quitting smoking?",
            "image"         :   "",
            "choices"       :   [
                                    "It is not common to have mixed emotions about your desire to quit smoking.",
                                    "There will never be a time when you wonder if you made the right decision.",
									"Remembering your motivations to quit will not help you handle your mixed feelings about quitting.",
									"There may be times when the idea of quitting has no appeal.",
									"Thinking about Living a healthier life will not motivate you to quit smoking."
                                ],
            "correct"       :   "There may be times when the idea of quitting has no appeal.",
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
             $('#explanation').html('<strong>Correct!</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
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
	//setTimeout(function()//{location.href="pathi.html//"},5000);
	$("#navigation").hide();
	$("#passed").show();
	}
	else{
		$("#navigation").show();
		$("#passed").hide();
	/*setTimeout(function(){location.href="disclaimer3.html"},5000);/*disclaimer page that redirects to the modules.html after 10secs*/
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


   