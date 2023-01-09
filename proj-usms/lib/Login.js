import { enterDash } from "./studentDashboard.js";
import { enterInstructorDash } from "./instructorDashboard.js";
import inquirer from "inquirer";
export async function userLogin() {
    const userLogined = await inquirer.prompt([
        {
            name: "usertype",
            message: "Please select your user type",
            type: "list",
            choices: ["Student", "Instructor"]
        }
    ]);
    if (userLogined.usertype === "Student") {
        enterDash();
    }
    if (userLogined.usertype === "Instructor") {
        enterInstructorDash();
    }
}
