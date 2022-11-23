const fs = require('fs'); 

//Function for creating the first part of the html
function startHtml() {
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
    <nav class="navbar navbar-dark mb-5" style="background: red; color: white">
    <span class="mb-0 h1 w-100 text-center">My Team</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./dist/teamProfile.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
}

//Creates the html depending on the member selected
function addHtml(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
    
    if (role === "Engineer") {
        const gitHub = member.getGithub();
        data = `<div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary text-light">
                <h3>${name}<br /><br />🥽 Engineer</h3>
            </div>
            <div class="card-body">
                <p>ID: ${id}</p>
                <p>Email:<a href="mailto:${email}"> ${email}</a></p>
                <p>gitHub Page: <a href="http://www.github.com/${gitHub}/"> ${gitHub}</a></p>
            </div>
            </div>
        </div>`;
        
    } else if (role === "Intern") {
        const school = member.getSchool();
            data = `    <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header bg-primary text-light">
                    <h3>${name}<br /><br />🎓 Intern</h3>
                </div>
                <div class="card-body">
                    <p>ID: ${id}</p>
                    <p>Email:<a href="mailto:${email}"> ${email}</a></p>
                    <p>School: ${school}</p>
                </div>
        </div>
        </div>`;
        
        } else {
            const officePhone = member.getOffice();
            data = `    <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header bg-primary text-light">
                    <h3>${name}<br /><br />🍵 Manager</h3>
                </div>
                <div class="card-body">
                    <p>ID: ${id}</p>
                    <p>Email:<a href="mailto:${email}"> ${email}</a></p>
                    <p>Office Phone: ${officePhone}</p>
                </div>
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

    //adds the closing material for the rest of the webpage 
    function finalizeHtml() {
        const html = `</div>
        </div>
    </body>
    </html>`;
    fs.appendFile("./dist/teamProfile.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });}
    
    module.exports = {startHtml, addHtml, finalizeHtml}