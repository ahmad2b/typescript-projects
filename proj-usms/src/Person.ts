export class Person {
    _id: number;
    _name: string;
    _age: number;
    _gender: string;

    constructor(id:number, name:string, age:number, gender:string) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._gender = gender;
    }

    getId() {
        return this._id;
    }

    getName() {
        return this._name;
    }

    getGender() {
        return this._gender;
    }
}