#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

/*
 Project Word Counter
*/

let exit = false;

const welcomeMsg = () => {
    console.clear();
    console.log(chalk.cyanBright("Welcome to Word Counter App"));
}

const main = async () => {
    const word = await inquirer.prompt([
        {
            type: "input",
            name: "word",
            message: chalk.yellowBright("Enter Words You Want To Count: ")
        }
    ]);

    const wordCount = word.word.split(" ").length;
    console.log(chalk.greenBright(`\nWord Count: ${wordCount}`));

    const characterCount = word.word.length;
    console.log(chalk.greenBright(`Character Count: ${characterCount}\n`));

}


const wordCounter = async () => {
    welcomeMsg();

    do{
        console.log('\n');
        await main();

        const { exitApp } = await inquirer.prompt([
            {
                type: "confirm",
                name: "exitApp",
                message: chalk.yellowBright("Do You Want To Continue?")
            }
        ]);

        exit = exitApp;

    } while (exit)
}

wordCounter();