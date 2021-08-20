const inquirer = require('inquirer');
const fs = require('fs');
const employees = [];
const Manager = require("./lib/manager")
const Intern = require("./lib/intern")
const Engineer = require("./lib/engineer");


function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What is employee\'s role?',
                choices: ['Manager', 'Engineer', 'Intern', 'None'],
                name: 'employeeType',
            },
        ]).then((answers) => {
            if (answers.employeeType === 'None') {
                generateHTML(employees)
            } else if (answers.employeeType === 'Manager') {
                managerQuestions()
            } else if (answers.employeeType === 'Engineer') {
                engineerQuestions()
            } else if (answers.employeeType === 'Intern') {
                internQuestions()
            }

        })
}
addEmployee()

function managerQuestions() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the Manager\'s name?',
                name: 'managerName',
            },
            {
                type: 'input',
                message: 'What is the Manager\'s ID Number?',
                name: 'managerID',
            },
            {
                type: 'input',
                message: 'What is the Manager\'s email?',
                name: 'managerEmail',
            },
            {
                type: 'input',
                message: 'What is the Manager\'s Office Number?',
                name: 'managerOffice',
            }]).then((response) => {
                const manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOffice)
                employees.push(manager)
                console.log(manager)
                addEmployee()
                
            })
}
function engineerQuestions() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the Engineer\'s name?',
                name: 'engineerName',
            },
            {
                type: 'input',
                message: 'What is the Engineer\'s ID Number?',
                name: 'engineerID',
            },
            {
                type: 'input',
                message: 'What is the Engineer\'s email?',
                name: 'engineerEmail',
            },
            {
                type: 'input',
                message: 'What is the Engineer\'s Github username?',
                name: 'engineerUser',
            }]).then((response) => {
                const engineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.engineerUser)
                employees.push(engineer)
                console.log(engineer)
                addEmployee()
                
            })
}
function internQuestions() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the Intern\'s name?',
                name: 'internName',
            },
            {
                type: 'input',
                message: 'What is the Intern\'s ID Number?',
                name: 'internID',
            },
            {
                type: 'input',
                message: 'What is the Intern\'s email?',
                name: 'internEmail',
            },
            {
                type: 'input',
                message: 'What school did the Intern attend?',
                name: 'internSchool',
            }]).then((response) => {
                const intern = new Intern(response.internName, response.internID, response.internEmail, response.internSchool)
                employees.push(intern)
                console.log(intern)
                addEmployee()
            })
}

const generateHTML = (allEmployees) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
</head>
<body>
    <div class="jumbotron jumbotron-fluid bg-danger">
        <div class="container">
          <h1 class="display-4 text-center text-white">My Team</h1>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2">
        ${generateCards(allEmployees)}
      </div>
    
</body>
</html>`
fs.writeFile("index.html", html, function(err){
    if(err) throw err
    console.log("File Created");
});
}
const generateCards = (employeeItems) =>{
    return employeeItems.map((employee) => {
        switch(employee.getRole()) {
            case 'Manager': 
                return `<div class="card">
                <div class="card-header border-success text-white bg-primary mb-3">Manager</div>
                <div class="card-body">
                    <h4 class="card-title">${employee.name}</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: ${employee.email}</li>
                        <li class="list-group-item">Office #: ${employee.officeNumber}</li>
                      </ul>
                </div>
            </div>`
            case 'Engineer':
                return `        <div class="card">
                <div class="card-header border-success text-white bg-warning mb-3">Engineer</div>
                <div class="card-body">
                    <h4 class="card-title">${employee.name}</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: ${employee.email}</li>
                        <li class="list-group-item">Github Username: ${employee.github}</li>
                      </ul>
                </div>
            </div>`
            case 'Intern':
                return `<div class="card">
                <div class="card-header border-success text-white bg-dark mb-3">Intern</div>
                <div class="card-body">
                    <h4 class="card-title">${employee.name}</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: ${employee.email}</li>
                        <li class="list-group-item">School: ${employee.school}</li>
                      </ul>
                </div>
            </div>`
        }
    }) .join("")
}

// employee.push({type: 'Engineer', ...response});

// const managerCards = generateCards(answers.filter(item) => (item.type == 'Manager'), "Manager");