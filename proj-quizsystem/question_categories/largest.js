import { Question } from "./Question.js";
export let largestQuestions = [];
const firstQ = new Question('What is the capital of Pakistan?', 'Islamabad', [
    { text: 'Islamabad', correct: true },
    { text: 'Lahore', correct: false },
    { text: 'Karachi', correct: false },
    { text: 'Punjab', correct: false }
]);
const secondQ = new Question("What color does yellow and green make?", "Lime", [
    { text: "Lime", correct: true },
    { text: "Purple", correct: false },
    { text: "Orange", correct: false },
    { text: "Blue", correct: false }
]);
const thirdQ = new Question("What is the name of the largest ocean?", "Pacific", [
    { text: "Pacific", correct: true },
    { text: "Atlantic", correct: false },
    { text: "Indian", correct: false },
    { text: "Arctic", correct: false }
]);
const fourthQ = new Question("What is the name of the largest country in the world?", "Russia", [
    { text: "Russia", correct: true },
    { text: "Canada", correct: false },
    { text: "China", correct: false },
    { text: "United States", correct: false }
]);
const fifthQ = new Question("What is the name of the largest planet in our solar system?", "Jupiter", [
    { text: "Jupiter", correct: true },
    { text: "Saturn", correct: false },
    { text: "Earth", correct: false },
    { text: "Mars", correct: false }
]);
const sixthQ = new Question("What is the name of the largest continent in the world?", "Asia", [
    { text: "Asia", correct: true },
    { text: "Africa", correct: false },
    { text: "North America", correct: false },
    { text: "South America", correct: false }
]);
const seventhQ = new Question("What is the name of the largest river in the world?", "Amazon", [
    { text: "Amazon", correct: true },
    { text: "Nile", correct: false },
    { text: "Yangtze", correct: false },
    { text: "Mississippi", correct: false }
]);
const eighthQ = new Question("What is the name of the largest lake in the world?", "Caspian Sea", [
    { text: "Caspian Sea", correct: true },
    { text: "Lake Superior", correct: false },
    { text: "Lake Victoria", correct: false },
    { text: "Lake Huron", correct: false }
]);
const ninthQ = new Question("What is the name of the largest mountain in the world?", "Mount Everest", [
    { text: "Mount Everest", correct: true },
    { text: "K2", correct: false },
    { text: "Kangchenjunga", correct: false },
    { text: "Lhotse", correct: false }
]);
const tenthQ = new Question("What is the name of the largest island in the world?", "Greenland", [
    { text: "Greenland", correct: true },
    { text: "New Guinea", correct: false },
    { text: "Borneo", correct: false },
    { text: "Madagascar", correct: false }
]);
largestQuestions.push(firstQ, secondQ, thirdQ, fourthQ, fifthQ, sixthQ, seventhQ, eighthQ, ninthQ, tenthQ);
