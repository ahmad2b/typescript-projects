import { Question } from "./Question.js";

export let famousQuestions: Question[] = [];

const firstQ = new Question("Who is the founder of Pakistan?", "Quaid-e-Azam Muhammad Ali Jinnah", [
    { text: "Quaid-e-Azam Muhammad Ali Jinnah", correct: true },
    { text: "Liaquat Ali Khan", correct: false },
    { text: "Allama Iqbal", correct: false },
    { text: "Muhammad Ali Jinnah", correct: false }
]);

const secondQ = new Question("In which year Quaid e Azam resigned from membership of Congress?", "1920", [
    { text: "1920", correct: true },
    { text: "1921", correct: false },
    { text: "1922", correct: false },
    { text: "1913", correct: false }
]);

const thirdQ = new Question("Who was the first Governor General of Pakistan?", "Mohammad Ali Jinnah", [
    { text: "Mohammad Ali Jinnah", correct: true },
    { text: "Liaquat Ali Khan", correct: false },
    { text: "Iskander Mirza", correct: false },
    { text: "Ayub Khan", correct: false }
]);

const fourthQ = new Question("Who was the first Prime Minister of Pakistan?", "Liaquat Ali Khan", [
    { text: "Liaquat Ali Khan", correct: true },
    { text: "Mohammad Ali Jinnah", correct: false },
    { text: "Iskander Mirza", correct: false },
    { text: "Ayub Khan", correct: false }
]);

const fifthQ = new Question("Which Pakistani poet was awarded Russian Lenin Award in 1962?", "Faiz Ahmed Faiz", [
    { text: "Faiz Ahmed Faiz", correct: true },
    { text: "Ahmad Faraz", correct: false },
    { text: "Habib Jalib", correct: false },
    { text: "Allama Muhammad Iqbal", correct: false }
]);    

famousQuestions.push(firstQ, secondQ, thirdQ, fourthQ, fifthQ);