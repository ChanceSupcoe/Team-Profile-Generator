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
let employeeARR = [];


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
        <div class="col-4">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">INTERN</h5>
                <p class="card-text">Name: ${managerName}</p>
                <p class="card-text">Id: ${managerID}</p>
                <p class="card-text">Email: ${managerEmail}</p>
                <p class="card-text">Phone: ${managerNumber}</p>
                </div>
            </div>
        </div>
        `;
        teamARR.push(emplyeeInformation);
        employeeARR.push(newManager);
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
        <div class="col-4">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">ENGINEER</h5>
                <p class="card-text">Name: ${engineerName}</p>
                <p class="card-text">Id: ${engineerID}</p>
                <p class="card-text">Email: ${engineerEmail}</p>
                <p class="card-text">GitHub: ${engineerGithub}</p>
                </div>
            </div>
        </div>
        `;
        teamARR.push(emplyeeInformation);
        employeeARR.push(newEngineer);
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
        <div class="col-4">
            <div class="card">
                <div class="card-body">
                  <h5 class="card-title">INTERN</h5>
                  <p class="card-text">Name: ${internName}</p>
                  <p class="card-text">Id: ${internID}</p>
                  <p class="card-text">Email: ${internEmail}</p>
                  <p class="card-text">Phone: ${internSchool}</p>
                </div>
            </div>
        </div>
        `;
        teamARR.push(emplyeeInformation);
        employeeARR.push(newIntern);
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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>
    <header>
    <h1 style="text-align: center;">${teamName}</h1>
    </header>
    <div class="container">
        <div class="row">
        ${teamARR}
        </div>
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


    





