function Question(text, choices, answer) {
  // body...
  this.text = text;
  this.choices = choices;
  this.answer = answer;
};

Question.prototype.isCorrectAnswer = function(choice) {

  return this.answer === choice;

};
