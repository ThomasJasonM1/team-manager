//const axios = require('axios');
const Employee = require('../employee');

module.exports = class Engineer extends Employee {
    constructor(gitHubUsername = '', name, email, id) {
        super(name, id, email);
        this.gitHubUsername = gitHubUsername;
    }

    getGithub() {
        return this.gitHubUsername;
        // axios.get(`https://api.github.com/users/${this.gitHubUsername}?access_token=e8199b4a74074eb2c412315a36a60e1ae14f1d48`)
        // .then(resp => {
        //     console.log(resp.data);
        // });
    }

    getRole() {
        return 'Engineer';
    }
}
