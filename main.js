const button = document.getElementById('button')

const container = document.getElementById('container')


button.addEventListener("click", function () {
    container.style.display = "none";
})


const div = document.createElement("div")
div.id = "card"
document.body.appendChild(div)

const h2 = document.createElement("h2")
h2.innerHTML = "Gandalf"
document.body.appendChild(h2)

const a = document.createElement("a")
a.href = "#"
a.innerHTML = "Go to profile"
document.body.appendChild(a)


// QUIZ

var quizData = [
    {
      question: "What is the capital of USA?",
      choices: ["Time Square", "New-York", "Washington"],
      correct: "Washington"
    },
    {
      question: "Whick country won World Cup 2022?",
      choices: ["Argentina", "Brazil", "France"],
      correct: "Argentina"
    },
    {
      question: "Whick club won Champions league final in 1999?",
      choices: ["Manchester United", "Barcelona", "Real Madrid"],
      correct: "Manchester United"
    },
    {
      question: "What is the largest mammal on Earth?",
      choices: ["Elephant", "Giraffe", "Blue Whale"],
      correct: "Blue Whale"
    }
  ];
  
  var currentQuestion = 0;
  var score = 0;
  
  var questionElement = document.getElementById("question");
  var answersElement = document.getElementById("answers");
  var resultElement = document.getElementById("result");
  var nextButton = document.getElementById("next-button");
  
  function displayQuestion() {
    var q = quizData[currentQuestion];
    questionElement.textContent = q.question;
    answersElement.innerHTML = "";
  
    q.choices.forEach(function (choice) {
      var li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", function () {
        checkAnswer(choice);
      });
      answersElement.appendChild(li);
    });
  }
  
  function checkAnswer(selectedChoice) {
    var correctAnswer = quizData[currentQuestion].correct;
  
    if (selectedChoice === correctAnswer) {
      score++;
    }
  
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionElement.textContent = "Quiz Complete!";
    answersElement.style.display = "none";
    resultElement.textContent = "You scored " + score + " out of " + quizData.length;
    resultElement.style.display = "block";
    nextButton.style.display = "none";
  }
  
  nextButton.addEventListener("click", function () {
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      showResult();
    }
  });
  
  displayQuestion();
  