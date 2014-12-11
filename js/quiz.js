$(document).ready(function() {
	var questions = [{questionNo: 1, question: "2 + 3 = ", answers: [6, 4, 5, 7], correct: 2}, 
					{questionNo: 2, question: "6 + 5 = ", answers: [10, 12, 9, 11], correct: 3},
					{questionNo: 3, question: "10 + 4 = ", answers: [15, 14, 11, 13], correct: 1},
					{questionNo: 4, question: "15 + 6 = ", answers: [23, 25, 20, 21], correct: 3},
					{questionNo: 5, question: "20 - 7 = ", answers: [13, 12, 14, 11], correct: 0},
					{questionNo: 6, question: "14 + 6 = ", answers: [21, 19, 18, 20], correct: 3},
					{questionNo: 7, question: "15 - 4 = ", answers: [13, 14, 11, 12], correct: 2},
					{questionNo: 8, question: "9 + 6 = ", answers: [15, 16, 14, 13], correct: 0},
					{questionNo: 9, question: "7 - 7 = ", answers: [14, 15, 7, 0], correct: 3},
					{questionNo: 10, question: "18 - 4 = ", answers: [15, 14, 13, 16], correct: 1}];

    var correctAnswersCount = 0;
    var currentQuestion = 0;
    var attemptCount = 1;
    $("#questionContainer").on("click", "#submit", function () {
    	if(checkAnswer()) { 
	        currentQuestion++;
	        nextQuestion();
    	}
    });

    $("#questionContainer").on("click", "#retry", function () {
    	location.reload();
    });

	function checkAnswer() {
		var isAnswerCorrect = true;
        var answer = +$("input[type='radio']:checked").val();
        if (answer == questions[currentQuestion].correct) {
        	$("#fadeContainer").css("visibility", "visible");
        	$("#fadeContainer").fadeIn(1000);
        	$("#fadeContainer").delay(1000);
        	$("#fadeContainer").fadeOut(1000);
        	$("#numberCorrect").append("<img src='images/star.png'/>");
        	correctAnswersCount++;    
        }
        else {
        	attemptCount++;
        	isAnswerCorrect = false;
        	alert("OOPS WRONG answer, TRY Again");
        }
        return isAnswerCorrect;
    }

    function nextQuestion() {
        if (currentQuestion < 10) {
            $(".question").remove();
            $("#answerContainer input").remove();
            $("#answerContainer span").remove();
			var newQuestion = '<span class="question">' + questions[currentQuestion].questionNo + ') ' + questions[currentQuestion].question+'</span><br><div id="answerContainer"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].answers[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].answers[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].answers[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].answers[3]+'</span><br></div><div id="submitContainer"><input type="button" class="button" id="submit" value="Submit Answer"><input type="button" class="button" id="retry" value="Retry Quiz"></div>';
            $("#questionContainer").html(newQuestion);
        }
        else {
            $(".question").remove();
            $("#answerContainer input").remove();
            $("#answerContainer span").remove();
			$("#submit").css("display", "none");
           
            var finalScore = "";
        	if(attemptCount = 1) {
        		finalScore = '<img style="margin-top: -50px" src="images/good_job_1.jpg"/><br/><span id="final">' + correctAnswersCount +' out of 10 questions were correct in 1 attempt.</span>';
            	$("#answerContainer").html(finalScore);
            }
            else {
            	finalScore = '<img style="margin-top: -50px" src="images/good_job_1.jpg"/><br/><span id="final"> '+ correctAnswersCount +' out of 10 questions were correct with ' + attemptCount + ' missed attempts. </span>';
            	$("#answerContainer").html(finalScore);
        	}
           
        }
    }
});