const questions = [
  {
    question: "What is the capital of Utah?",
    options: ["Salt Lake", "Las Vegas", "Berlin"],
    correctAnswer: "Salt Lake"
  },

  {
    question: "What is the name?",
    options: ["name", "Bob"],
    correctAnswer: "Bob"
  }
];

let currentQuestion = 0;
let score = 0;
let timeRemaining = 60;
let timerInterval;



function showQuestion() {
  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");

  questionContainer.textContent = questions[currentQuestion].question;
  optionsContainer.innerHTML = "";

  questions[currentQuestion].options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer();
    optionsContainer.appendChild(button);
  });
}

function checkAnswer() {
  if (answer === questions[currentQuestion].correctAnswer) {
    score++;
    document.getElementById("result-text").innerHTML = "correct"
    document.getElementById('score').innerHTML = `Score: ${score}`;
  } else {
    timeRemaining -=10; // Deduct 10 seconds for incorrect answer
    document.getElementById("result-text").innerHTML = "incorrect"
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}