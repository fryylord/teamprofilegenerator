const Employee = require("./Employee")

class Manager extends Employee {
    constructor (name, id, email, role, office) {   
        super (name, id, email, role);
        this.office = office
    }
    
    getOffice () {
        return this.office;
    }

    getRole () {
        return role;
    }
}
// to be exported 
module.exports = Manager; 