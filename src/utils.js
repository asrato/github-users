const axios = require('axios');

export const getNumberOfRepositories = async(username) => {
    let repositories = [];

    try {
        const userResponse = await axios.get(`https://api.github.com/users/${username}`);
        const numberOfPublicRepos = await userResponse.data.public_repos;

        for (let i = 0; i < numberOfPublicRepos; i += 100) {
            const repositoryResponse = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100&page=${i / 100 + 1}`);
            repositories.push(repositoryResponse.data);
        };

        return repositories[0].sort((a, b) => (a.stargazers_count > b.stargazers_count) ? -1 : (b.stargazers_count > a.stargazers_count) ? 1 : 0);
    } catch (error) {
        return repositories;
    }
};

export const getUserInfo = async(username) => {
    try {
        const userInfo = await axios.get(`https://api.github.com/users/${username}`);

        console.log(userInfo.data);

        return userInfo.data;
    } catch (error) {
        return null;
    }
}