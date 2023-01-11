import { Question } from "./Question.js";
export let famousPlaces = [];
const firstQ = new Question("The International Rice Research Institute (IRRI) is located in", "Philippines", [
    { text: "Philippines", correct: true },
    { text: "Malaysia", correct: false },
    { text: "Thailand", correct: false },
    { text: "Indonesia", correct: false }
]);
const secondQ = new Question(" The official residence of the Pope is in:", "Vatican City", [
    { text: "Vatican City", correct: true },
    { text: "England", correct: false },
    { text: "America", correct: false },
    { text: "Rome", correct: false }
]);
const thirdQ = new Question("The headquarters of the United Nations is located in", "New York", [
    { text: "New York", correct: true },
    { text: "London", correct: false },
    { text: "Paris", correct: false },
    { text: "Rome", correct: false }
]);
const fourthQ = new Question("Pentagon is:", " A large building housing the Ministry of Defence of US", [
    { text: " A large building housing the Ministry of Defence of US", correct: true },
    { text: "A large building housing the Ministry of Defence of Russia", correct: false },
    { text: "Steel manufacturing centre", correct: false },
    { text: "None of these", correct: false }
]);
const fifthQ = new Question("The famous “Eiffel Tower” is in", "Paris", [
    { text: "Paris", correct: true },
    { text: "Italy", correct: false },
    { text: "New York", correct: false },
    { text: "London", correct: false }
]);
famousPlaces.push(firstQ, secondQ, thirdQ, fourthQ, fifthQ);
