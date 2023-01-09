import { Student } from './Student.js';
import { Instructor } from './Instructor.js';
import { Course } from './Course.js';

export let studentsData: Student[] = [];
export let instructorsData: Instructor[] = [];
export let coursesData: Course[] = [];

const student1 = new Student("mas", "123", 567, "Ahmad", 23, "Male" );
const student2 = new Student("mjs", "123", 789, "Junaid", 21, "Male" );

const course1 = new Course(100, "Web Design", "It is a Web Design Course", 150); 
const course2 = new Course(200, "Writing", "It is a Writing Course", 150);
const course3 = new Course(300, "Forex Trading", "It is a Forex Trading Course", 150);

studentsData.push(student1, student2);
coursesData.push(course1, course2, course3);



// course1.addStudents(student1);

//student1.setCourseEnrolled(course1);

