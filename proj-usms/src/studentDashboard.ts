import inquirer from "inquirer";
import chalk, { supportsColorStderr } from "chalk";
import { Student } from "./Student.js";
import { Instructor } from "./Instructor.js";
import { Course } from "./Course.js";
import { coursesData, studentsData } from "./Data.js";
import { userLogin } from "./Login.js";
import { display } from "./Announcement.js";

let end: boolean = false;

export async function enterDash() {

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

    let user = studentsData.find(
        (student) => student._username === enterDash.username && student._password === enterDash.password
    );

    if (user) {
        console.log(chalk.greenBright(`\nWelcome ${user._name}! You Have Successfuly Logined\n`));

        do{
            const studentDashboard = await inquirer.prompt([
            {
                name: "studentDashboard",
                message: "Student Dashboard",
                type: "list",
                choices: [
                    "View Profile",
                    "Announcements",
                    "Exams",
                    "View Registered Courses",
                    "Enroll in New Courses",
                    "View All Course",
                    "Fee/Balance",
                    "Tools",
                    "Logout",
                ],
            },
            ]);
            switch (studentDashboard.studentDashboard) {
            case "View Profile":
                // console.log(chalk.green("\n"));
                studentsData.find((student) => {
                    if(student._username == enterDash.username){
                    student.viewProfile();
                    }
                });
                break;
            case "Announcements":
                // console.log(chalk.green("\n"));
                display();
                break;
            case "Exams":
                console.log(chalk.green("Exams"));
                break;
            case "View All Course":
                console.log(chalk.green("View All Course"));
                console.log(coursesData.map((course) => course._name));
                break;
            case "View Registered Courses":
                console.log(chalk.green("View Registered Courses"));
                studentsData.find((student) => {
                    if(student._username == enterDash.username){
                    student.viewCoursesEnrolled();
                    }});
                break;
            case "Enroll in New Courses":
                console.log(chalk.green("Enroll in New Courses"));
                const enrollCourse = await inquirer.prompt([
                    {
                        name: "enrollCourse",
                        message: 'Select Course',
                        type: 'list',
                        choices: coursesData.map((course) => course.getCourseName())
                    }
                ]);
                user.setCourseEnrolled(enrollCourse.enrollCourse);   
                break;               
            case "Fee/Balance":
                console.log(chalk.green("Fee/Balance"));
                break;
            case "Tools":
                console.log(chalk.green("Tools"));
                break;
            case "Logout":
            //    console.log(chalk.green("Logout"));
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
        }while(end != true);
    
        return user;
    } else {
        console.log(chalk.red("Login Failed! Incorrect Username or Password\n"));

        const enterAgain = await inquirer.prompt([
            {
                name: "try",
                message: "Do You Want To Try Login Again?",
                type: "list",
                choices: ["Yes", "No"],
            }
        ]);

        if(enterAgain.try === "Yes"){
            console.log("\nEntering Again");
            enterDash();
            //userLogin(); // enterDash is not working here which is why we are redirecting it to userLogin
       
        }
    }

}

