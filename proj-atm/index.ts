#! /usr/bin/env node
/**
 * > Enter the ATM
 * > Check if Logined
 * > Welcome Message
 * > If not then Login
 * > If Logined then show the menu
 * > Show Menue [Transfer, Deposit, Withdraw, Check Balance, Exit]
 * > If Exit then Exit
 *  
 * 
 * > Main Logic
 * > Show Welcome Message
 * > Login
 * > Show Welcome Message
 * > Show Menu/Options (Perform all the operation inside the loop)
 * > Exit
 */

import inquirer from 'inquirer';
import chalk from 'chalk';
import { userDB } from './Functions/registered_users.js';
import { accDeposit } from './Functions/deposit.js';
import { accTransfer } from './Functions/transfer.js';
import { accountWD } from './Functions/withdraw.js';

let isLogined = false;
let exit = false;

export const account = {
    balance: Math.floor(Math.random() * 100000 + 1),
    transactionCount: 0,
    userName: "",
    password: "",
}

// Welcome Message
const welcomeMessage = (isLogined: boolean = false, inUser = account) => {
    console.clear();

    if(isLogined) {
        console.log(chalk.greenBright(`Welcome ${inUser.userName} to One ATM`));
        console.log(chalk.greenBright(`Your Balance is ${inUser.balance}`));
    } else {
        console.log(chalk.greenBright("Welcome to One ATM."));
    }
}

// Register User and Then Prompt to Login
const register = async () => {
    const details = await inquirer.prompt([
        {
            type: "input",
            name: "userName",
            message: "Set your Username",
        },
        {
            type: "password",
            name: "password",
            message: "Set your Password",
        }
    ]);
    account.userName = details.userName;
    account.password = details.password;

    await login();
}

// If User is not Logined; Ask if he wants to Login or Register 
const checkStatus = async () => {
    const status = await inquirer.prompt([
        {
            type: "list",
            name: "status",
            message: chalk.yellowBright("Select an option"),
            choices: ["Login", "Register"],
        }
    ]);

    if(status.status === "Login") {
        await login();
    } else {
        await register();
    }
}

// Login
const login = async () => {
    const lg = await inquirer.prompt([
        {
            type: "input",
            name: "userName",
            message: "Enter your Username",
        },
        {
            type: "password",
            name: "password",
            message: "Enter your Password",
        }
    ]);

    // Separate User DataBase is not made which is why new user is assigned to the account even at the time of registeration
    account.userName = lg.userName;
    account.password = lg.password;
    if((lg.userName === account.userName && lg.password === account.password) ) { //|| (lg.userName === userDB.user1.userName && lg.password === userDB.user1.password)
        isLogined = true;
    } else {
        console.log(chalk.redBright("Invalid Username or Password"));
    }
}

// ATM Main Screen With All Options
const menue = async () => {
    const options = await inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: "Select an option",
            choices: ["Transfer", "Deposit", "Withdraw", "Exit"],
        }
    ]);

    switch(options.option) {
        case "Transfer":
            await accTransfer();
            break;
        case "Deposit":
            await accDeposit();
            break;
        case "Withdraw":
            await accountWD();
            break;
        case "Exit":
            exit = true;
            break;
    }
}

// Main Program Executer
const run = async () => {
    // Welcome Message
    welcomeMessage(); 

    // If User is not Logined; Ask if he wants to Login or Register 
    await checkStatus();

    // If Logined than show ATM Main Screen until Exit
    do{
        welcomeMessage(true);
        await menue();
    } while(!exit);
}

await run();