const Intern = require('../lib/Intern')

test('Test School', () => {
    const school = 'WWU'
    const intern = new Intern('Jared', 151, 'a@l.com', school)
    expect(intern.school).toBe(school)
})

test('Test getRole(), expect Intern', () => {
    const value = 'Intern'
    const intern = new Intern('Jared', 151, 'a@l.com', 'WWU')
    expect(intern.getRole()).toBe(value)
})

test('test getSchool()', () => {
    const school = 'WWU'
    const intern = new Intern('Jared', 151, 'a@l.com', school)
    expect(intern.getSchool()).toBe(school)
})