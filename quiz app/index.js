const quizDB = [
    {
        question: "Q1: What is full form of HTML?",
        a: "hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Markup Langeage",
        d: "HyperText Markup Language",
        ans: "ans4"
    },
    {
        question: "Q1: What is full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q1: What is full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q1: What is full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JordenShoes",
        ans: "ans1"
    }
];
const question = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const submit = document.getElementById("submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.getElementById("showScore");

let questionNo = 0;
let score = 0;
const loadQuestion = () => {
   
    const questionList = quizDB[questionNo];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();
const getCheckAnswer = () =>{
    let answer;
    answers.forEach((currElem)=>{
        if(currElem.checked){
            answer = currElem.id;
            // console.log(answer);
        }
    });
    return answer; 
}
function deselectAll(){
    answers.forEach((currElem)=>currElem.checked=false)
}
submit.addEventListener("click", ()=>{
    const checkedAnswer = getCheckAnswer();
   console.log(checkedAnswer);
   if(checkedAnswer === quizDB[questionNo].ans){
       score++;
   }
   questionNo++;
   deselectAll();
   if(questionNo < quizDB.length){
       loadQuestion();
   }
   else{
    showScore.innerHTML = `
    <h2>Your Score is ${score}/${quizDB.length}</h2>
    <button id="btn" onclick="location.reload()">Play Again</button>
    `;
    showScore.classList.remove("scoreArea");
   }
});
