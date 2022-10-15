

const quizDB = [

    {
        question: "Q1 : What is your name?",
        a: "sk",
        b: "pk",
        c: "nk",
        d: "mk",
        ans: "ans1"

    },

    {
        question: "Q2 : Favourate color?",
        a: "red",
        b: "yellow",
        c: "green",
        d: "blue",
        ans: "ans2"
    },

    {
        question: "Q3 : Favourate place?",
        a: "mumbai",
        b: "goa",
        c: "pune",
        d: "hydrabad",
        ans: "ans4"
    },

    {
        question: "Q4 : Favourate food?",
        a: "dal-roti",
        b: "momos",
        c: "chowmen",
        d: "curry",
        ans: "ans3"
    },

    {
        question: "Q5 : Favourate drink?",
        a: "coke",
        b: "lemmon-juice",
        c: "lassi",
        d: "water",
        ans: "ans3"
    }
];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('.btn');
const answers = document.querySelectorAll('.answer');


const showscore = document.querySelector('#showscore');

let questionCount = 0;
let score = 0;


const loadQuestion = () => {
    // question.innerHTML = (quizDB[0].question);
    const questionList = quizDB[questionCount];

    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();


const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElement) => {
        if (curAnsElement.checked) {
            answer = curAnsElement.id;
        }

    });

    return answer;
}




const deselectall = () => {
    answers.forEach((curAnsElement) => {
        curAnsElement.checked = false;
    })
}





submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    // console.log(checkedAnswer);

    if (checkedAnswer == quizDB[questionCount].ans) {
        score++;
    }
    questionCount++;


    deselectall();



    if (questionCount < quizDB.length) {
        loadQuestion();
    }
    else {
       ` < a href="score.html"><button  id="showscore" class="showarea">sccore</button></a>`
        showscore.innerHTML = `
        <h1> ${score}/${quizDB.length} ✌😎</h1>
        <button class="bt" onclick="location.reload()"> start again</button>
        `
        showscore.classList.remove('showarea');
    };


})




