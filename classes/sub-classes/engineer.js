const axios = require('axios');
const Employee = require('../employee');
require('dotenv').config();

console.log(JSON.stringify(Employee));

class Engineer extends Employee {
    constructor(gitHubUsername = '', name, email, id) {
        super(name, id, email);
        this.gitHubUsername = gitHubUsername;
    }

    getGithub() {
        console.log(process.env.ACCESS_TOKEN);
        axios.get(`https://api.github.com/users/${this.gitHubUsername}?access_token=${process.env.ACCESS_TOKEN}`)
        .then(resp => {
            console.log(this);
            console.log(resp.data);
        });
    }
}

let eng = new Engineer('thomasjasonm1', 'jason', 'thomas@gmail.com', 2);

eng.getGithub();