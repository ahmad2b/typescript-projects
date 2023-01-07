#! /usr/bin/env node
/*
Guess Game
> 0. Welcome the User
> 1. Generate a random number between 1 and 10
> 2. Ask the user to guess the number
> 3. If the user guesses the number, tell them they won
> 4. If the user guesses a number lower than the actual number, tell them it's higher
> 5. If the user guesses a number higher than the actual number, tell them it's lower
> 6. Give the user 5 tries to guess the number
> 7. If the user runs out of tries, tell them the game is over and what the number was
*/
import inquirer from "inquirer";
import chalk from "chalk";
async function welcome() {
    const welcomeUser = await inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: chalk.cyan("What is your name?")
        }
    ]);
    console.log(chalk.cyanBright(`Welcome ${welcomeUser.name}! to the Number Guess Game.`));
    console.log(chalk.yellowBright("\nRules:\n"));
    console.log(chalk.yellowBright("1. You have 5 chances to guess the number."));
    console.log(chalk.yellowBright("2. If you guess the number, you win."));
    console.log(chalk.yellowBright("3. If you guess a number lower than the actual number, it will tell you it's higher."));
    console.log(chalk.yellowBright("4. If you guess a number higher than the actual number, it will tell you it's lower.\n"));
    console.log(chalk.yellowBright("Lets Start The Game!\n"));
}
let playerLife = 5;
let randomNumber;
async function startGame() {
    randomNumber = Math.floor(Math.random() * 10 + 1);
    playerLife--;
    do {
        console.log(chalk.greenBright("Player Life: " + playerLife));
        var askQuestion = await inquirer.prompt([
            {
                name: "guess",
                type: "input",
                message: "Guess the number between 1 and 10"
            }
        ]);
        if (askQuestion.guess == randomNumber) {
            console.log(chalk.green("You Won!"));
            return;
        }
        else if (askQuestion.guess < randomNumber) {
            console.log(chalk.red(`The number ${randomNumber} is higher than ${askQuestion.guess}`));
            playerLife--;
        }
        else if (askQuestion.guess > randomNumber) {
            console.log(chalk.red(`The number ${randomNumber} is lower than ${askQuestion.guess}`));
            playerLife--;
        }
    } while ((playerLife > 0) && (askQuestion.guess != randomNumber));
    if (playerLife === 0) {
        console.log(chalk.red(`Game Over!`));
    }
}
async function startAgain() {
    do {
        console.clear();
        await welcome();
        playerLife = 5;
        await startGame();
        var restart = await inquirer.prompt([
            {
                type: "confirm",
                name: "restart",
                message: chalk.rgb(250, 128, 114)("Do you want to play again?")
            }
        ]);
    } while (restart.restart === true);
}
startAgain();
