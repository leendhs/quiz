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

    {
        question: 'De bus vertrekt vanuit Leuven naar Mechelen en heeft in totaal 15 stops, waar hij elke keer 45 seconden blijft staan. Hoe oud is de buschauffeur?',
        answer: '53'
    },

    {
        question: 'Emma en Elena zijn sinds het derde kleuterklasje beste vriendinnen. Ze zijn ondertussen alle twee 22 jaar. In welke winkel kopen ze hun kleren?',
        answer: 'Mango'
    },

    {
        question: 'Liam werd geboren op 15 september 2001. Zijn moeder heet Lisa en zijn vader heet Rudy. Hij woont in Antwerpen en heeft 2 kleinere zussen. Welke richting studeert Liam?',
        answer: 'Criminologie'
    },

    {
        question: 'Hanne zit al 15 jaar in de scouts en heeft er de tijd van haar leven. Spijtig genoeg kan ze het niet meer combineren met haar studies, dus besliste ze om dit jaar te stoppen. Waar heeft Hanne een litteken van te vallen toen ze 3 jaar was?',
        answer: 'Kin'
    },
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
