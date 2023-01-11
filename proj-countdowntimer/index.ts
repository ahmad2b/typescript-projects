#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let exit = false;

function timeInSec(){
    let ts = Date.now();
    let tsInSec = Math.floor(ts/1000);
    return tsInSec;
}

async function countdown_timer(number: number) {
    let start_time = timeInSec();
    let end_time = start_time + number;
    while (timeInSec() < end_time) {
        let seconds_remaining = end_time - timeInSec();
        console.clear();
        console.log(seconds_remaining + " seconds remaining.\n");
        setTimeout(function() {}, 1000);
    }
    console.log("Time's up!\n");
}

async function sec() {
    const number = await inquirer.prompt([
        {
            name: "duration",
            message: chalk.yellowBright("Enter duration in seconds: "),
            type: "number"
        }
    ]);

    const value = number.duration;
    countdown_timer(value);
}

async function main() {
    do {
        console.clear();
        console.log(chalk.cyanBright("Welcome to the countdown timer!\n"));

        await sec();

        const  exita  = await inquirer.prompt([
            {
                name: "exit",
                message: chalk.yellowBright("Do you want to exit? "),
                type: "confirm"
            }
        ]);
        exit = exita.exit;
    } while (!exit);
}

await main();