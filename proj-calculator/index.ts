#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';

/*
* Welcome the user
* ask for operations
* ask for numbers as many as they want to compute
* check if numbers are valid
* compute answers
* show the results
* more calculations?
*/
// Install
// npm i inquirer
// np, i-D @types/inquirer

console.log(chalk.blue('Hello world!'));

console.clear();

let checkConfirm = false;

function welcomeMsg(msg:string):void {
    console.log(msg);
}

function validateNumber(input: any): string | boolean{
    if(isNaN(input)){
        return "Please enter a valid number";
    } else {
        return true;
    }
};

type Answers = {
    firstNumber: string,
    secondNumber: string,
    operation: '+' | '-' | '*' | '÷' | "%" | "^"
};

async function getInput(){
    const answers: Answers = await inquirer.prompt([
        {
            name: 'firstNumber',
            type: 'input',
            message: 'Enter the first number',
            validate: validateNumber
        },
        {
            name: 'operation',
            type: 'list',
            choices: ['+', '-', '*', '÷', "%", "^"],
            message: 'Choose one operation',
        },
        {
            name: 'secondNumber',
            type: 'input',
            message: 'Enter the second number',
            validate: validateNumber
        } 
    ])

let firstNumber = Number(answers.firstNumber);
let secondNumber = Number(answers.secondNumber);
let fAnswer = 0;
    switch(answers.operation){
        case '+':
            console.log(chalk.yellow(`Results: ${firstNumber + secondNumber}`));
            break;
        case '-':
            fAnswer = firstNumber - secondNumber;
            if(fAnswer < 0){
                console.log(chalk.red(`Results: ${fAnswer}`));
            } else {    
                console.log(chalk.yellow(`Results: ${fAnswer}`));
            }
            break;
        case '*':
            console.log(`Results: ${firstNumber * secondNumber}`);
            break; 
        case '÷':
            console.log(`Results: ${firstNumber / secondNumber}`);
            break;      
        case '%':
            console.log(`Results: ${firstNumber % secondNumber}`);
            break; 
        case '^':
            console.log(`Results: ${Math.pow(firstNumber, secondNumber)}`);
            break;                         
        default:
             break;
    };

    const CheckConfirm = await inquirer.prompt([
        {
            name: "confirm",
            type: "confirm",
            message: "Do you want to do more calculations?"
        }
    ]);

    checkConfirm = CheckConfirm.confirm;

};

async function main(){
welcomeMsg("Welcome to the Best Calculator");
do{
await getInput();
} while(checkConfirm)
};

main();