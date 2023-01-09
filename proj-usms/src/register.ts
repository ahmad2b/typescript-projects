import inquirer from "inquirer";
import chalk from "chalk";
import { Student } from "./Student.js";
import { Instructor } from "./Instructor.js";
import { userLogin } from "./login.js";
import {studentsData} from "./Data.js";
import {instructorsData} from "./Data.js";
import { enterDash } from "./studentDashboard.js";
import { enterInstructorDash } from "./instructorDashboard.js";

async function studentRegister() {
    console.log(chalk.magentaBright("\nStudent Registration Form. Please Fill in the following details"));
    const studentRegister = await inquirer.prompt([        
        {
            name: "userName",
            message: "Username: ",
            type: "input"
        },  
        {
            name: "password",
            message: "Password: ",
            type: "password"
        },       
        {
            name: "studentID",
            message: "National ID: ",
            type: "number"
        },
        {
            name: "studentName",
            message: "Full Name: ",
            type: "input"
        },
        {
            name: "studentAge",
            message: "Age: ",
            type: "number"
        },
        {
            name: "studentGender",
            message: "Gender: ",
            type: "checkbox",
            choices: ["Male", "Female"]
        }
    ])

    studentsData.push(new Student(studentRegister.userName, studentRegister.password, studentRegister.studentID, studentRegister.studentName, studentRegister.studentAge, studentRegister.studentGender));
    console.log(chalk.greenBright("\nYou Have Successfully Registered\n"));

    const studentLogin = await inquirer.prompt([
        {
            name: "studentLogin",
            message: "Do you want to login now?",
            type: "confirm"
        }
    ])

    if(studentLogin.studentLogin === true){
        enterDash();
    } else {
        console.log(chalk.magentaBright("Thank you for registering."));
    }
    
}

async function instructortRegister() {
    console.log(chalk.magentaBright("\nInstructor Registration Form. Please Fill in the following details"));
    const instructortRegister = await inquirer.prompt([
        {
            name: "userName",
            message: "Username: ",
            type: "input"
        },  
        {
            name: "password",
            message: "Password: ",
            type: "password"
        },       
        {
            name: "cnic",
            message: "National ID: ",
            type: "number"
        },
        {
            name: "instructorName",
            message: "Full Name: ",
            type: "input"
        },
        {
            name: "instructorAge",
            message: "Age: ",
            type: "number"
        },
        {
            name: "instructorGender",
            message: "Gender: ",
            type: "checkbox",
            choices: ["Male", "Female"]
        }
    ])

    instructorsData.push(new Instructor(instructortRegister.userName, instructortRegister.password, instructortRegister.cnic, instructortRegister.instructorName, instructortRegister.instructorAge, instructortRegister.instructorGender));
    console.log(chalk.greenBright("\nYou Have Successfully Registered\n"));

    const instructorLogin = await inquirer.prompt([
        {
            name: "instructorLogin",
            message: "Do you want to login now?",
            type: "confirm"
        }
    ])

    if(instructorLogin.instructorLogin === true){
        enterInstructorDash();
    } else {
        console.log(chalk.magentaBright("Thank you for registering."));
    }
    
}

async function register() {
    console.log(chalk.magentaBright("\nPlease select one of the following options"));
    const appRegister = await inquirer.prompt([
        {
            name: "register",
            type: "list",
            choices: ["Student", "Instructor"]
        }
    ])
    if (appRegister.register === "Student") {
        studentRegister();
    }
    if (appRegister.register === "Instructor") {
        instructortRegister()
    }
}

export default register;