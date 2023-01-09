#! /usr/bin/env node
import register from "./register.js";
import { userLogin } from "./login.js";
import inquirer from "inquirer";
import chalk from "chalk";
async function start() {
    console.clear();
    console.log(chalk.magentaBright("Welcome to University Management System!\n"));
    const appStart = await inquirer.prompt([
        {
            name: "UMS",
            type: "list",
            choices: ["register", "login"]
        }
    ]);
    if (appStart.UMS === "register") {
        register();
    }
    if (appStart.UMS === "login") {
        userLogin();
    }
}
start();
