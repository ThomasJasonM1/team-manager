const Employee = require('../employee');

module.exports = class Engineer extends Employee {
    constructor(github = '', name, email, id) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}
