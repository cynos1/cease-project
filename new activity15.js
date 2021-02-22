// JavaScript Document
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



 var quiztitle = "Is this a myth or fact ?";

    /**
    * Set the information about your questions here. The correct answer string needs to match
    * the correct choice exactly, as it does string matching. (case sensitive)
    *
    */
    var quiz = [ 
		{
            "question"      :   "Nicotine Replacement Therapy (NRT) does not work.",
            "image"         :   "",
            "choices"       :   [
                                    "Fact",
                                    "Myth"
                                ],
            "correct"       :   "Myth",
            "explanation"   :   "NRT can double a smoker's chances of quitting smoking.",
        },
		{
            "question"      :   "I can't use NRT with any other products to help me quit.",
            "image"         :   "",
            "choices"       :   [
                                    "Fact",
                                    "Myth"
                                ],
            "correct"       :   "Myth",
            "explanation"   :   "NRT products can be used safely together. Some people find using more than one NRT product at a time to be useful to handle withdrawal symptoms and fight off cravings. Talk to your doctor before doing so.",
        },
		{
            "question"      :   "I cannot afford NRT.",
            "image"         :   "",
            "choices"       :   [
                                    "Fact",
                                    "Myth"
                                ],
            "correct"       :   "Myth",
            "explanation"   :   "The cost of NRT is less expensive than the cost of cigarettes in the long run. People often smoke cigarettes for years, whereas NRT is generally used for a limited time.",
        },
		{
            "question"      :   "NRT will eliminate my withdrawal symptoms.",
            "image"         :   "",
            "choices"       :   [
                                    "Fact",
                                    "Myth"
                                ],
            "correct"       :   "Myth",
            "explanation"   :   "NRT reduces withdrawal symptoms associated with cigarette smoking such as irritability, frustration, anger, craving, hunger, anxiety, difficulty concentrating, restlessness, and insomnia. However, it may not completely eliminate them",
        },
		{
            "question"      :   "I can still get addicted to NRT, so I would be replacing my tobacco addiction with an NRT addiction.",
            "image"         :   "",
            "choices"       :   [
                                    "Fact",
                                    "Myth"
                                ],
            "correct"       :   "Fact",
            "explanation"   :   "The products are different, and the chance of long-term addiction to NRT is very low. NRT provides lower, more controlled doses of nicotine in comparison to cigarettes, and has a much lower risk of addiction than cigarettes.",
        },
		{
            "question"      :   "NRT is as harmful as cigarettes",
            "image"         :   "",
            "choices"       :   [
                                    "Fact",
                                    "Myth"
                                ],
            "correct"       :   "Myth",
            "explanation"   :   "The effect of NRT on the body is not fully known, but NRT products are safer than cigarettes and have few or no side effects. Most of the harm from smoking is from the thousands of chemicals found in cigarettes rather than nicotine. Using NRT instead of cigarettes reduces the exposure to many chemicals found in tobacco smoke.",
        },
		{
            "question"      :   "Only healthy people can use NRT",
            "image"         :   "",
            "choices"       :   [
                                    "Fact",
                                    "Myth"
                                ],
            "correct"       :   "Myth",
            "explanation"   :   "Under the direction of the doctor, most people can use NRT. Generally, NRT can be safely used by people with diabetes or high blood pressure and does not increase the risk of heart attacks. People with these conditions should consult with the doctor to determine if NRT is the right choice for them.",
        },
		{
            "question"      :   "I can get NRT without a prescription.",
            "image"         :   "",
            "choices"       :   [
                                    "Fact",
                                    "Myth"
                                ],
            "correct"       :   "Fact",
            "explanation"   :   "Some NRT products require a prescription (nasal spray and nicotine inhaler), but some are available over the counter (nicotine gum, nicotine patch, and lozenges).",
        },
		{
            "question"      :   "Nicotine will cause my teeth and fingers to turn yellow.",
            "image"         :   "",
            "choices"       :   [
                                    "Fact",
                                    "Myth"
                                ],
            "correct"       :   "Myth",
            "explanation"   :   "It is the tar found in cigarettes that causes the yellowing of teeth and fingernails; not the nicotine",
        },
        {
            "question"      :   "NRT products are regulated by the Federal Drug Administration (FDA).",
            "image"         :   "",
            "choices"       :   [
                                    "Fact",
                                    "Myth"
                                ],
            "correct"       :   "Fact",
            "explanation"   :   "FDA-approved NRTs are designed to reduce symptoms of nicotine withdrawal and help adults quit smoking by delivering small amounts of nicotine to the brain without the toxic chemicals present in cigarette smoke.",
        },

    ];


    /******* No need to edit below this line *********/
    var currentquestion = 0, submt=true, picked;

    jQuery(document).ready(function($){

        /**
         * HTML Encoding function for alt tags and attributes to prevent messy
         * data appearing inside tag attributes.
         */
        function htmlEncode(value){
          return $(document.createElement('div')).text(value).html();
        }

        /**
         * This will add the individual choices for each question to the ul#choice-block
         *
         * @param {choices} array The choices from each question
         */
        function addChoices(choices){
            if(typeof choices !== "undefined" && $.type(choices) == "array"){
                $('#choice-block').empty();
                for(var i=0;i<choices.length; i++){
                    $(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#choice-block');                    
                }
            }
        }
        
        /**
         * Resets all of the fields to prepare for next question
         */
        function nextQuestion(){
            submt = true;
            $('#explanation').empty();
            $('#question').text(quiz[currentquestion]['question']);
            $('#pager').text('Question ' + Number(currentquestion + 1) + ' of ' + quiz.length);
            if(quiz[currentquestion].hasOwnProperty('image') && quiz[currentquestion]['image'] != ""){
                if($('#question-image').length == 0){
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

        /**
         * After a selection is submitted, checks if its the right answer
         *
         * @param {choice} number The li zero-based index of the choice picked
         */
        function processQuestion(choice){
            if(quiz[currentquestion]['choices'][choice] == quiz[currentquestion]['correct']){
                $('.choice').eq(choice).css({'background-color':'#50D943'});
                $('#explanation').html('<strong>Correct!</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
            } else {
                $('.choice').eq(choice).css({'background-color':'#D92623'});
                $('#explanation').html('<strong>Incorrect!</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
            }
            currentquestion++;
            $('#submitbutton').html('SUBMIT &raquo;').on('click', function(){
                if(currentquestion == quiz.length){
                    endQuiz();
                } else {
                    $(this).text('Check Answer').css({'color':'#222'}).off('click');
                    nextQuestion();
                }
            })
        }
		function endQuiz(){
			window.location.replace("activity6.1.html")
		}

        /**
         * Sets up the event listeners for each button.
         */
        function setupButtons(){
            $('.choice').on('mouseover', function(){
                $(this).css({'background-color':'#e1e1e1'});
            });
            $('.choice').on('mouseout', function(){
                $(this).css({'background-color':'#fff'});
            })
            $('.choice').on('click', function(){
                picked = $(this).attr('data-index');
                $('.choice').removeAttr('style').off('mouseout mouseover');
                $(this).css({'border-color':'#222','font-weight':700,'background-color':'#c1c1c1'});
                if(submt){
                    submt=false;
                    $('#submitbutton').css({'color':'#000'}).on('click', function(){
                        $('.choice').off('click');
                        $(this).off('click');
                        processQuestion(picked);
                    });
                }
            })
        }
        
        /**
         * Quiz ends, display a message.
         
        function endQuiz(){
            $('#explanation').empty();
            $('#question').empty();
            $('#choice-block').empty();
            $('#submitbutton').remove();
            $('#question').text("You got " + score + " out of " + quiz.length + " correct.");
            $(document.createElement('h2')).css({'text-align':'center', 'font-size':'4em'}).text(Math.round(score/quiz.length * 100) + '%').insertAfter('#question');
        }

        /**
         * Runs the first time and creates all of the elements for the quiz
         */
        function init(){
            //add title
            if(typeof quiztitle !== "undefined" && $.type(quiztitle) === "string"){
                $(document.createElement('h1')).text(quiztitle).appendTo('#frame');
            } else {
                $(document.createElement('h1')).text("Quiz").appendTo('#frame');
            }

            //add pager and questions
            if(typeof quiz !== "undefined" && $.type(quiz) === "array"){
                //add pager
                $(document.createElement('p')).addClass('pager').attr('id','pager').text('Question 1 of ' + quiz.length).appendTo('#frame');
                //add first question
                $(document.createElement('h2')).addClass('question').attr('id', 'question').text(quiz[0]['question']).appendTo('#frame');
                //add image if present
                if(quiz[0].hasOwnProperty('image') && quiz[0]['image'] != ""){
                    $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[0]['image']).attr('alt', htmlEncode(quiz[0]['question'])).appendTo('#frame');
                }
                $(document.createElement('p')).addClass('explanation').attr('id','explanation').html('&nbsp;').appendTo('#frame');
            
                //questions holder
                $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame');
            
                //add choices
                addChoices(quiz[0]['choices']);
            
                //add submit button
                $(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Check Answer').css({'font-weight':700,'color':'#222','padding':'30px 0'}).appendTo('#frame');
            
                setupButtons();
            }
        }
        
        init();
    });