import chalk from "chalk";
let announcements = [];
announcements.push("Welcome to University Mangagement University");
announcements.push("\nIts Good to See You Back at University Mangagement University");
export function display() {
    console.log("\n");
    console.log(chalk.yellow(announcements));
    console.log("\n");
}
