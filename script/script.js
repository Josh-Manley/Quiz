

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
let highscores = []
let playerName = '';

let playerNameInput = document.getElementById("initials");

function startQuiz() {
  document.getElementById("start-btn").style.display = "none";

  showQuestion();
  startTimer();
}

function showQuestion() {
  const questionContainer = document.getElementById("questions-container");
  const optionsContainer = document.getElementById("options-container");

  questionContainer.textContent = questions[currentQuestion].question;
  optionsContainer.innerHTML = "";

  questions[currentQuestion].options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(answer) {
  if (answer === questions[currentQuestion].correctAnswer) {
    score+=5;
    document.getElementById("result-text").innerHTML = "correct"
    document.getElementById('score').innerHTML = `Score: ${score}`;
  } else {
    score-=3;
    timeRemaining -=10; // Deduct 10 seconds for incorrect answer
    document.getElementById("result-text").innerHTML = "incorrect"
    document.getElementById('score').innerHTML = `Score: ${score}`;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function startTimer() {
  timerInterval = setInterval(() => {
    document.getElementById("time").textContent = timeRemaining;
    if (timeRemaining <= 0) {
      endQuiz();
    } else {
      timeRemaining--;
    }
  }, 1000);
}

function endQuiz() {
  clearInterval(timerInterval);

  document.getElementById("game-over").style.display = "block";
  document.getElementById("active-quiz").style.display = "none";
  updateHighestScores();
}
  
  
  function updateHighestScores() {
      highscores.push({ playerName: playerName, score: score });
      highscores.sort(function(a,b) {
          return b.score - a.score;
      });
  }
  
  function displayHighScores() {
      playerName = playerNameInput.value;

      
      let highScoreContainer = document.getElementById("high-score-container");
      highScoreContainer.style.display = "block";
      let highScore = document.getElementById("high-score-ul");
      // document.getElementById("quiz-container").style.display = "none";
      const listItem = document.createElement("li")
      highscores.forEach(function(entry) {
          listItem.innerHTML = '<th>' + (entry.playerName || 'Your-Name-Go-Here') + '</td><td>' + entry.score + '</td>';
          highScore.appendChild(listItem);
      });
  }
  






