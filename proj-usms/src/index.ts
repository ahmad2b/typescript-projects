import register from "./register.js";
import { userLogin } from "./login.js";
import inquirer from "inquirer";
import chalk from "chalk";

console.clear();

async function start() {
    console.log(chalk.magentaBright("Welcome to University Management System"));
    
    const appStart = await inquirer.prompt([
        {
            name: "UMS",
           // message: "Welcome to University Management System. Please select one of the following options",
            type: "list",
            choices: ["register", "login"]
        }
    ])

    if (appStart.UMS === "register") {
        register();
    }

    if (appStart.UMS === "login") {
        userLogin();
    }
}

start();
