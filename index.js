const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')
const teamQs = require('./lib/teamQs')

const output = path.resolve(__dirname, "output")
const outputPath = path.join(output, 'team.html')

const createPage = require('./lib/pageTemplate.js')
const { Console } = require('console')

const team = []
const idArray = []

 const makeManager = async () => {
    console.log('Time to create your team website')
    await inquirer.prompt(teamQs.managerQs)
        .then(response => {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber)
            team.push(manager)
            idArray.push(response.managerId)
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
        console.log(engineer)
        team.push(engineer)
        idArray.push(response.engineerId)
        teamMembers()
    })
}

const addIntern = async () => {
    await inquirer.prompt(teamQs.internQs)
    .then (response => {
        const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool)
        team.push(intern)
        idArray.push(response.internId)
        teamMembers()
    })
}

const createWebsite = () => {
    console.log(team)
    fs.writeFileSync(output, createPage(team), 'utf-8')
}
makeManager()
