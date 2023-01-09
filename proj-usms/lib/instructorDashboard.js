import inquirer from "inquirer";
import chalk from "chalk";
import { coursesData, instructorsData } from "./Data.js";
let end = false;
export async function enterInstructorDash() {
    console.log(chalk.magentaBright("\nPlease enter your login details"));
    const enterDash = await inquirer.prompt([
        {
            name: "username",
            message: "Username: ",
            type: "input",
        },
        {
            name: "password",
            message: "Password: ",
            type: "password",
        },
    ]);
    let user = instructorsData.find((instructor) => instructor._username === enterDash.username && instructor._password === enterDash.password);
    if (user) {
        console.log(chalk.greenBright(`\nWelcome ${user._name}! You Have Successfuly Logined\n`));
        do {
            const instructorDashboard = await inquirer.prompt([
                {
                    name: "instructorDashboard",
                    message: "/Instructor Dashboard",
                    type: "list",
                    choices: [
                        "View Profile",
                        "View Assigned Courses",
                        "View Students Enrolled",
                        "Tools",
                        "Logout",
                    ],
                },
            ]);
            switch (instructorDashboard.instructorDashboard) {
                case "View Profile":
                    console.log(chalk.green("View Profile"));
                    instructorsData.find((instructor) => {
                        if (instructor._username == enterDash.username) {
                            instructor.viewProfile();
                        }
                    });
                case "View Assigned Courses":
                    console.log(chalk.green("View Profile"));
                    instructorsData.find((instructor) => {
                        if (instructor._username == enterDash.username) {
                            instructor.viewAssignedCourses();
                        }
                    });
                    break;
                case "View Students Enrolled":
                    console.log(chalk.green("Students Enrolled"));
                    console.log(coursesData.map((course) => course._students));
                    break;
                case "Tools":
                    console.log(chalk.green("Tools"));
                    break;
                case "Logout":
                    // console.log(chalk.green("Logout"));
                    console.log(chalk.green("Logging Out..."));
                    console.log("\n");
                    // console.log("\n");
                    // console.log(coursesData);
                    end = true;
                    break;
                default:
                    console.log(chalk.red("Invalid Input"));
                    break;
            }
        } while (end != true);
        return user;
    }
    else {
        console.log(chalk.red("Login Failed! Incorrect Username or Password\n"));
        const tryAgain = await inquirer.prompt([
            {
                name: "tryAgain",
                message: "Do You Want To Try Login Again?",
                type: "list",
                choices: ["Yes", "No"],
            }
        ]);
        if (tryAgain.tryAgain === "Yes") {
            enterInstructorDash();
        }
    }
}
