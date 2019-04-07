var quiz = new quizWizard({
    questions: questions,
    targetElement: document.querySelector('#quizWizard')
  });

  debugger;
  
  var quiz1 = new quizWizard({
    questions: questions,
    targetElement: document.querySelector('#quizWizard1')
  });
  debugger;
  
  quiz.initQuiz();
  quiz1.initQuiz();