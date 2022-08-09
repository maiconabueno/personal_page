const quizData = [
    {
        question: 'What is the capital of Australia?',
        a: 'Sydney',
        b: 'Melbourne',
        c: 'Adelaide',
        d: 'Canberra',
        correct: 'd'
    }, {
        question: 'How many countries are there in Europe?',
        a: '47',
        b: '51',
        c: '44',
        d: '37',
        correct: 'c'
    }, {
        question: 'Which is one of the following is a state in US?',
        a: 'Orlando',
        b: 'Las Vegas',
        c: 'British Columbia',
        d: 'New York',
        correct: 'd'
    }, {
        question: 'Which country is located in South America?',
        a: 'Costa Rica',
        b: 'French Guiana',
        c: 'Havana',
        d: 'Malawi',
        correct: 'b'
    }, {
        question: 'Which country is located in Africa?',
        a: 'Jamaica',
        b: 'Georgia',
        c: 'Malawi',
        d: 'Myanmar',
        correct: 'c'
    }

];

const answerEls = document.querySelectorAll('.answer'); //radio buttons
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const submitBtn = document.getElementById("submit");

//answer text
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text"); 
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");

let currentQuestion = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz() { //loads the question
    deselect(); //clear selected radio buttons

    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() { //to know which answer was selected
    
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id; 
        }
    });

    return answer;
}

function deselect() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    console.log(answer); //-----------------------------------------------------testing purpose

    if(answer) {
        if(answer === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++; //to go to next question

        //checks if it's the end
        if(currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = 
            `
                <h2>You got ${score}/${quizData.length} questions correct.</h2>
                <br>
                <button class="quiz__btn" onClick="location.reload();">Reload</button>
            `
        }
    }

    
});

