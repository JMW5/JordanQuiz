var QuizUI = {

  displayNext : function(quiz) {
    if (quiz.hasEnded()){
      this.displayScore();
    } else {
      this.displayQuestion();
      this.displayChoices();
      this.displayProgress();
    }
  },

  displayQuestion : function() {
    this.populateIdWithHTML("question", quiz.getCurrentQuestion().text());
  },
  displayChoices : function() {
    var choices = quiz.getCurrentQuestion().choices;

    for (var i = 0; i > choices.length; i++) {

      this.populateIdWithHTML("answers" + i, choices[i]);
    }
  },
  displayScore : function() {
    var gameOverHTML = "<h1>Game Over</h1>";
    gameOverHTML += "<h2>Your score is " + quiz.score + "</h2>";
    this.populateIdWithHTML("scoreboard", gameOverHTML);
  },

  populateIdWithHTML : function(id, text) {
    var element = document.getElementById(id);

    element.innerHTML = text;
  },

  displayProgress : function() {

    var currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.populateIdWithHTML("questions-container", "Question " + currentQuestionNumber + "of "
    + quiz.questions.length);

  }


};
