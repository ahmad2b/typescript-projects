import { Student } from './Student.js';
import { Instructor } from './Instructor.js';
import chalk from 'chalk';

export class Course {
    _id: number;
    _name: string;
    _description: string;
    _creditHours: number;
    _students!: Student[];
    _instructor!: Instructor;

    constructor(id:number, name:string, description:string, credits:number) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._creditHours = credits;
        //this._students = students;
    }

    getCourseId() {
        return this._id;
    }

    getCourseName() {
        return this._name;
       // console.log(chalk.blueBright(`Name: ${this._name}`));
    }

    getCourseDescription() {
        return this._description;
    }

    getCourseCreditHours() {
        return this._creditHours;
    }

    getStudentsEnrolled() {
        return this._students;
    }

    getCourseInstructors() {
        return this._instructor;
    }

    addStudents(student: Student){
        this._students.push(student);    
       student.setCourseEnrolled(this);
    }

    enrollStudent(student: Student){
        this._students.push(student);
        console.log(chalk.greenBright(`Successfully Enrolled in ${this._name} Course`));
    }

    setInstructor(instructor: Instructor){
        this._instructor = instructor;    
    }
}