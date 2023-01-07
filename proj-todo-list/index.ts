#! /usr/bin/env node

/**
 * Welcome User
 * ToDo App Options Menu
 * 1. Add Task
 * 2. List Task
 * 3. Delete Task
 * 4. Read Task
 * 5. Exit App
 * Keep the App in the Loop Until Exit
 */
import inquirer from "inquirer";
import chalk from "chalk";
import { addTs } from "./Functions/add.js";
import { deletTs } from "./Functions/delete.js";

let exit = false;

export let toDoList: string[] = ["item 1", "item 2", "item 3"];

// Welcome Message
const welcomeMsg = () => {
    console.clear();
    console.log(chalk.cyanBright("Welcome to ToDo App"));
}

// Options Menu
const optionsMenu = async () => {
    const options = await inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: chalk.cyanBright("ToDo App Options Menu"),
            choices: ["Add", "List", "Delete", "Exit App"]
        }
    ]);

    switch (options.option) {
        case "Add":
            await addTs();
            break;
        case "List":
            toDoList.map( (x) => {
            console.log(chalk.yellowBright((x)));    
            });
            break;
        case "Delete":
            await deletTs();
            break;
        case "Exit App":
            exit = true;
            break;
        default:
    }
}

// Main Excutealb Program
const main = async () => {
    welcomeMsg();
    
    do {
        console.log("\n");
        await optionsMenu();
    } while (!exit) 
}

main();