let quiz = new Quiz();

const question0 = new Question("What is my first name?", "David", "Daniel", 0);
const question1 = new Question("What is my last name?", "Smith", "Lacho", 1);

quiz.addQuestion(question0);
quiz.addQuestion(question1);

quiz.renderInElement();

let button0 = document.getElementById("guess0");
let button1 = document.getElementById("guess1");

button0.onclick = function () {
  quiz.checkAnswer(0); 
}

button1.onclick = function () {
  quiz.checkAnswer(1); 
}