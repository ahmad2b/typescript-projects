import { Person } from './Person.js';
import { Course } from './Course.js';
import { coursesData, studentsData } from './Data.js';
import inquirer from 'inquirer';
import chalk from 'chalk';

export class Student extends Person {
    static _autoStudentID: number = 0;
    static _autoRollNumber: (number) = (100);

    _username: string;
    _password: string;
    _studentId: number;
    _rollNumber: number;
    _section?: string;
    _courses: Course[] = [];

    constructor(username:string, password: string, id:number, name: string, age: number, gender:string, section?:string) {
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

    setCourseEnrolled(course: Course) {
        this._courses.push(course);
        console.log(chalk.greenBright(`Successfully Enrolled in ${this._courses} Course\n`));
       // course.addStudents(this);       
    }

}
