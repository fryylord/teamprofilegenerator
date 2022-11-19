const generatePage = require('./src/generatePage');

const Employee = require('./lib/Employee'); 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

function addMember() {
    inquirer.prompt([{
        message: "Enter member's name",
        name: "name"
    },
    {
        type: "list",
        message: "Select member's role",
        choices: [
            "Employee",
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        message: "Enter team member's id",
        name: "id"
    },
    {
        message: "Enter team member's email address",
        name: "email"
    }])
    .then(function({name, role, id, email}) {
        let roleInfo = "";
        if (role === "Engineer") {
            roleInfo = "GitHub username";
        } else if (role === "Intern") {
            roleInfo = "school name";
        } else {
            roleInfo = "office phone number";
        }
        inquirer.prompt([{
            message: `Enter team member's ${roleInfo}`,
            name: "roleInfo"
        },
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
            if (role === "Employee") {
                newMember = new Employee(name, id, email, roleInfo)
            } else if (role === "Engineer") {
                newMember = new Engineer(name, id, email, roleInfo);
            } else if (role === "Intern") {
                newMember = new Intern(name, id, email, roleInfo);
            } else {
                newMember = new Manager(name, id, email, roleInfo);
            }
            employees.push(newMember);
            addHtml(newMember)
            .then(function() {
                if (moreMembers === "yes") {
                    addMember();
                } else {
                    finishHtml();
                }
            });
            
        });
    })}