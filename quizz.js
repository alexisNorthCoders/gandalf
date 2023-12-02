// Define quiz questions and correct answers
const questions = [
    {
      question: "What is Gandalf's primary color?",
      answers: {
        a: "Gray",
        b: "White",
        c: "Brown"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the name of Galdaf's horse?",
      answers: {
        a: "Horsy",
        b: "Legend",
        c: "RickiToni"
      },
      correctAnswer: "c"
    },
    {
      question: "How old is Gandalf?",
      answers: {
        a: "Very old",
        b: "Very youn",
        c: "178 years"
      },
      correctAnswer: "c"
    },
    {
      question: "What is Gandalf's primary color?",
      answers: {
        a: "Gray",
        b: "White",
        c: "Brown"
      },
      correctAnswer: "b"
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
    const answerContainers = quizContainer.querySelectorAll('input[name^="q"]');
    let score = 0;
  
    questions.forEach((currentQuestion, questionNumber) => {
      const selectedOption = answerContainers[questionNumber].value;
      if (selectedOption === currentQuestion.correctAnswer) {
        score++;
      }
    });
  
    resultContainer.innerHTML = `You scored ${score} out of ${questions.length}`;
  }
  
 
  buildQuiz();
  

  submitButton.addEventListener("click", showResults);
  