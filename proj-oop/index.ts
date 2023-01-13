#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let tryOther = true;

class Shape {
    protected width: number;
    protected height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {
    constructor(width: number, height: number) {
        super(width, height);
    }
}

class Triangle extends Shape {
    constructor(width: number, height: number) {
        super(width, height);
    }

    getArea(): number {
        return (this.width * this.height) / 2;
    }
}

class Circle extends Shape {
    constructor(width: number, height: number) {
        super(width, height);
    }

    getArea(): number {
        return Math.PI * this.width * this.height;
    }
}

const mainShape = async () => {
    const shapeQuestions = await inquirer.prompt([
        {
            type: "list",
            name: "shape",
            message: "What shape do you want to calculate?",
            choices: ["Rectangle", "Triangle", "Circle"],
        },
    ]);

    const shape = shapeQuestions.shape;

    console.log(
        chalk.bgBlue.whiteBright.bold(`\n\t Shape Selected: ${shape} \n`)
    );

    const shapeDimensions = await inquirer.prompt([
        {
            type: "number",
            name: "width",
            message: chalk.cyanBright.italic.bold(
                ` What is the width of the ${shape}? `
            ),
        },
        {
            type: "number",
            name: "height",
            message: chalk.cyanBright.italic.bold(
                ` What is the height of the ${shape}? `
            ),
        },
    ]);

    const { width, height } = shapeDimensions;

    let shapeInstance: Shape;
    let area = 0;

    switch (shape) {
        case "Rectangle":
            shapeInstance = new Rectangle(width, height);
            area = shapeInstance.getArea();
            break;
        case "Triangle":
            shapeInstance = new Triangle(width, height);
            area = shapeInstance.getArea();
            break;
        case "Circle":
            shapeInstance = new Circle(width, height);
            area = shapeInstance.getArea();
            break;
        default:
            break;
    }

    console.log(
        chalk.bgGreen.whiteBright.bold(`\n\t The area of the ${shape} is ${area} `)
    );
};

class Employee {
    protected name: string;
    protected salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    getSalary(): number {
        return this.salary;
    }
}

class Manager extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary);
    }
}

class Developer extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary);
    }
}

class Teacher extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary);
    }
}

const mainEmployee = async () => {
    const employeeQuestions = await inquirer.prompt([
        {
            type: "list",
            name: "employee",
            message: "What employee do you want to calculate?",
            choices: ["Manager", "Developer", "Teacher"],
        },
    ]);

    const employee = employeeQuestions.employee;

    console.log(
        chalk.bgBlue.whiteBright.bold(`\n\t Employee Selected: ${employee} \n`)
    );

    const employeeSalary = await inquirer.prompt([
        {
            type: "number",
            name: "salary",
            message: chalk.cyanBright.italic.bold(
                ` What is the salary of the ${employee}? `
            ),
        },
    ]);

    const { salary } = employeeSalary;

    let employeeInstance: Employee;
    let selectedEmpSalary = 0;

    switch (employee) {
        case "Manager":
            employeeInstance = new Manager("Manager", salary);
            selectedEmpSalary = employeeInstance.getSalary();
            break;
        case "Developer":
            employeeInstance = new Developer("Developer", salary);
            selectedEmpSalary = employeeInstance.getSalary();
            break;
        case "Teacher":
            employeeInstance = new Teacher("Teacher", salary);
            selectedEmpSalary = employeeInstance.getSalary();
            break;
        default:
            break;
    }

    console.log(
        chalk.bgGreen.whiteBright.bold(
            `\n\t The salary of the ${employee} is ${selectedEmpSalary} `
        )
    );
};

const main = async () => {

    do {
        console.clear();
        console.log(chalk.bgBlue.whiteBright.bold("\n\t Welcome to the OOP project! \n"));

        const questions = await inquirer.prompt([
            {
                type: "list",
                name: "main",
                message: "Which class type do you want to use?",
                choices: ["Shape", "Employee"],
            },
        ]);

        const { main } = questions;

        switch (main) {
            case "Shape":
                console.log(
                    chalk.bgBlue.whiteBright.bold(`\n\t Class Selected: ${main} \n`)
                );
                await mainShape();
                break;
            case "Employee":
                console.log(
                    chalk.bgBlue.whiteBright.bold(`\n\t Class Selected: ${main} \n`)
                );
                await mainEmployee();
                break;
            default:
                break;
        }

        console.log("\n");

        const continueQuestions = await inquirer.prompt([
            {
                type: "confirm",
                name: "continue",
                message: "Do you want to try other class?",
            }
        ]);

        tryOther = continueQuestions.continue;

    } while (tryOther)
};

await main();