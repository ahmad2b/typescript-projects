import inquirer from "inquirer";
import chalk from "chalk";
async function studentDashboard() {
    const studentDashboard = await inquirer.prompt([
        {
            name: "studentDashboard",
            message: "Student Dashboard",
            type: "list",
            choices: ["View Profile", "Announcements", "Exams", "Enroll in New Courses", "View Registered Courses", "Fee/Balance", "Tools", "Logout"],
        },
    ]);
    switch (studentDashboard.studentDashboard) {
        case "View Profile":
            console.log(chalk.green("View Profile"));
            break;
        case "Announcements":
            console.log(chalk.green("Announcements"));
            break;
        case "Exams":
            console.log(chalk.green("Exams"));
            break;
        case "Enroll in New Courses":
            console.log(chalk.green("Enroll in New Courses"));
            break;
        case "View Registered Courses":
            console.log(chalk.green("View Registered Courses"));
            break;
        case "Fee/Balance":
            console.log(chalk.green("Fee/Balance"));
            break;
        case "Tools":
            console.log(chalk.green("Tools"));
            break;
        case "Logout":
            console.log(chalk.green("Logout"));
            break;
        default:
            console.log(chalk.red("Invalid Input"));
            break;
    }
}
