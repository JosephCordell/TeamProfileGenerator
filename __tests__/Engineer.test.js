const Engineer = require('../lib/Engineer')

test('Verify GitHub works', () => {
    const gitHub = "GitHub"
    const engineer = new Engineer("Jared", 151, 'a@l.com', gitHub)
    expect(engineer.github).toBe(gitHub)
})

test('test getRole(), expect "Engineer"', () => {
    const role = "Engineer"
    const engineer = new Engineer("Jared", 151, 'a@l.com', 'gitHub')
    expect(engineer.getRole()).toBe(gitHub)
})

test('Test getGitHub() to get username', () => {
    const gitHub = "GitHubName"
    const engineer = new Engineer("Jared", 151, 'a@l.com', gitHub)
    expect(engineer.getGithub()).toBe(gitHub)
})