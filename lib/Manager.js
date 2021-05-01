const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getRole() {
        return 'Manager'
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    createCard() {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${this.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${this.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${this.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${this.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `
    }
}

module.exports = Manager