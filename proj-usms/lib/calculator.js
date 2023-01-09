import inquirer from "inquirer";
import chalk from "chalk";
console.clear();
let checkConfirm = false;
// Welcome The User
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 3650);
    });
};
async function welcome() {
    const welcomeMsg = await inquirer.prompt([
        {
            name: "name",
            message: chalk.yellowBright("What's your name?"),
            type: "input"
        }
    ])
        .then((answers) => {
        // Use user feedback for... whatever!!
        const rainbow = chalk.yellowBright(`Welcome ${(answers.name)} to the Best Calculator Ever!`); // Animation starts
    });
    await sleep();
    const calculatorAni = chalk.yellowBright(`   _____________________
  |  _________________  |
  | | MAS          0. | |
  | |_________________| |
  |  ___ ___ ___   ___  |
  | | 7 | 8 | 9 | | + | |
  | |___|___|___| |___| |
  | | 4 | 5 | 6 | | - | |
  | |___|___|___| |___| |
  | | 1 | 2 | 3 | | x | |
  | |___|___|___| |___| |
  | | . | 0 | = | | / | |
  | |___|___|___| |___| |
  |_____________________|`);
}
// Ask User Which Operation They Want To Perform
async function askOperation() {
    const selectOperation = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.yellowBright("Which operation would you like to perform?"),
            type: "list",
            choices: ["Addition - (+)", "Subtraction - (-)", "Multiplication - (*)", "Division - (÷)", "Modulus - (%)", "Exponentiation - (^)"]
        },
        {
            name: "firstNumber",
            message: chalk.yellowBright("Enter the first number? \n"),
            type: "input"
        },
        {
            name: "secondNumber",
            message: chalk.yellowBright("Enter the second number? \n"),
            type: "input"
        }
    ]);
    switch (selectOperation.operation) {
        case "Addition - (+)":
            console.log(chalk.greenBright(`The sum of ${selectOperation.firstNumber} and ${selectOperation.secondNumber} is ${Number(selectOperation.firstNumber) + Number(selectOperation.secondNumber)}`));
            break;
        case "Subtraction - (-)":
            console.log(chalk.greenBright(`The difference of ${selectOperation.firstNumber} and ${selectOperation.secondNumber} is ${Number(selectOperation.firstNumber) - Number(selectOperation.secondNumber)}`));
            break;
        case "Multiplication - (*)":
            console.log(chalk.greenBright(`The product of ${selectOperation.firstNumber} and ${selectOperation.secondNumber} is ${Number(selectOperation.firstNumber) * Number(selectOperation.secondNumber)}`));
            break;
        case "Division - (÷)":
            console.log(chalk.greenBright(`The quotient of ${selectOperation.firstNumber} and ${selectOperation.secondNumber} is ${Number(selectOperation.firstNumber) / Number(selectOperation.secondNumber)}`));
            break;
        case "Modulus - (%)":
            console.log(chalk.greenBright(`The remainder of ${selectOperation.firstNumber} and ${selectOperation.secondNumber} is ${Number(selectOperation.firstNumber) % Number(selectOperation.secondNumber)}`));
            break;
        case "Exponentiation - (^)":
            console.log(chalk.greenBright(`The exponent of ${selectOperation.firstNumber} and ${selectOperation.secondNumber} is ${Number(selectOperation.firstNumber) ** Number(selectOperation.secondNumber)}`));
            break;
        default:
            console.log(chalk.redBright("Invalid Operation"));
            break;
    }
    const CheckConfirm = await inquirer.prompt([
        {
            name: "confirm",
            type: "confirm",
            message: "Do you want to do more calculations?"
        }
    ]);
    checkConfirm = CheckConfirm.confirm;
}
await welcome();
/*async function askAgain() {
  
  do{
    await askOperation();
  }while (checkConfirm)
};

await askAgain();*/ 
