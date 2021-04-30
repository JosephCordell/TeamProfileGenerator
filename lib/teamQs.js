

const managerQs = [
    {
        type:'input',
        name: 'managerName',
        message: 'What is the managers name?',
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
    },
    {
        type: 'input',
        name: 'managerId',
        message: `What is the manager's id number?`,
        validate: answer => {
            const a = answer.match(/^[1-9]\d*$/);
              if (a) {
                return true;
              }
              return 'Please enter a number greater than zero.';
            }
    },
    {
        type: 'input', 
        name: 'managerEmail',
        message: `what is the manager's email address?`,
        validate: answer => {
            const a = answer.match(/\S+@\S+\.\S+/);
            if (a) {
              return true;
            }
            return "Please make sure it's a valid address.";
          }
    },
    {
        type: 'input', 
        name: 'managerOfficeNumber',
        message: 'What is the managers office number?',
        validate: answer => {
            const a = answer.match(/^[1-9]\d*$/);
              if (a) {
                return true;
              }
              return 'Please enter a number greater than zero.';
            }
    }
]

const teamQs = [
    {
        type: 'list',
        name: 'teamRole',
        message: 'What role does this team member have?',
        choices: [
            'Engineer', 
            'Intern', 
            'No more members to add'
        ]
    }
]

const EngineerQs = [
    {
        type: 'input',
        name: 'engineerName',
        message: `What is the engineer's name?`,
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Name can not be blank.";
          }
    },
    {
        type: 'input',
        name: 'engineerId',
        message: `What is the engineers id number?`,
        validate: answer => {
            const a = answer.match(/^[1-9]\d*$/);
              if (a) {
                return true;
              }
              return 'Please enter a number greater than zero.';
            }
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: `What is the engineer's email?`,
        validate: answer => {
            const a = answer.match(/\S+@\S+\.\S+/);
            if (a) {
              return true;
            }
            return "Please make sure it's a valid address.";
          }
    },
    {
        type: 'input', 
        name: 'engineerGitHub',
        message: `What is the engineer's GitHub username?`,
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
    }
]

const internQs = [
    {
        type: 'input',
        name: 'internName',
        message: 'What is the interns name?',
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
    },
    {
        type: 'input',
        name: 'internId',
        message: `What is the intern's ID number?`,
        validate: answer => {
            const a = answer.match(/^[1-9]\d*$/);
              if (a) {
                return true;
              }
              return 'Please enter a number greater than zero.';
            }
    },
    {
        type: 'input',
        name: 'internEmail',
        message: `what is the intern's email address?`,
        validate: answer => {
            const a = answer.match(/\S+@\S+\.\S+/);
            if (a) {
              return true;
            }
            return "Please make sure it's a valid address.";
          }
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'What school does your intern attend',
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
    }
]


module.exports = {
    managerQs,
    teamQs,
    EngineerQs,
    internQs
}