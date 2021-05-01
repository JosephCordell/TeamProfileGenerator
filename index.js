const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')
const teamQs = require('./lib/teamQs')

const output = path.resolve(__dirname, "teamHTML")
const outputPath = path.join(output, 'team.html')

const createPage = require('./lib/webpage.js')
const { Console } = require('console')

const cards = []

 const makeManager = async () => {
    console.log('Time to create your team website')
    await inquirer.prompt(teamQs.managerQs)
        .then(response => {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber)
            cards.push(manager.createCard())
            // makeTeam()
            console.log(manager)
        })
        teamMembers()
}

const teamMembers = async() => {
    await inquirer.prompt(teamQs.teamQs)
    .then(response => {
        switch (response.teamRole) {
            case "Engineer":
                addEngineer()
                break;
            case "Intern":
                addIntern()
                break;
            default:
                createWebsite() 
        }
    })
}

const addEngineer = async() => {
    await inquirer.prompt(teamQs.EngineerQs)
    .then(response => {
        const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGitHub)
        cards.push(engineer.createCard())
        teamMembers()
    })
}

const addIntern = async () => {
    await inquirer.prompt(teamQs.internQs)
    .then (response => {
        const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool)
        cards.push(intern.createCard())
        teamMembers()
    })
}

const createWebsite = () => {


    fs.writeFileSync(outputPath, createPage(cards.join('')), 'utf-8')
}
makeManager()
