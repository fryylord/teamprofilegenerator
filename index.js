// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');
const teamMembers = [];
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

function startApp () {
    createHtml();
    addMember();
}

function createHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark mb-5" style="background: red">
            <span class="navbar-brand mb-0 h1 w-100 text-center">My Team</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./dist/teamProfile.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
}

function addMember() {
    inquirer.prompt([{
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
        type: "list",
        message: "Select member's role: ",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
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
                    finishHtml();
                }
            });
            
        });
    })}
    
function addHtml(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
    if (role === "Engineer") {
        const gitHub = member.getGithub();
        data = `<div class="col-6">
        <div class="card mx-auto mb-3 bg-primary text-light" style="width: 300px">
            <h5 class="card-header">${name}<br /><br />👓 Engineer</h5>
            <ul class="list-group list-group-flush text-dark">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3 bg-primary text-light" style="width: 300px">
            <h5 class="card-header">${name}<br /><br />🎓 Intern</h5>
            <ul class="list-group list-group-flush text-dark">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        
        } else {
            const officePhone = member.getOffice();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3 bg-primary text-light" style="width: 300px">
            <h5 class="card-header">${name}<br /><br />🍵 Manager</h5>
            <ul class="list-group list-group-flush text-dark">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`
        }
            
        fs.appendFile("./dist/teamProfile.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });}
    
    function finishHtml() {
        const html = ` </div>
        </div>
        
    </body>
    </html>`;
    fs.appendFile("./dist/teamProfile.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });}
    startApp()