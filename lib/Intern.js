const Employee = require('./Employee')

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }

    getRole() {
        return 'Intern'
    }

    getSchool() {
        return this.school
    }

    createCard() {
        return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${this.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${this.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${this.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
            <li class="list-group-item">School: ${this.getSchool()}</li>
        </ul>
    </div>
</div>
        `
    }
}

module.exports = Intern 