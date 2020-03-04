const Employee = require('../employee');

module.exports = class Manager extends Employee {
    constructor(officeNumber = 0, name, email, id) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}
