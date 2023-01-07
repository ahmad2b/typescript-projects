import inquirer from "inquirer";
import chalk from "chalk";
import { account } from "../index.js";
import { userDB } from "./registered_users.js";

export const accTransfer = async () => {
    const bank = await inquirer.prompt([
        {
            type: "list",
            name: "bank",
            message: chalk.yellowBright("Select a Bank"),
            choices: ["Bank A", "Bank B", "Bank C"],
        }
    ]);

    const accountNumber = await inquirer.prompt([
        {
            type: "Number",
            name: "accountNumber",
            message: chalk.yellowBright("Enter Account Number"),
        }
    ]);
    
    const transfer = await inquirer.prompt([
        {
            type: "input",
            name: "transfer",
            message: chalk.yellowBright("How much do you want to transfer?"),
            validate: (value) => {
                if(isNaN(value) || value === "") {
                    return chalk.redBright("Invalid Amount");
                }

                if(Number(value) > account.balance) {
                    return chalk.redBright("Insufficient Funds");
                }

                return true;
            }
        }

    ]);

    console.log("Amount Transferred: " + chalk.greenBright(transfer.transfer));
    account.balance -= parseInt(transfer.transfer);
    account.transactionCount++;
    console.log(chalk.greenBright("Transfer Successful"));
    console.log("Your Balance is: " + chalk.greenBright(account.balance));
    
    return transfer.transfer;

}