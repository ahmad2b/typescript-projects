export class Person {
    _id;
    _name;
    _age;
    _gender;
    constructor(id, name, age, gender) {
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
