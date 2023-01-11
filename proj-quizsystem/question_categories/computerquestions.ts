import { Question } from "./Question.js";

export let computerQuestions: Question[] = [];

const firstQ = new Question("MS-Word is an example of ________", "Application Software", [
    { text: "Application Software", correct: true },
    { text: "System Software", correct: false },
    { text: "Utility Software", correct: false },
    { text: "Programming Software", correct: false }
]);

const secondQ = new Question("The brain of a computer is ________", "Central Processing Unit", [
    { text: "Central Processing Unit", correct: true },
    { text: "Input Unit", correct: false },
    { text: "Output Unit", correct: false },
    { text: "Memory Unit", correct: false }  
]);

const thirdQ = new Question("The process of converting data into information is called ________", "Processing", [
    { text: "Processing", correct: true }, 
    { text: "Input", correct: false },
    { text: "Output", correct: false },
    { text: "Storage", correct: false }
]);    

const fourthQ = new Question("The process of converting information into data is called ________", "Output", [
    { text: "Output", correct: true },
    { text: "Input", correct: false },
    { text: "Processing", correct: false },
    { text: "Storage", correct: false }
]);

const fifthQ = new Question("The process of storing data for future use is called ________", "Storage", [
    { text: "Storage", correct: true },
    { text: "Input", correct: false },
    { text: "Output", correct: false },
    { text: "Processing", correct: false }
]);    

computerQuestions.push(firstQ, secondQ, thirdQ, fourthQ, fifthQ);