
//constructor function
function quizWizard(options) {
    this.questionsData = options.questions;
    this.questionsDataLength = this.questionsData.length;
    this.currentQuestion = 0;

    this.targetElement = options.targetElement;
    this.questionElement = this.targetElement.querySelector("[data-question]");
    this.optionsElement = this.targetElement.querySelector("[data-options]");
    this.nextButtonElement = this.targetElement.querySelector("[data-next-quest]");
    this.prevButtonElement = this.targetElement.querySelector("[data-previous-quest]");
}

quizWizard.prototype.renderQuestion = function() {
  var currentQuestion = this.questionsData[this.currentQuestion];
   this.questionElement.innerText = currentQuestion.title;
}

quizWizard.prototype.renderOptions = function() {
  var currentQuestion = this.questionsData[this.currentQuestion];
  var type = currentQuestion.type;
  if(type === 'radiogroup'){
    this.renderRadioSection(currentQuestion.options);
  }
  else if(type === 'dropdown'){
    this.renderDropdownSection(currentQuestion.options);
  }
}


/* Intialize quiz wizard
 ** Render question and options
 ** Bind event handlers
*/
quizWizard.prototype.initQuiz = function(){
    this.renderQuestion();
    this.renderOptions();

    this.nextButtonElement.addEventListener('click', this.next.bind(this));
    this.prevButtonElement.addEventListener('click', this.previous.bind(this));
}



/*
 ** on click of next button
*/
quizWizard.prototype.next = function(){
  if(this.currentQuestion < this.questionsDataLength-1){
    this.currentQuestion++;
    this.renderQuestion();
    this.renderOptions();
  }
}


/*
 ** on click of previous button
*/
quizWizard.prototype.previous = function(){
  if(this.currentQuestion > 0){
    this.currentQuestion--;
    this.renderQuestion();
    this.renderOptions();
  }
}



quizWizard.prototype.renderRadioSection = function(options) {
  var optionsElem = '';
  options.forEach(option => {
    optionsElem += `<input type="radio" group="" name="name"> ${option} </input><br>`;
  });

  this.optionsElement.innerHTML = optionsElem;
}



quizWizard.prototype.renderDropdownSection = function(options) {
  var optionsElem = '';
  options.forEach(option => {
    optionsElem += `<option value='${option}'> ${option} </option><br>`;
  });

  this.optionsElement.innerHTML = `<select>${optionsElem}</select>`;
}




