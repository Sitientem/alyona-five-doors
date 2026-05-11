const questions = [
  {
    door: "Дверь 1",
    text: "Сколько будет 2 + 3?",
    answers: ["4", "5", "6"],
    correct: "5"
  },
  {
    door: "Дверь 2",
    text: "Какого цвета обычно солнце?",
    answers: ["Жёлтое", "Синее", "Зелёное"],
    correct: "Жёлтое"
  },
  {
    door: "Дверь 3",
    text: "Какая буква первая в слове «мама»?",
    answers: ["А", "М", "О"],
    correct: "М"
  },
  {
    door: "Дверь 4",
    text: "Что говорит кошка?",
    answers: ["Гав", "Мяу", "Кря"],
    correct: "Мяу"
  },
  {
    door: "Дверь 5",
    text: "Сколько дверей в этой игре?",
    answers: ["Три", "Пять", "Десять"],
    correct: "Пять"
  }
];

const startScreen = document.querySelector("#startScreen");
const gameScreen = document.querySelector("#gameScreen");
const startButton = document.querySelector("#startButton");
const restartButton = document.querySelector("#restartButton");
const doors = Array.from(document.querySelectorAll(".door"));
const stars = document.querySelector("#stars");
const questionCard = document.querySelector("#questionCard");
const doorLabel = document.querySelector("#doorLabel");
const questionText = document.querySelector("#questionText");
const answers = document.querySelector("#answers");
const feedback = document.querySelector("#feedback");
const finishScreen = document.querySelector("#finishScreen");

const state = {
  opened: new Set(),
  activeDoor: null,
  score: 0
};

function renderStars() {
  stars.textContent = "★".repeat(state.score) + "☆".repeat(5 - state.score);
  stars.setAttribute("aria-label", `Собрано звёздочек: ${state.score} из 5`);
}

function startGame() {
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  resetGame();
}

function resetGame() {
  state.opened.clear();
  state.activeDoor = null;
  state.score = 0;
  doors.forEach((door) => {
    door.classList.remove("is-opened");
    door.disabled = false;
  });
  finishScreen.classList.add("hidden");
  questionCard.classList.add("hidden");
  feedback.textContent = "";
  renderStars();
}

function openDoor(index) {
  if (state.opened.has(index)) {
    feedback.textContent = "Эта дверь уже открыта. Выбери другую.";
    return;
  }

  const question = questions[index];
  state.activeDoor = index;
  doorLabel.textContent = question.door;
  questionText.textContent = question.text;
  feedback.textContent = "Выбери правильный ответ.";
  answers.replaceChildren();

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => checkAnswer(button, answer));
    answers.append(button);
  });

  questionCard.classList.remove("hidden");
  questionCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function checkAnswer(button, answer) {
  const index = state.activeDoor;
  const question = questions[index];
  const isCorrect = answer === question.correct;

  if (!isCorrect) {
    button.classList.add("wrong");
    feedback.textContent = "Почти. Попробуй другой ответ.";
    return;
  }

  button.classList.add("correct");
  state.opened.add(index);
  state.score = state.opened.size;
  doors[index].classList.add("is-opened");
  doors[index].disabled = true;
  renderStars();
  feedback.textContent = "Правильно! Звёздочка твоя.";

  Array.from(answers.children).forEach((answerButton) => {
    answerButton.disabled = true;
  });

  window.setTimeout(() => {
    questionCard.classList.add("hidden");
    if (state.score === questions.length) {
      finishScreen.classList.remove("hidden");
      finishScreen.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, 850);
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // Игра работает и без offline-кэша.
    });
  });
}

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", resetGame);
doors.forEach((door, index) => {
  door.addEventListener("click", () => openDoor(index));
});

renderStars();
registerServiceWorker();
