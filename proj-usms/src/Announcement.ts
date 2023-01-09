import chalk from "chalk";

let announcements: string[] = [];

announcements.push("Welcome to University Mangagement University");
announcements.push("\nIts Good to See You Back at Metaverse University");

export function display(){
    console.log("\n");
    console.log(chalk.yellow(announcements));
    console.log("\n");
}