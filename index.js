const inquirer = require('inquirer'); 
const fs = require('fs');

const employeeQuestions = require('./lib/employeeQuestions');

const Manager = require("./lib/managerClass");
const managerQuestions = require("./lib/managerQuestions");

const Engineer = require("./lib/engineerClass");
const engineerQuestions = require("./lib/engineerQuestions");

const Intern = require("./lib/internClass");
const internQuestions = require("./lib/internQuestions");

const html = require("./lib/html");

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
        const managerRole = data.role;
        const managerName = data.managerName;
        const managerID = data.managerID;
        const managerEmail = data.managerEmail;
        const managerNumber = data.managerNumber;
        const emplyeeInformation = new Manager (managerRole, managerName, managerID, managerEmail, managerNumber);
        teamARR.push(emplyeeInformation);
        addMembers();
    });
};
function addEngineer() {
    inquirer.prompt(engineerQuestions)
    .then(function(data){
        const engineerRole = data.role
        const engineerName = data.engineerName;
        const engineerID = data.engineerID;
        const engineerEmail = data.engineerEmail;
        const engineerGithub = data.engineerGithub;
        const emplyeeInformation = new Engineer (engineerRole, engineerName, engineerID, engineerEmail, engineerGithub);
        teamARR.push(emplyeeInformation);
        addMembers();
    });
};
/*
function addIntern() {
    inquirer.prompt(internQuestions)
    .then(function(data){
        const internRole = data.role,
        const internName = data.internName;
        const internID = data.internID;
        const internEmail = data.internEmail;
        const internSchool = data.internSchool;
        const emplyeeInformation = new Intern (internRole, internName, internID, internEmail, internSchool);
        teamARR.push(emplyeeInformation);
        addMembers();
    });
};*/

function createHTML() {
    let htmlarr = ${htmlarr};

    fs.writeFile("${teamARR[0]}.html", htmlarr, (err) => {
        if(err){
            return console.log(err);}
    });
}