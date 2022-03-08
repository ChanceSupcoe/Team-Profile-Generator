const inquirer = require('inquirer'); 
const fs = require('fs');

const employeeQuestions = require('./lib/employeeQuestions');

const Manager = require("./lib/managerClass");
const managerQuestions = require("./lib/managerQuestions");

const Engineer = require("./lib/engineerClass");
const engineerQuestions = require("./lib/engineerQuestions");

const Intern = require("./lib/internClass");
const internQuestions = require("./lib/internQuestions");

const HTMLpage = require("./src/html")

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
        teamARR.push(profileName);
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
        const managerRole = data.role;
        const emplyeeInformation = new Manager (managerName, managerID, managerEmail, managerNumber, managerRole);
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
        const engineerRole = data.role
        const emplyeeInformation = new Engineer (engineerName, engineerID, engineerEmail, engineerGithub, engineerRole);
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
        const internRole = data.role
        const emplyeeInformation = new Intern (internName, internID, internEmail, internSchool, internRole);
        teamARR.push(emplyeeInformation);
        addMembers();
    });
};

function createHTML() {
    console.log(teamARR);
    module.exports = teamARR;
    //fs.writeFile("./dist/index.html", HTMLpage, function(err) {
        //if (err) {console.log(err);}
    //});
};




