//Creating the questions for the quiz

var questions = [

  new Question("Where did Michael get the inspiration for sticking out his tongue?",
  ["His Dad", "Fans enjoyed it"], "His Dad"),

  new Question("What number did Jordan have to wear when his jersey was stolen in Orlando?",
  ["12", "45", "6", "10"], "12"),

  new Question("What other NBA Team retired Jordan's number 23 out of respect?",
  ["Charlotte Bobcats", "New Orleans Hornets", "Miami Heat", "Washington Wizards"], "Miami Heat"),

  new Question("What other shoe company was Jordan considering besides Nike?",
  ["Reebok", "Converse", "Addidas", "Peak"], "Addidas"),

  new Question("What draft pick was Michael Jordan?",
  ["3rd", "1st", "5th", "2nd"], "3rd")

];


//Creates the Quiz
var quiz = new Quiz(questions);


//Displays the Quiz
QuizUI.displayNext();
