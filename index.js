// Modules/Constants for page 
const inquirer = require('inquirer');
const teamMembers = [];
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const {startHtml, addHtml, finalizeHtml} = require('./src/generateHTML')

//Starts the application and creates the first part of the html
function startApp () {
    startHtml();
    addMember();
}

//Function that allows you to pick the role and enter relevant information
function addMember() {
    inquirer.prompt([
    {
            type: "list",
            message: "Select member's role: ",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
            ],
            name: "role"
    },
    {
        type: 'input',
        message: "Enter member's name: ",
        name: "name",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter the team member's name!");
                return false; 
            }
    },},
    {
        type: 'input',
        message: "Enter team member's id: ",
        name: "id",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log ("Please enter the team member's id!");
                return false; 
            }
    },},
    {
        type: 'input',
        message: "Enter team member's email address: ",
        name: "email",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log ("Please enter the team member's email address!");
                return false; 
            }
}}])
    .then(function({name, role, id, email}) {
        let roleInfo = "";
        if (role === "Engineer") {
            roleInfo = "GitHub username: ";
        } else if (role === "Intern") {
            roleInfo = "school name: ";
        } else {
            roleInfo = "office phone number: ";
        }
        inquirer.prompt([{
            type: 'input',
            message: `Enter team member's ${roleInfo}`,
            name: "roleInfo",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log ("Please enter the team member's email address!");
                    return false; 
                }
        },},
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: [
                "yes",
                "no"
            ],
            name: "moreMembers"
        }])
        .then(function({roleInfo, moreMembers}) {
            let newMember;
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, roleInfo);
            } else if (role === "Intern") {
                newMember = new Intern(name, id, email, roleInfo);
            } else {
                newMember = new Manager(name, id, email, roleInfo);
            }
            teamMembers.push(newMember);
            addHtml(newMember)
            .then(function() {
                if (moreMembers === "yes") {
                    addMember();
                } else {
                    finalizeHtml();
                }
            });
            
        });
    })}

    //initiates program
    startApp()