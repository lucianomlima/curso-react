import axios from 'axios';

const url = 'https://api.github.com/users';
const GitHubUser = {
    getByUsername(username) {
        return axios.get(`${url}/${username}`);
    },
    getReposByUsername(username) {
        return axios.get(`${url}/${username}/repos`);
    }
};

export default GitHubUser;
