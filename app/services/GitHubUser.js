var axios = require('axios');
var url = 'https://api.github.com/users/';

var GitHubUser = {
    getByUsername: function(username) {
        return axios.get(url + username);
    },
    getReposByUsername: function(username) {
        return axios.get(url + username + '/repos');
    }
};

module.exports = GitHubUser;
