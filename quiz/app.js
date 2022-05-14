// Initialize Cloud Firestore and get a reference to the service
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answer-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");

let questionCounter = 0;
let currentCounter;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;

function setAwailableQuestions() {
  const totalQuestion = quiz.length;
  for (let i = 0; i < totalQuestion; i++) {
    availableQuestions.push(quiz[i]);
  }
}
function getNewQuestion() {
  questionNumber.innerHTML =
    "Question " + (questionCounter + 1) + " of " + quiz.length;
  // random asult songoh
  const questionIndex =
    availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  currentQuestion = questionIndex;
  questionText.innerHTML = currentQuestion.q;
  // bairlaliig n oloh
  const index1 = availableQuestions.indexOf(questionIndex);
  // asuult davtagtuulku heseg,garsn asuultig n hasah
  availableQuestions.splice(index1, 1);

  // hariultuud,heden option bgag oloh
  const optionLen = currentQuestion.options.length;
  // optionuuda availableOptions array lu hih
  for (let i = 0; i < optionLen; i++) {
    availableOptions.push(i);
  }
  optionContainer.innerHTML = "";
  let animationDelay = 0.15;
  // optionuuda html bolgoh
  for (let i = 0; i < optionLen; i++) {
    // optionoo random bolgh
    const optionIndex =
      availableOptions[Math.floor(Math.random() * availableOptions.length)];
    // optionIndexiin bairlalig availableOptions avah
    const index2 = availableOptions.indexOf(optionIndex);
    availableOptions.splice(index2, 1);
    const option = document.createElement("div");
    option.innerHTML = currentQuestion.options[optionIndex];
    option.id = optionIndex;
    option.style.animationDelay = animationDelay + "s";
    animationDelay = animationDelay + 0.15;
    option.className = "option";
    optionContainer.appendChild(option);
    option.setAttribute("onclick", "getResult(this)");
  }
  questionCounter++;
}
// hariultaa shalgh
function getResult(element) {
  const id = parseInt(element.id);
  if (id === currentQuestion.answer) {
    //nogoon bolgh
    element.classList.add("correct");
    updateAnswerIndicator("correct");
    correctAnswers++;
  } else {
    //ulaan bolgoh
    element.classList.add("wrong");
    updateAnswerIndicator("wrong");
    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
      if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
        optionContainer.children[i].classList.add("correct");
      }
    }
  }
  attempt++;
  unclickableOptions();
}

// 1option darahd busdiin darj bolohku bolgh
function unclickableOptions() {
  const optionLen = optionContainer.children.length;
  for (let i = 0; i < optionLen; i++) {
    optionContainer.children[i].classList.add("already-answered");
  }
}
function updateAnswerIndicator(markType) {
  answersIndicatorContainer.children[questionCounter - 1].classList.add(
    markType
  );
}
function answersIndicator() {
  answersIndicatorContainer.innerHTML = "";
  const totalQuestion = quiz.length;
  for (let i = 0; i < totalQuestion; i++) {
    const indicator = document.createElement("div");
    answersIndicatorContainer.appendChild(indicator);
  }
}
function next() {
  if (questionCounter === quiz.length) {
    quizOver();
  } else {
    getNewQuestion();
  }
}
const uuid = window.localStorage.getItem("uuid");

function quizOver() {
  quizBox.classList.add("hide");
  resultBox.classList.remove("hide");
  const ref = db.collection("users").doc(`${uuid}`);
  ref.set({ correctAnswers });
  quizResult();
}

function quizResult() {
  resultBox.querySelector(".total-question").innerHTML = quiz.length;
  resultBox.querySelector(".total-attempt").innerHTML = attempt;
  resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
  resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
  const percentage = (correctAnswers / quiz.length) * 100;
  resultBox.querySelector(".percentage").innerHTML =
    percentage.toFixed(2) + "%";
  resultBox.querySelector(".total-score").innerHTML =
    correctAnswers + " / " + quiz.length;
}

function resetQuiz() {
  questionCounter = 0;
  correctAnswers = 0;
  attempt = 0;
}

function goToHome() {
  resultBox.classList.add("hide");
  homeBox.classList.remove("hide");
  resetQuiz();
}

function tryAgainQuiz() {
  resultBox.classList.add("hide");
  quizBox.classList.remove("hide");
  resetQuiz();
  startQuiz();
}

function startQuiz() {
  homeBox.classList.add("hide");
  quizBox.classList.remove("hide");
  setAwailableQuestions();
  getNewQuestion();
  answersIndicator();
}
window.onload = function () {
  homeBox.querySelector(".total-question").innerHTML = quiz.length;
};
