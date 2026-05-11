const questionBank = [
  {
    door: "Дверь счёта",
    questions: [
      { id: "math-01", text: "У Алёны было 9 наклеек, ещё 6 она нашла в альбоме. Сколько наклеек стало?", answers: ["14", "15", "16"], correct: "15", success: "Верно: 9 + 6 = 15. Звезда за точный счёт!" },
      { id: "math-02", text: "На полке стояло 17 книг. 5 книг взяли почитать. Сколько книг осталось?", answers: ["12", "13", "11"], correct: "12", success: "Правильно: 17 - 5 = 12." },
      { id: "math-03", text: "В коробке 8 красных карандашей и 7 синих. Сколько карандашей всего?", answers: ["14", "15", "16"], correct: "15", success: "Да: 8 + 7 = 15." },
      { id: "math-04", text: "Какое число больше: 13, 18 или 15?", answers: ["13", "18", "15"], correct: "18", success: "Точно. 18 больше 13 и 15." },
      { id: "math-05", text: "Продолжи пример: 10 + 4 = ...", answers: ["13", "14", "15"], correct: "14", success: "Верно: 10 + 4 = 14." },
      { id: "math-06", text: "У Маши 6 яблок, у Алёны на 3 больше. Сколько яблок у Алёны?", answers: ["8", "9", "10"], correct: "9", success: "Да, на 3 больше: 6 + 3 = 9." },
      { id: "math-07", text: "Какое число стоит между 16 и 18?", answers: ["15", "17", "19"], correct: "17", success: "Правильно, между 16 и 18 стоит 17." },
      { id: "math-08", text: "Сколько десятков в числе 20?", answers: ["1", "2", "20"], correct: "2", success: "Верно. 20 — это два десятка." },
      { id: "math-09", text: "Алёна собрала 12 бусин, 4 потерялись. Сколько бусин осталось?", answers: ["8", "9", "7"], correct: "8", success: "Да: 12 - 4 = 8." },
      { id: "math-10", text: "Что получится, если к 11 прибавить 6?", answers: ["16", "17", "18"], correct: "17", success: "Точно: 11 + 6 = 17." },
      { id: "math-11", text: "У котёнка 4 лапы. Сколько лап у трёх котят?", answers: ["8", "12", "16"], correct: "12", success: "Мяу-математика: 4 + 4 + 4 = 12." },
      { id: "math-12", text: "Какой пример даёт ответ 13?", answers: ["7 + 6", "9 + 5", "10 + 4"], correct: "7 + 6", success: "Верно: 7 + 6 = 13." },
      { id: "math-13", text: "В вазе 14 цветов. 2 завяли. Сколько цветов осталось?", answers: ["11", "12", "13"], correct: "12", success: "Правильно: 14 - 2 = 12." },
      { id: "math-14", text: "Какое число меньше: 19, 12 или 16?", answers: ["19", "12", "16"], correct: "12", success: "Да, 12 самое маленькое." },
      { id: "math-15", text: "Сколько будет 20 - 7?", answers: ["12", "13", "14"], correct: "13", success: "Отлично: 20 - 7 = 13." },
      { id: "math-16", text: "На тарелке 5 пирожков, добавили ещё 5. Сколько стало?", answers: ["9", "10", "11"], correct: "10", success: "Да: 5 + 5 = 10." },
      { id: "math-17", text: "Какое число надо прибавить к 8, чтобы получить 12?", answers: ["3", "4", "5"], correct: "4", success: "Верно: 8 + 4 = 12." },
      { id: "math-18", text: "У Алёны 18 конфет. Она дала подруге 8. Сколько осталось?", answers: ["9", "10", "11"], correct: "10", success: "Правильно: 18 - 8 = 10." },
      { id: "math-19", text: "Сколько единиц в числе 16?", answers: ["1", "6", "16"], correct: "6", success: "Да. В числе 16 одна десятка и 6 единиц." },
      { id: "math-20", text: "Какой ответ у примера 7 + 8?", answers: ["14", "15", "16"], correct: "15", success: "Точно: 7 + 8 = 15." }
    ]
  },
  {
    door: "Дверь слов",
    questions: [
      { id: "word-01", text: "Сколько слогов в слове «дорога»?", answers: ["2", "3", "4"], correct: "3", success: "Да: до-ро-га. Три слога." },
      { id: "word-02", text: "Какая буква гласная?", answers: ["М", "А", "С"], correct: "А", success: "Верно. А — гласная буква." },
      { id: "word-03", text: "Какое слово начинается на звук «к»?", answers: ["Дом", "Книга", "Луна"], correct: "Книга", success: "Правильно: книга начинается на звук к." },
      { id: "word-04", text: "Сколько слогов в слове «молоко»?", answers: ["2", "3", "4"], correct: "3", success: "Точно: мо-ло-ко." },
      { id: "word-05", text: "Какое слово лишнее: стол, стул, синий?", answers: ["Стол", "Стул", "Синий"], correct: "Синий", success: "Да. Стол и стул — предметы, синий — признак." },
      { id: "word-06", text: "Какой знак нужен в конце вопроса?", answers: [".", "?", "!"], correct: "?", success: "Верно, вопрос заканчивается знаком вопроса." },
      { id: "word-07", text: "Выбери слово из трёх букв.", answers: ["Дом", "Книга", "Лампа"], correct: "Дом", success: "Да, в слове «дом» три буквы." },
      { id: "word-08", text: "Какая буква согласная?", answers: ["О", "У", "Р"], correct: "Р", success: "Правильно. Р — согласная." },
      { id: "word-09", text: "Сколько слов в предложении: «Кот спит дома»?", answers: ["2", "3", "4"], correct: "3", success: "Да, три слова: кот, спит, дома." },
      { id: "word-10", text: "Какое слово отвечает на вопрос «кто?»", answers: ["Пенал", "Ученица", "Красный"], correct: "Ученица", success: "Верно. Ученица — это кто." },
      { id: "word-11", text: "Какое слово отвечает на вопрос «что?»", answers: ["Весёлый", "Бежит", "Портфель"], correct: "Портфель", success: "Да. Портфель — это что." },
      { id: "word-12", text: "Какое слово можно перенести: ма-ма или дом?", answers: ["ма-ма", "дом", "оба"], correct: "ма-ма", success: "Верно. «Ма-ма» можно перенести по слогам." },
      { id: "word-13", text: "Какая буква первая в слове «звезда»?", answers: ["З", "В", "А"], correct: "З", success: "Правильно, первая буква — З." },
      { id: "word-14", text: "Выбери слово с мягким знаком.", answers: ["День", "Дом", "Кот"], correct: "День", success: "Да, в слове «день» есть мягкий знак." },
      { id: "word-15", text: "Какое слово противоположно слову «день»?", answers: ["Ночь", "Солнце", "Утро"], correct: "Ночь", success: "Верно. День и ночь — противоположности." },
      { id: "word-16", text: "Сколько гласных в слове «лиса»?", answers: ["1", "2", "3"], correct: "2", success: "Да, гласные И и А." },
      { id: "word-17", text: "Какое слово подходит: «Алёна ... книгу»?", answers: ["читает", "синий", "стол"], correct: "читает", success: "Правильно: Алёна читает книгу." },
      { id: "word-18", text: "Какая буква последняя в слове «урок»?", answers: ["У", "О", "К"], correct: "К", success: "Да, последняя буква — К." },
      { id: "word-19", text: "Выбери слово во множественном числе.", answers: ["Книга", "Книги", "Красивый"], correct: "Книги", success: "Верно. Книги — это много книг." },
      { id: "word-20", text: "Сколько слогов в слове «звёзды»?", answers: ["1", "2", "3"], correct: "2", success: "Да: звёз-ды. Два слога." }
    ]
  },
  {
    door: "Дверь мира",
    questions: [
      { id: "world-01", text: "Что лишнее: берёза, ромашка, дуб?", answers: ["Ромашка", "Берёза", "Дуб"], correct: "Ромашка", success: "Точно. Берёза и дуб — деревья, ромашка — цветок." },
      { id: "world-02", text: "Какое время года идёт после зимы?", answers: ["Весна", "Лето", "Осень"], correct: "Весна", success: "Да, после зимы приходит весна." },
      { id: "world-03", text: "Кто из животных умеет летать?", answers: ["Белка", "Воробей", "Ёж"], correct: "Воробей", success: "Верно. Воробей — птица." },
      { id: "world-04", text: "Что нужно растению для роста?", answers: ["Свет и вода", "Снег и лёд", "Камни"], correct: "Свет и вода", success: "Правильно. Растениям нужны свет и вода." },
      { id: "world-05", text: "Где живёт рыба?", answers: ["В воде", "В гнезде", "В норе"], correct: "В воде", success: "Да, рыбы живут в воде." },
      { id: "world-06", text: "Какой день идёт после понедельника?", answers: ["Вторник", "Среда", "Воскресенье"], correct: "Вторник", success: "Точно, после понедельника — вторник." },
      { id: "world-07", text: "Что помогает человеку видеть?", answers: ["Глаза", "Уши", "Локти"], correct: "Глаза", success: "Верно. Видим мы глазами." },
      { id: "world-08", text: "Как называется дом птицы?", answers: ["Гнездо", "Берлога", "Аквариум"], correct: "Гнездо", success: "Да, птицы строят гнёзда." },
      { id: "world-09", text: "Что бывает на небе ночью?", answers: ["Звёзды", "Радуга", "Листья"], correct: "Звёзды", success: "Правильно. Ночью на небе видны звёзды." },
      { id: "world-10", text: "Кто даёт молоко?", answers: ["Корова", "Петух", "Лиса"], correct: "Корова", success: "Да, корова даёт молоко." },
      { id: "world-11", text: "Что нужно делать перед едой?", answers: ["Мыть руки", "Прыгать", "Спать"], correct: "Мыть руки", success: "Верно. Перед едой моют руки." },
      { id: "world-12", text: "Какой транспорт ходит по рельсам?", answers: ["Поезд", "Самолёт", "Лодка"], correct: "Поезд", success: "Точно, поезд ходит по рельсам." },
      { id: "world-13", text: "Что тает от тепла?", answers: ["Лёд", "Камень", "Песок"], correct: "Лёд", success: "Да, лёд тает от тепла." },
      { id: "world-14", text: "Какой овощ оранжевый и длинный?", answers: ["Морковь", "Огурец", "Картофель"], correct: "Морковь", success: "Правильно, это морковь." },
      { id: "world-15", text: "Как называется детёныш кошки?", answers: ["Котёнок", "Щенок", "Телёнок"], correct: "Котёнок", success: "Да, у кошки детёныш — котёнок." },
      { id: "world-16", text: "Что показывает часы?", answers: ["Время", "Погоду", "Цвет"], correct: "Время", success: "Верно, часы показывают время." },
      { id: "world-17", text: "Где растут грибы?", answers: ["В лесу", "На потолке", "В чайнике"], correct: "В лесу", success: "Да, грибы часто растут в лесу." },
      { id: "world-18", text: "Какой месяц первый в году?", answers: ["Январь", "Март", "Июнь"], correct: "Январь", success: "Правильно, год начинается с января." },
      { id: "world-19", text: "Что нужно надеть в дождь?", answers: ["Плащ", "Купальник", "Сандалии"], correct: "Плащ", success: "Да, плащ помогает не промокнуть." },
      { id: "world-20", text: "Какое животное просыпается весной после спячки?", answers: ["Медведь", "Курица", "Рыба"], correct: "Медведь", success: "Верно, медведь просыпается после зимней спячки." }
    ]
  },
  {
    door: "Дверь логики",
    questions: [
      { id: "logic-01", text: "Продолжи ряд: 2, 4, 6, 8, ...", answers: ["9", "10", "12"], correct: "10", success: "Правильно: числа растут на 2." },
      { id: "logic-02", text: "Что лишнее: круг, квадрат, яблоко?", answers: ["Круг", "Квадрат", "Яблоко"], correct: "Яблоко", success: "Да. Круг и квадрат — фигуры." },
      { id: "logic-03", text: "Продолжи: красный, синий, красный, синий, ...", answers: ["Красный", "Зелёный", "Жёлтый"], correct: "Красный", success: "Верно, узор повторяется." },
      { id: "logic-04", text: "У чего больше сторон?", answers: ["У треугольника", "У квадрата", "Одинаково"], correct: "У квадрата", success: "Да, у квадрата 4 стороны, у треугольника 3." },
      { id: "logic-05", text: "Если сегодня среда, какой день был вчера?", answers: ["Вторник", "Четверг", "Пятница"], correct: "Вторник", success: "Правильно, вчера был вторник." },
      { id: "logic-06", text: "Что тяжелее: 1 кг ваты или 1 кг сахара?", answers: ["Вата", "Сахар", "Одинаково"], correct: "Одинаково", success: "Хитрый вопрос: оба весят 1 кг." },
      { id: "logic-07", text: "Продолжи ряд: 5, 10, 15, ...", answers: ["16", "20", "25"], correct: "20", success: "Верно, прибавляем по 5." },
      { id: "logic-08", text: "Что лишнее: ложка, вилка, сапог?", answers: ["Ложка", "Вилка", "Сапог"], correct: "Сапог", success: "Да, ложка и вилка нужны за столом." },
      { id: "logic-09", text: "Сколько углов у прямоугольника?", answers: ["3", "4", "5"], correct: "4", success: "Правильно, у прямоугольника 4 угла." },
      { id: "logic-10", text: "Продолжи: большой, маленький, большой, маленький, ...", answers: ["Большой", "Круглый", "Синий"], correct: "Большой", success: "Да, узор повторяется." },
      { id: "logic-11", text: "Если чашка стоит справа от тарелки, где тарелка относительно чашки?", answers: ["Слева", "Справа", "Сверху"], correct: "Слева", success: "Верно, тарелка слева от чашки." },
      { id: "logic-12", text: "Какой предмет обычно круглый?", answers: ["Мяч", "Книга", "Линейка"], correct: "Мяч", success: "Да, мяч обычно круглый." },
      { id: "logic-13", text: "Найди пару: носок и ...", answers: ["Ботинок", "Ложка", "Тетрадь"], correct: "Ботинок", success: "Правильно, носок надевают с ботинком." },
      { id: "logic-14", text: "Что будет следующим: А, Б, В, ...", answers: ["Г", "Д", "А"], correct: "Г", success: "Верно, после В идёт Г." },
      { id: "logic-15", text: "Какое число пропущено: 11, 12, ..., 14?", answers: ["10", "13", "15"], correct: "13", success: "Да, пропущено 13." },
      { id: "logic-16", text: "Что лишнее: зима, лето, дерево?", answers: ["Зима", "Лето", "Дерево"], correct: "Дерево", success: "Верно. Зима и лето — времена года." },
      { id: "logic-17", text: "Если лампа выше стола, где стол относительно лампы?", answers: ["Ниже", "Выше", "Внутри"], correct: "Ниже", success: "Правильно, стол ниже лампы." },
      { id: "logic-18", text: "Продолжи ряд: 1, 3, 5, 7, ...", answers: ["8", "9", "10"], correct: "9", success: "Да, это нечётные числа." },
      { id: "logic-19", text: "У какой фигуры нет углов?", answers: ["Круг", "Квадрат", "Треугольник"], correct: "Круг", success: "Верно, у круга нет углов." },
      { id: "logic-20", text: "Что подходит к слову «холодный»?", answers: ["Лёд", "Огонь", "Печка"], correct: "Лёд", success: "Да, лёд холодный." }
    ]
  },
  {
    door: "Дверь котёнка",
    questions: [
      { id: "bonus-01", text: "У одного котёнка 4 лапы. Сколько лап у двух котят?", answers: ["6", "8", "10"], correct: "8", success: "Мяу-математика победила: 4 + 4 = 8." },
      { id: "bonus-02", text: "Котёнок спал 3 часа утром и 2 часа днём. Сколько часов он спал?", answers: ["4", "5", "6"], correct: "5", success: "Верно: 3 + 2 = 5." },
      { id: "bonus-03", text: "Какой звук чаще всего говорит котёнок?", answers: ["Мяу", "Гав", "Му"], correct: "Мяу", success: "Да, котёнок говорит мяу." },
      { id: "bonus-04", text: "У Алёны 10 ленточек. 3 она подарила. Сколько осталось?", answers: ["6", "7", "8"], correct: "7", success: "Правильно: 10 - 3 = 7." },
      { id: "bonus-05", text: "Какое слово ласковое?", answers: ["Котёнок", "Котище", "Кот"], correct: "Котёнок", success: "Да, «котёнок» звучит ласково." },
      { id: "bonus-06", text: "Сколько хвостов у трёх котят?", answers: ["1", "2", "3"], correct: "3", success: "Верно, у каждого котёнка по хвосту." },
      { id: "bonus-07", text: "Котёнок был на 2-й ступеньке и поднялся на 4 выше. На какой ступеньке он стал?", answers: ["5-й", "6-й", "7-й"], correct: "6-й", success: "Да: 2 + 4 = 6." },
      { id: "bonus-08", text: "Что котёнку нельзя давать вместо еды?", answers: ["Корм", "Воду", "Пластилин"], correct: "Пластилин", success: "Правильно, пластилин не еда." },
      { id: "bonus-09", text: "Выбери слово с двумя слогами.", answers: ["Кот", "Лапа", "Молоко"], correct: "Лапа", success: "Да: ла-па. Два слога." },
      { id: "bonus-10", text: "На коврике 6 клубков, котёнок укатил 2. Сколько осталось?", answers: ["3", "4", "5"], correct: "4", success: "Верно: 6 - 2 = 4." },
      { id: "bonus-11", text: "Какой предмет нужен для рисования?", answers: ["Карандаш", "Подушка", "Тарелка"], correct: "Карандаш", success: "Да, карандаш нужен для рисования." },
      { id: "bonus-12", text: "Продолжи: лапа, хвост, лапа, хвост, ...", answers: ["Лапа", "Ухо", "Нос"], correct: "Лапа", success: "Правильно, узор повторяется." },
      { id: "bonus-13", text: "Сколько букв в слове «звезда»?", answers: ["5", "6", "7"], correct: "6", success: "Да, в слове «звезда» 6 букв." },
      { id: "bonus-14", text: "Котёнок нашёл 5 звёздочек, Алёна ещё 4. Сколько всего?", answers: ["8", "9", "10"], correct: "9", success: "Верно: 5 + 4 = 9." },
      { id: "bonus-15", text: "Что мягче всего?", answers: ["Камень", "Подушка", "Стол"], correct: "Подушка", success: "Да, подушка мягкая." },
      { id: "bonus-16", text: "Если котёнок спрятался под столом, где он?", answers: ["Под столом", "На столе", "За окном"], correct: "Под столом", success: "Правильно, он под столом." },
      { id: "bonus-17", text: "Какое число получится: 16 - 6?", answers: ["9", "10", "11"], correct: "10", success: "Да: 16 - 6 = 10." },
      { id: "bonus-18", text: "Какой цвет получится, если выбрать траву?", answers: ["Зелёный", "Красный", "Синий"], correct: "Зелёный", success: "Верно, трава зелёная." },
      { id: "bonus-19", text: "Котёнок стоит между Алёной и дверью. Кто слева, если Алёна слева?", answers: ["Алёна", "Дверь", "Котёнок"], correct: "Алёна", success: "Да, если Алёна слева, слева именно Алёна." },
      { id: "bonus-20", text: "Что нужно сказать, когда тебе помогли?", answers: ["Спасибо", "Пока", "Ой"], correct: "Спасибо", success: "Правильно. За помощь говорят спасибо." }
    ]
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

const LAST_QUESTION_IDS_KEY = "alyona-five-doors-last-question-ids";

const state = {
  opened: new Set(),
  activeDoor: null,
  score: 0,
  currentQuestions: []
};

function getLastQuestionIds() {
  try {
    return JSON.parse(sessionStorage.getItem(LAST_QUESTION_IDS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveLastQuestionIds(questionIds) {
  try {
    sessionStorage.setItem(LAST_QUESTION_IDS_KEY, JSON.stringify(questionIds));
  } catch {
    // Если браузер запретил sessionStorage, игра просто продолжит работать.
  }
}

function pickQuestion(questions, previousQuestionId) {
  const candidates = questions.filter((question) => question.id !== previousQuestionId);
  const pool = candidates.length > 0 ? candidates : questions;
  return pool[Math.floor(Math.random() * pool.length)];
}

function buildRoundQuestions() {
  const previousIds = getLastQuestionIds();
  const nextQuestions = questionBank.map((category, index) => ({
    door: category.door,
    ...pickQuestion(category.questions, previousIds[index])
  }));

  saveLastQuestionIds(nextQuestions.map((question) => question.id));
  return nextQuestions;
}

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
  state.currentQuestions = buildRoundQuestions();
  state.opened.clear();
  state.activeDoor = null;
  state.score = 0;
  document.body.classList.remove("celebrate");
  doors.forEach((door) => {
    door.classList.remove("is-opened", "is-active");
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

  const question = state.currentQuestions[index];
  state.activeDoor = index;
  doors.forEach((door) => door.classList.remove("is-active"));
  doors[index].classList.add("is-active");
  doorLabel.textContent = question.door;
  questionText.textContent = question.text;
  feedback.textContent = "Подумай спокойно и выбери ответ.";
  answers.replaceChildren();

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = answer;
    button.dataset.correct = String(answer === question.correct);
    button.addEventListener("click", () => checkAnswer(button, answer));
    answers.append(button);
  });

  questionCard.classList.remove("hidden");
  questionCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function launchStarBurst(anchor) {
  const burst = document.createElement("span");
  burst.className = "star-burst";
  burst.textContent = "★";
  anchor.append(burst);
  window.setTimeout(() => burst.remove(), 900);
}

function checkAnswer(button, answer) {
  const index = state.activeDoor;
  const question = state.currentQuestions[index];
  const isCorrect = answer === question.correct;

  if (!isCorrect) {
    button.classList.add("wrong");
    feedback.textContent = "Почти. Проверь ход мысли и попробуй ещё раз.";
    return;
  }

  button.classList.add("correct");
  state.opened.add(index);
  state.score = state.opened.size;
  doors[index].classList.remove("is-active");
  doors[index].classList.add("is-opened");
  doors[index].disabled = true;
  renderStars();
  launchStarBurst(doors[index]);
  feedback.textContent = question.success;

  Array.from(answers.children).forEach((answerButton) => {
    answerButton.disabled = true;
  });

  window.setTimeout(() => {
    questionCard.classList.add("hidden");
    if (state.score === state.currentQuestions.length) {
      document.body.classList.add("celebrate");
      finishScreen.classList.remove("hidden");
      finishScreen.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, 1050);
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js?v=5").catch(() => {
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
