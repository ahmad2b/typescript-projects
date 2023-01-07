import inquirer from "inquirer"
import chalk from "chalk"
import { account } from "../index.js"

export const accountWD = async () => {
    const withdraw = await inquirer.prompt([
        {
            type: "Number",
            name: "withdraw",
            message: chalk.yellowBright("How much do you want to withdraw?"),
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

    console.log("Amount Withdrawn: " + chalk.greenBright(withdraw.withdraw));
    account.balance -= parseInt(withdraw.withdraw);
    account.transactionCount++;
    console.log(chalk.greenBright("Withdrawal Successful"));
    console.log("Your Balance is: " + chalk.greenBright(account.balance));
    
    return withdraw.withdraw;

}