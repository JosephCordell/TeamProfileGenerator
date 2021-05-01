const Employee = require("../lib/Employee")

test(`Create Employee Object`, () => {
    const employee = new Employee()
    expect(typeof(employee)).toBe(`object`)
});

test('Set name is employee name', () => {
    const name = 'Jared'
    const employee = new Employee(name)
    expect(employee.name).toBe(name)
})

test('Set ID number', () => {
    const id = 151
    const employee = new Employee('Jared', id)
    expect(employee.id).toBe(id)
})

test('Set email', () => {
    const email = 'a@l.com'
    const employee = new Employee('Jared', 151, email)
    expect(employee.email).toBe(email)
})

test('Test getName()', () => {
    const name = 'Jared'
    const employee = new Employee(name)
    expect(employee.getName()).toBe(name)
})

test('Test getId()', () => {
    const id = 151
    const employee = new Employee('Jared', id)
    expect(employee.getId()).toBe(id)
})

test('Test getEmail', () => {
    const email = 'a@l.com'
    const employee = new Employee('Jared', 151, email)
    expect(employee.getEmail()).toBe(email)
})

test('Test getRole(), expect Employee', () => {
    const value = 'Employee'
    const employee = new Employee('Jared', 151, "a@l.com")
    expect(employee.getRole()).toBe(value)
})