function Quiz () {
  this.questions = [];
  this.currentQuestionIndex = 0;
  this.score = 0;
}

Quiz.prototype.addQuestion = function(question) {
  this.questions.push(question); 
}

Quiz.prototype.renderInElement = function (){
 document.getElementById("question").innerHTML = `${this.questions[this.currentQuestionIndex].question}`;
 document.getElementById("choice0").innerHTML = `${this.questions[this.currentQuestionIndex].choice0}`;
 document.getElementById("choice1").innerHTML = `${this.questions[this.currentQuestionIndex].choice1}`;
 document.getElementById("progress").innerHTML = `Question ${this.currentQuestionIndex + 1} of ${this.questions.length}`;
}

Quiz.prototype.checkAnswer = function(answerNumber) {
  if (answerNumber === this.questions[this.currentQuestionIndex].correctAnswer) {
    this.score++
  }
    this.nextQuestion();
}

Quiz.prototype.nextQuestion = function() {
  this.currentQuestionIndex++;
  if (this.currentQuestionIndex === this.questions.length) {
    document.getElementById('quiz').innerHTML = `<p>Quiz is over. You got ${this.score} out of ${this.questions.length}.`;
  } else {
    this.renderInElement();
  }
}
