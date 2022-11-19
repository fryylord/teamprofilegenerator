const Employee = require("./Employee")

class Engineer extends Employee {
    constructor (name, id, email, role, github) {   
        super (name, id, email, role);
        this.github = github
    }
    
    grabGithub () {
        return this.github;
    }

    grabRole () {
        return role;
    }
}
// to be exported 
module.exports = Engineer; 