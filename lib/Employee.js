class Employee {
    constructor (name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email
        this.role = role 
    }
    
    grabName () {
        return this.name;
    }
    
    grabId () {
        return this.id;
    }   

    grabEmail () {
        return this.email;
    }

    grabRole () {
        return this.role; 
    }
};

// to be exported 
module.exports = Employee; 