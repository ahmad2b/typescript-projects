export class Ums {
    _students = [];
    _instructors = [];
    _courses = [];
    signIn(username, password) {
        let user = this._students.find((student) => student._username === username && student._password === password);
        if (user) {
            return user;
        }
        let ruser = this._instructors.find((instructor) => instructor._username === username && instructor._password === password);
        if (ruser) {
            return ruser;
        }
        return null;
    }
}
