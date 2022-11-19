const Employee = require("./Employee")

class Intern extends Employee {
    constructor (name, id, email, role, school) {   
        super (name, id, email, role);
        this.school = school
    }
    
    grabSchool () {
        return this.school;
    }

    grabRole () {
        return role;
    }
}
// to be exported 
module.exports = Intern; 