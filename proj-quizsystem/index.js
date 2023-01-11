#! /usr/bin/env node
import { largestQuestions } from "./question_categories/largest.js";
import { computerQuestions } from "./question_categories/computerquestions.js";
import { famousPlaces } from "./question_categories/famousplaces.js";
import { famousQuestions } from "./question_categories/famouspersonalities.js";
import inquirer from "inquirer";
import chalk from "chalk";
let score = 0;
let selectedQuestions;
let again = true;
async function questCategories() {
    const categories = await inquirer.prompt([
        {
            type: "list",
            name: "category",
            message: chalk.cyanBright("\nSelect a Quiz Category"),
            choices: ["Largest", "Computer", "Famous Places", "Famous Personalities"],
        }
    ]);
    switch (categories.category) {
        case "Largest":
            selectedQuestions = largestQuestions;
            break;
        case "Computer":
            selectedQuestions = computerQuestions;
            break;
        case "Famous Places":
            selectedQuestions = famousPlaces;
            break;
        case "Famous Personalities":
            selectedQuestions = famousQuestions;
            break;
        default:
            console.log("Invalid Category Selected");
            break;
    }
    return categories.category;
}
async function askQ() {
    for (let i = 0; i < selectedQuestions.length; i++) {
        const q = selectedQuestions[i];
        const answer = await inquirer.prompt([
            {
                type: "list",
                name: "answer",
                message: chalk.yellowBright(q.text),
                choices: q.options.map((o, i) => {
                    return { name: o.text, value: i };
                }),
            }
        ]);
        if (q.options[answer.answer].correct) {
            console.log(chalk.green("Correct!"));
            score++;
        }
        else {
            console.log(chalk.red("Incorrect!"));
        }
    }
}
async function start() {
    console.clear();
    console.log(chalk.cyanBright("Welcome to the Quiz!\n"));
    do {
        await questCategories();
        console.log("\n");
        await askQ();
        const exit = await inquirer.prompt([
            {
                name: "Continue",
                message: chalk.cyanBright("\nDo you want to continue?"),
                type: "confirm"
            }
        ]);
        again = exit.Continue;
    } while (again);
    console.log(chalk.cyanBright("\nYou got " + score + " correct!"));
}
await start();
