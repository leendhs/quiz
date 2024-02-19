const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const questionContainer = document.getElementById('question');
const answerInput = document.getElementById('answer');
let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: 'Joske, Louis en Maarten gaan op bezoek bij hun oma en opa. Waar wonen ze?',
        answer: 'Vossem'
    },
    // Add more questions here
];

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', showNextQuestion);

function startQuiz() {
    startBtn.style.display = 'none';
    quizContainer.style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
}

function showNextQuestion() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const currentQuestion = questions[currentQuestionIndex];
    
    if (userAnswer === currentQuestion.answer.toLowerCase()) {
        score++;
    }
    
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
        answerInput.value = '';
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultContainer.innerHTML = `<p>Je score is: ${score} op ${questions.length}</p>`;
}
