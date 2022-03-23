const inquirer = require('inquirer'); 
const fs = require('fs');

const employeeQuestions = require("./lib/employeeQuestions");
const Employee = require("./lib/employeeClass");
const managerQuestions = require("./lib/managerQuestions");
const Manager = require("./lib/managerClass");
const engineerQuestions = require("./lib/engineerQuestions");
const Engineer = require("./lib/engineerClass");
const internQuestions = require("./lib/internQuestions");
const Intern = require("./lib/internClass");

let teamName = [];
let teamARR = [];


runProgram();

function runProgram () {
    inquirer.prompt([
        {
        type: "input",
        message: "Team Name for Profile",
        name: "profileName",
        }
    ])
    .then(function(data){
        const profileName = data.profileName;
        teamName.push(profileName);
        addMembers();
    });
};

function addMembers() {
    inquirer.prompt(employeeQuestions)
    .then(function(data){
        switch(data.employeeOptions){
            case "Manager": 
            addManager();
            break;
            case "Engineer":
            addEngineer();
            break;
            case "Intern" : 
            addIntern();
            break;
            case "Done Adding Employees" : 
            createHTML();
            break;
        };
    });
};

function addManager() {
    inquirer.prompt(managerQuestions)
    .then(function(data){
        const managerName = data.managerName;
        const managerID = data.managerID;
        const managerEmail = data.managerEmail;
        const managerNumber = data.managerNumber;
        const newManager = new Manager (managerName, managerID, managerEmail, managerNumber);
        const emplyeeInformation = 
        `
        <div>
        <h2>MANAGER</h2>
        <p>Name:    ${managerName}</p>
        <p>ID:      ${managerID}</p>
        <p>Email:   ${managerEmail}</p>
        <p>Phone:   ${managerNumber}</p>
        </div>
        `;
        teamARR.push(emplyeeInformation);
        addMembers();
    });
};
function addEngineer() {
    inquirer.prompt(engineerQuestions)
    .then(function(data){
        const engineerName = data.engineerName;
        const engineerID = data.engineerID;
        const engineerEmail = data.engineerEmail;
        const engineerGithub = data.engineerGithub;
        const newEngineer = new Engineer (engineerName, engineerID, engineerEmail, engineerGithub);
        const emplyeeInformation = 
        `
        <div>
        <h2>ENGINEER</h2>
        <p>Name:    ${engineerName}</p>
        <p>ID:      ${engineerID}</p>
        <p>Email:   ${engineerEmail}</p>
        <p>GitHub:   ${engineerGithub}</p>
        </div>
        `;
        teamARR.push(emplyeeInformation);
        addMembers();
    });
};
function addIntern() {
    inquirer.prompt(internQuestions)
    .then(function(data){
        const internName = data.internName;
        const internID = data.internID;
        const internEmail = data.internEmail;
        const internSchool = data.internSchool;
        const newIntern = new Intern (internName, internID, internEmail, internSchool);
        const emplyeeInformation = 
        `
        <div>
        <h2>INTERN</h2>
        <p>Name:    ${internName}</p>
        <p>ID:      ${internID}</p>
        <p>Email:   ${internEmail}</p>
        <p>School:   ${internSchool}</p>
        </div>
        `;
        teamARR.push(emplyeeInformation);
        addMembers();
    });
};

const fullPage = () => 
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${teamName}</title>
    </head>
    <body>
        <h1>${teamName}</h1>
        <div>
        ${teamARR}
        </div>
    </body>
    </html> 
    `;


function createHTML() {
    console.log(teamName);
    console.log(teamARR);
    const htmlpage = fullPage(teamARR);
    fs.writeFile('./dist/index.html', htmlpage, (err) =>
        err ? console.log(err) : console.log('HTML File Created')
    );
};


    





