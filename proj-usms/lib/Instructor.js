import { Person } from './Person.js';
import chalk from 'chalk';
export class Instructor extends Person {
    static _autoInstructorID = 0;
    _username;
    _password;
    _instructorId;
    _salary;
    _courses = [];
    constructor(username, password, id, name, age, gender, salary) {
        super(id, name, age, gender);
        this._instructorId = ++Instructor._autoInstructorID;
        this._salary = salary;
        this._username = username;
        this._password = password;
    }
    viewProfile() {
        console.log(chalk.greenBright(`Student ID: ${this._instructorId}`));
        console.log(chalk.greenBright(`Name: ${this._name}`));
        console.log(chalk.greenBright(`Age: ${this._age}`));
        console.log(chalk.greenBright(`Gender: ${this._gender}`));
        console.log(chalk.greenBright(`Section: ${this._salary}`));
        console.log(chalk.greenBright(`Courses Assigned: ${this._courses}`));
    }
    viewAssignedCourses() {
        console.log(chalk.greenBright(`Courses Assigned: ${this._courses}`));
    }
}
