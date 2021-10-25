const startMenu = document.getElementById("start");

const questionSection = document.getElementById("question-box");

const questionTitle = document.getElementById("question");

const answerInput = document.querySelector(".answer-input");

const inputSection = document.querySelector(".input-section");

const choiceButtons = document.getElementById("choices");

const answerButton = document.getElementById("answer-button");

const endScreen = document.getElementById("end-screen");

const endForm = document.getElementById("endForm")

const submit = document.getElementById('submit')

const startForm = () => {
  startMenu.classList.add("hide");
  questionSection.classList.remove("hide");
  // endForm.classList.add("hide")
  getQuestion(0);
};

const getQuestion = (index) => {
  let q = questions[index];
  let button =
    `<button id="button" class="answerButton"` +
    `onclick="handleAnswer(event, ${index})">Next</button>`;
  questionTitle.textContent = index + 1 + ") " + q.question;
  answerInput.innerHTML = q.answerInput;
  answerButton.innerHTML = button;

  if (q.choices === undefined || null) {
    document.getElementById("choices").classList.add("hide");
    inputSection.classList.remove("hide");
  } else {
    for (let i = 0; i < q.choices.length; i++) {
      let choices =
        `<button class='answer-choice' id="${q.choices[i].answerID}" ` +
        `onclick="handleAnswer(event, ${index})">${q.choices[i].text}</button>`;
      choiceButtons.innerHTML += choices;
    }
    inputSection.classList.add("hide");
    choiceButtons.classList.remove("hide");
  }
};

const handleAnswer = (event, index) => {
  let q = questions[index];
  if (q.choices === undefined || null) {
    userAnswers.push({question: q.question, answer: answerInput.value});
    console.log(q.answerID, answerInput.value);
  } else {
    userAnswers.push({question: q.question, answer: choiceButtons.innerText});
  }
  nextQuestion(index);
};

const nextQuestion = (index) => {
  if (index < questions.length - 1) {
    answerInput.value = "";
    choiceButtons.innerHTML = "";
    getQuestion(index + 1);
  } else {
    // console.log(userAnswers);
    endForm.classList.remove("hide");
    questionSection.classList.add("hide");
    // submit.setAttribute('userAnswers', JSON.stringify(userAnswers))
    populateEndScreen()
  }
};

const populateEndScreen = () => {
  // console.log(userAnswers)
  userAnswers.map((userInfo, i) => (
    endScreen.innerHTML += `<h2>${userInfo.question}</h2>
    <p>${userInfo.answer}</p>`
))
}



