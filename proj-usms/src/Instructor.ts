import { Person } from './Person.js';
import { Course } from './Course.js';
import chalk from 'chalk';

export class Instructor extends Person{
    static _autoInstructorID: number = 0;

    _username: string;
    _password: string;
    _instructorId: number;
    _salary?: number;
    _courses: Course[] = [];

    constructor(username:string, password: string, id:number, name: string, age: number, gender:string, salary?:number) {
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

    // assignCourse(course: Course) {
    //     this._courses.push(course);
    // }
}