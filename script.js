// const question = document.querySelector("question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionConunter = 0;
let availableQuestions = [];


let questions = [

    {
        Question: "What is the largest organ of the human body?",
        Choice1: "Brain",
        Choice2: "Eyes",
        Choice3: "Lungs",
        Choice4: "Skin",
        CorrectAnswer: "Skin",
    },
    {
        Question: "What is another name for your voice box?",
        Choice1: "Trachea",
        Choice2: "Esophagus",
        Choice3: "Larynx",
        Choice4: "Nose",
        CorrectAnswer: "Larynx",
    },
    {
        Question:
        "What is the name of the bone structure that makes up your spinal column?",
        Choice1: "Vertebrae",
        Choice2: "Spinal Disk",
        Choice3: "Spinal Cord",
        Choice4: "Hands",
        CorrectAnswer: "Vertebrae",
    },
    {
        Question:
        "The arteries are the blood vessels that deliver oxygen-rick blood from the heart to the tissues of the body.  What is the largest artery in the body called?",
        Choice1: "Jugular",
        Choice2: "Aorta",
        Choice3: "Femoral Artery",
        Choice4: "Toes",
        CorrectAnswer: "Aorta",
    },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

startGame = () => {
    questionsCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    // getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);

        return window.location.assign("/end.html");
    }

questionsCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.sytle.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`

const quesitonsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

choices.forEach(choice => {
    const number = choice.dataset["number"]
    choice.innerText = currentQuestion["choice" + number]
})

availableQuestions.splice(questionsIndex, 1)

acceptingAnswers = true

}

choices.forEach(choice => {
    choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
        const slectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply =
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
         incrementScore(SCORE_POINTS);
  }

    selectedChoice.parentElment.classList.add(classToApply);

    setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
    }, 1000);
   });
 });

incrementScore = (num) => {
    score += num;
    scoreText.innerText = scores;
};

startGame();