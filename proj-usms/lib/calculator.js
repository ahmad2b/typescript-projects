import inquirer from "inquirer";
import chalk from "chalk";
let checkConfirm = false;
function welcomeMsg(msg) {
    console.log(chalk.yellowBright(msg));
}
function validateNumber(input) {
    if (isNaN(input)) {
        return "Please enter a valid number";
    }
    else {
        return true;
    }
}
async function getInput() {
    const answers = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            choices: ["+", "-", "*", "÷", "%", "^"],
            message: chalk.yellowBright("Select one operation"),
        },
        {
            name: "firstNumber",
            type: "input",
            message: chalk.yellowBright("Enter the first number"),
            validate: validateNumber,
        },
        {
            name: "secondNumber",
            type: "input",
            message: chalk.yellowBright("Enter the second number"),
            validate: validateNumber,
        },
    ]);
    let firstNumber = Number(answers.firstNumber);
    let secondNumber = Number(answers.secondNumber);
    let fAnswer = 0;
    switch (answers.operation) {
        case "+":
            console.log(chalk.greenBright(`Results: ${firstNumber + secondNumber}\n`));
            break;
        case "-":
            fAnswer = firstNumber - secondNumber;
            if (fAnswer < 0) {
                console.log(chalk.redBright(`Results: ${fAnswer}`));
            }
            else {
                console.log(chalk.greenBright(`greenBright: ${fAnswer}\n`));
            }
            break;
        case "*":
            console.log(chalk.greenBright(`Results: ${firstNumber * secondNumber}\n`));
            break;
        case "÷":
            console.log(chalk.greenBright(`Results: ${firstNumber / secondNumber}\n`));
            break;
        case "%":
            console.log(chalk.greenBright(`Results: ${firstNumber % secondNumber}\n`));
            break;
        case "^":
            console.log(chalk.greenBright(`Results: ${Math.pow(firstNumber, secondNumber)}\n`));
            break;
        default:
            break;
    }
    const CheckConfirm = await inquirer.prompt([
        {
            name: "confirm",
            type: "confirm",
            message: chalk.yellowBright("Do you want to do more calculations?"),
        },
    ]);
    checkConfirm = CheckConfirm.confirm;
}
export async function main() {
    console.clear();
    welcomeMsg("Calculator App");
    do {
        await getInput();
    } while (checkConfirm);
}
