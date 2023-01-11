export class Question {
    text: string;
    answer: string;
    options: { text: string, correct: boolean }[];

    constructor(text: string, answer: string, options: { text: string, correct: boolean }[]) {
        this.text = text;
        this.answer = answer;
        this.options = options;
    }
  
}
