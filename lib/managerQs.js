

const managerQ = [
        {
            type:'input',
            name: 'managerName',
            message: 'What is the managers name?',
            validate: answer => {    
                if (answer !== "") {
                return true;
              }
              return "Please enter at least one character.";}
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
        message: `what is the manager's email address?`
    },
    {
        type: 'input', 
        name: 'managerOfficeNumber',
        message: 'What is the managers office number?',
        validate: answer => {
            if (typeof(answer) !== number || answer <= 0) {
                return "Please enter a number greater than 0."
            }
    }
}]

module.exports = managerQ