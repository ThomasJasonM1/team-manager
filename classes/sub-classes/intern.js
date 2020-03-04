const Employee = require('../employee');

class Intern extends Employee {
    constructor(school = '', name, email, id) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}
