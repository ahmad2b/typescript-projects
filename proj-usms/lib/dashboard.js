// import {studentsData} from "./UsersData.js";
// import {instructorsData} from "./UsersData.js";
// import { studentDashboard } from "./studentDashboard.js";
// import inquirer from "inquirer";
// import chalk from "chalk";
export {};
// export async function userLogin(){
//     const userLogined = await inquirer.prompt([
//         {
//             name: "usertype",
//             message: "Please select your user type",
//             type: "list",
//             choices: ["Student", "Instructor"]
//         },
//         {
//             name: "username",
//             message: "Please enter your username",
//             type: "input"
//         },
//         {
//             name: "password",
//             message: "Please enter your password",
//             type: "input"
//         }
//     ])
//     if(userLogined.usertype === "Student"){
//         let user = studentsData.find((student) => student._username === userLogined.username && student._password === userLogined.password);
//         if (user) {
//             console.log(chalk.green("Login Successful"));
//             studentDashboard();
//             return user;
//         }
//         else{
//             console.log(chalk.red("Login Failed"));
//         }
//     }
//     if(userLogined.usertype === "Instructor"){
//         let user = instructorsData.find((instructor) => instructor._username === userLogined.username && instructor._password === userLogined.password);
//         if (user) {
//             console.log(chalk.green("Login Successful"));
//             return user;
//         }
//         else{
//             console.log(chalk.red("Login Failed"));
//         }
//     }
// }
