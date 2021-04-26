//insert class in here

employee {
    name, 
    id, 
    email,
    getName(),
    getId(),
    getEmail(),
    getRole() //returns 'Employee'
}

//Manager class includes employee elements plus office Number
Manager {
    employee info,
    getRole() //returns 'Manager'
}

//Engineer class includes Employee elements plus Github username

Engineer {
    github, //username
    getGithub(),
    getRole() //Returns 'Engineer'
}

//Intern class includes Employee elements plus school

Engineer {
    school,
    getSchool(),
    getRole() //Returns 'Intern'
}