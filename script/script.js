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
    button.onclick = () => 
  })
}