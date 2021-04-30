const Manager = require('../lib/Manager')

test('Set office number', () => {
    const office = 151
    const manager = new Manager('Jared', 251, 'a@l.com', office)
    expect(manager.officeNumber).toBe(office)
})

test('Test getRole(), expect Manager', () => {
    const value = 'Manager'
    const manager = new Intern('Jared', 251, 'a@l.com', 151)
    expect(manager.getRole()).toBe(value)
})

test('test getOfficeNumber()', () => {
    const office = 151
    const manager = new Manager('Jared', 251, 'a@l.com', office)
    expect(manager.getOfficeNumber()).toBe(office)
})