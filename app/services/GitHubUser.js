import axios from 'axios';

const url = 'https://api.github.com/users/';
const GitHubUser = {
    getByUsername: function(username) {
        return axios.get(url + username);
    },
    getReposByUsername: function(username) {
        return axios.get(url + username + '/repos');
    }
};

export default GitHubUser;
