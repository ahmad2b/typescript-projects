import inquirer from "inquirer";
import chalk from "chalk";
import { toDoList } from "../index.js";
export const addTs = async () => {
    const task = await inquirer.prompt([
        {
            type: "input",
            name: "task",
            message: chalk.yellowBright("Enter Task to Add")
        }
    ]);
    if (task.task === "") {
        toDoList.push(task.task);
        console.log(chalk.greenBright(`Task "${task.task}" Added!`));
    }
    else {
        const conv = task.task.toString();
        toDoList.push(task.task);
        console.log(chalk.greenBright(`Task "${task.task}" Added!`));
    }
};
