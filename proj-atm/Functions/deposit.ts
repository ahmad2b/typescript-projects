import inquirer from "inquirer";
import chalk from "chalk";
import { account } from "../index.js";
import { userDB } from "./registered_users.js";

export const accDeposit = async ( ) => {
    const deposit = await inquirer.prompt([
        {
            type: "Number",
            name: "deposit",
            message: chalk.yellowBright("How much do you want to deposit?"),
        }
    ]);

        if(deposit.deposit > 0) {
            account.balance += parseInt(deposit.deposit);
            account.transactionCount++;
            console.log(chalk.greenBright("Deposit Successful"));
        } else {
            console.log(chalk.redBright("Invalid Amount"));
        }
}