
const questions = [
    {
      question: "What is Gandalf's primary color?",
      answers: {
        a: "Gray",
        b: "White",
        c: "Brown"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the name of Galdaf's horse?",
      answers: {
        a: "Lightfax",
        b: "Shadowfax",
        c: "Moonfax"
      },
      correctAnswer: "b"
    },
    {
      question: "How old is Gandalf?",
      answers: {
        a: "Immortal",
        b: "Centuries Old",
        c: "Over 2000 years"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the name of Gandalf's sword?",
      answers: {
        a: "Gray",
        b: "Glamdring",
        c: "Brown"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the name of Gandalf's Elvish ring?",
      answers: {
        a: "Narya, the Ring of Fire",
        b: "Nenya, the Ring of Water",
        c: "Vilya, the Ring of Air"
      },
      correctAnswer: "a"
    },
    {
      question: "Which creature does Gandalf confront in the depths of Moria?",
      answers: {
        a: "Giant spider",
        b: "Orc chieftain",
        c: "The Balrog"
      },
      correctAnswer: "c"
    },
    {
      question: "In the Battle of the Five Armies, what tactical advice does Gandalf give to the allied forces?",
      answers: {
        a: "To unite against their common enemy",
        b: "Retreat to safety",
        c: "Attack the Elves"
      },
      correctAnswer: "a"
    },
  
  ];
  
  const quizContainer = document.getElementById("quiz-container");
  const submitButton = document.getElementById("submit-button");
  const resultContainer = document.getElementById("result");
  

  function buildQuiz() {
    let output = '';
    questions.forEach((currentQuestion, questionNumber) => {
      output += `<div class="question"><h3>Question ${questionNumber + 1}</h3>`;
      output += `<p>${currentQuestion.question}</p>`;
      for (const letter in currentQuestion.answers) {
        output += `<label><input type="radio" name="q${questionNumber}" value="${letter}"> ${currentQuestion.answers[letter]}</label><br>`;
      }
      output += `</div>`
    });
    quizContainer.innerHTML = output;
  }
 
 
  function showResults() {
      
    let score = 0;
  
    questions.forEach((currentQuestion, questionNumber) => {
      const answerSelector = `input[name="q${questionNumber}"]:checked`;
      const selectedOption = (quizContainer.querySelector(answerSelector) || {}).value;
  
      if (selectedOption === currentQuestion.correctAnswer) {
        score++;
      }})
    
  
    resultContainer.innerHTML = `You scored ${score} out of ${questions.length}`;
  }
  
 
  buildQuiz();
  

  submitButton.addEventListener("click", showResults);

