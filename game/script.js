const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 
            "A web browser ___________",
        choice1: "is a program that runs on a web server",
        choice2: "starts when a web server sends a page to a client",
        choice3: "starts when an HTTP request is made",
        choice4: "is a program that runs on a client computer",
        correct: 4,
    },
    {
        question: 
            "An HTTP response is sent from ___________",
        choice1: "the web server to the application server",
        choice2: "the client to the web server",
        choice3: "the application server to the web server",
        choice4: "the web server to the client",
        correct: 4,
    },
    {
        question: 
            "When a browser makes a request for a static web page, the web server ___________",
        choice1: "returns the HTML for the page and the browser renders it",
        choice2: "generates the HTML for the page and returns it to the browser",
        choice3: "renders the HTML for the page and returns it to the browser",
        choice4: "finds the HTML for the page and renders it",
        correct: 1,
    },
    {
        question: 
            "When a browser makes a request for a dynamic web page _____________",
        choice1: "the web server processes the request and returns the HTML to the browser",
        choice2: "the web server gets the data for the request from a database and returns the data to the browser",
        choice3: "the web server processes the request and returns the HTML to the browser",
        choice4: "an application server processes the request and returns the HTML to the browser",
        correct: 1,
    }
]