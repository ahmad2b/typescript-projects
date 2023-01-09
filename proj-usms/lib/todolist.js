import inquirer from "inquirer";
import chalk from "chalk";
import { addTs } from "./Functions/add.js";
import { deletTs } from "./Functions/delete.js";
let exit = false;
export let toDoList = ["item 1", "item 2", "item 3"];
// Welcome Message
const welcomeMsg = () => {
    console.clear();
    console.log(chalk.yellowBright("ToDo List"));
};
// Options Menu
const optionsMenu = async () => {
    const options = await inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: chalk.yellowBright("ToDo List Menu: "),
            choices: ["Add", "List", "Delete", "Exit App"]
        }
    ]);
    switch (options.option) {
        case "Add":
            await addTs();
            break;
        case "List":
            toDoList.map((x) => {
                console.log(chalk.yellowBright((x)));
            });
            break;
        case "Delete":
            await deletTs();
            break;
        case "Exit App":
            exit = true;
            console.log("\n");
            break;
        default:
    }
};
// Main Excutealb Program
export const mainList = async () => {
    welcomeMsg();
    do {
        console.log("\n");
        await optionsMenu();
    } while (!exit);
};
