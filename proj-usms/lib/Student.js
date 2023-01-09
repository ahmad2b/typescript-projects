import { Person } from './Person.js';
import chalk from 'chalk';
export class Student extends Person {
    static _autoStudentID = 0;
    static _autoRollNumber = (100);
    _username;
    _password;
    _studentId;
    _rollNumber;
    _section;
    _courses = [];
    constructor(username, password, id, name, age, gender, section) {
        super(id, name, age, gender);
        this._studentId = ++Student._autoStudentID;
        this._rollNumber = ++Student._autoRollNumber;
        this._section = section;
        this._username = username;
        this._password = password;
    }
    viewProfile() {
        console.log("\n");
        console.log(chalk.yellowBright(`Student ID: ${this._studentId}`));
        console.log(chalk.yellowBright(`Roll Number: ${this._rollNumber}`));
        console.log(chalk.yellowBright(`Name: ${this._name}`));
        console.log(chalk.yellowBright(`Age: ${this._age}`));
        console.log(chalk.yellowBright(`Gender: ${this._gender}`));
        console.log(chalk.yellowBright(`Section: ${this._section}`));
        console.log(chalk.yellowBright(`Courses Enrolled: ${this._courses}`));
        console.log("\n");
    }
    viewCoursesEnrolled() {
        console.log(chalk.greenBright(`Courses Enrolled: ${this._courses}`));
    }
    setCourseEnrolled(course) {
        this._courses.push(course);
        console.log(chalk.greenBright(`Successfully Enrolled in ${this._courses} Course`));
        // course.addStudents(this);       
    }
}
