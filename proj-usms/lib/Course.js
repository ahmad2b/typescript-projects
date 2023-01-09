import chalk from 'chalk';
export class Course {
    _id;
    _name;
    _description;
    _creditHours;
    _students;
    _instructor;
    constructor(id, name, description, credits) {
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
    addStudents(student) {
        this._students.push(student);
        student.setCourseEnrolled(this);
    }
    enrollStudent(student) {
        this._students.push(student);
        console.log(chalk.greenBright(`Successfully Enrolled in ${this._name} Course`));
    }
    setInstructor(instructor) {
        this._instructor = instructor;
    }
}
