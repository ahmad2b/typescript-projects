import inquirer from "inquirer";
import chalk from "chalk";
import { toDoList } from "../index.js";

export const deletTs = async () => {
    const  task  = await inquirer.prompt([
        {
            type: "list",
            name: "task",
            message: chalk.yellowBright("Select The Task to Delete"),
            choices: toDoList.map((x) => {
                return x;
            })
        }
    ]);

    const confirmDel = await inquirer.prompt([
        {
            type: "confirm",
            name: "confirm",
            message: chalk.yellowBright(`Are you sure you want to delete ${task.task}?`)
        }
    ]);

    if (confirmDel.confirm) {
        const index = toDoList.indexOf(task.task);
        toDoList.splice(index, 1);
        console.log(chalk.greenBright("Task Deleted!"));
    } else {
        console.log(chalk.red("Task Not Deleted!"));
    }

}