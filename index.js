// this will occur every second (1000ms)
// global variable
let timer = 90
// hooking into "quiz" div in HTML
let quizDiv = document.querySelector("#quiz");
let questionButton1 = document.querySelector("#answer1")
let questionButton2 = document.querySelector("#answer2")
let questionButton3 = document.querySelector("#answer3")
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
let timeEl = document.querySelector("#time")
let startButton = document.querySelector("#startBtn")
let startingPage = document.querySelector(".startingPage")
let quizQuestion = document.querySelector("#quizQuestion")
//this must be rendered to the page and every second it must be rerendered onto the page
//we need this internal to be able to be cleared
function startTimer() {

    let timerId = setInterval(function () {

        timer -= 1
        timeEl.textContent = timer;
        //console.log("example");
        //console.log(timer);

        if (timer === 0) {
            clearInterval(timerId);
        }
    }, 1000)
}

// link together files

// have an array of answers
let questions = [{ question: "Which planet is the largest in the solar system?", answers: ["Jupiter", "Venus", "Earth"], correctAnswer: "Jupiter" },
{ question: "How many legs does a spider have?", answers: ["Ten", "Eight", "Six"], correctAnswer: "Eight" },
{ question: "Which country drinks the most coffee per capita?", answers: ["Finland", "Ireland", "Mexico"], correctAnswer: "Finland" },
{ question: "Which country has the most natural lakes?", answers: ["Canada", "United States", "China"], correctAnswer: "Canada" },
{ question: "Which country touches the Indian Ocean, the Arabian Sea, and the Bay of Bengal?", answers: ["Iran", "Pakistan", "India"], correctAnswer: "India" },
{ question: "How long is an Olympic swimming pool (in meters)?", answers: ["25 meters", "100 meters", "50 meters"], correctAnswer: "50 meters" },
{ question: "Which country has the most islands in the world?", answers: ["India", "Sweden", "Canada"], correctAnswer: "Sweden" }

]



// all of these items need to get rendered and we need to keep track of the questions index
//need a variable to track index changes


let currentQuestion = 0

// some other button is going to fire off renderQuestion



function renderQuestion() {
    quizQuestion.textContent = questions[currentQuestion].question;
    questionButton1.textContent = questions[currentQuestion].answers[0];
    questionButton2.textContent = (questions[currentQuestion].answers[1])
    questionButton3.textContent = (questions[currentQuestion].answers[2])
    console.log(questions[currentQuestion].question)
    console.log("correct answer:" + questions[currentQuestion].correctAnswer)

}

// store in local storage timer, their initials and score
// setItem and make sure to JSON.com stringify

// when a button is clicked we are going to increment the
// currentQuestion value and re-render everything on the page
// listen for a button click on div id+"quiz"


// taking advantage of event bubbling and event delegation
quizDiv.addEventListener("click", function (event) {


    // to compare answer to what is clicked us
    if (event.target.matches("button")) {

        console.log("clicked!")
        console.log("value: " + event.target.innerText);
        console.log("correct answer:: " + questions[currentQuestion].correctAnswer);
        if (event.target.innerText === questions[currentQuestion].correctAnswer) {
            console.log("correct")
        } else {
            console.log("wrong")
            timer -= 10;
        }
    }

    //if incorrect answer, subtract from timer
    // the current button is incremented each time

    currentQuestion++
    if (currentQuestion >= questions.length) {
        console.log("endGame")
    } else {

        renderQuestion()
    }
})

//when button is clicked compare to value in answer

//some button that saves 
// setHighScoresHere = localStorage.setItem("highScores", JSON.stringify([{"initials": "dre", "score": 80}]))

startButton.addEventListener("click", function () {
    startTimer()
    startingPage.classList.add("hide")
    quizDiv.classList.remove("hide")
    renderQuestion();
})
