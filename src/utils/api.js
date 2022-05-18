import axios from "axios";

const id = "YOUR_CLIENT_ID";
const sec = "YOUR_SECRET_ID";
const params = `?client=${id}?client_secret=${sec}`;
const API = `https://api.github.com/`;

// get user
const getProfile = (username) => {
    return axios
        .get(`${API}users/${username}${params}`)
        .then((user) => user.data)
        .catch(handleErrors);
};

// get all repos of user
const getRepos = (username) => {
    return axios.get(`${API}users/${username}/repos${params}&per_page=100`);
};

//finding sum of all repos
const getStarsCount = (repos) => {
    return repos.data.reduce((acc, repo) => (acc += repo.stargazers_count), 0);
};

// defining who is a winner
const calculateScore = (profile, repos) => {
    const followers = profile.followers;
    const totalStars = getStarsCount(repos);
    return followers * 3 + totalStars;
};

const handleErrors = (error) => {
    console.warn(error);
    return null;
};

const sortPlayers = (players) => {
    return players.sort((a, b) => {
        return b.score - a.score;
    });
};
//шаблон проектирования Фасад
// выполняем пакет запросов
const getUserData = (player) => {
    return axios
        .all([getProfile(player), getRepos(player)])
        .then(([profile, repos]) => ({
            profile,
            score: calculateScore(profile, repos),
        }))
        .catch(handleErrors);
};

export const battle = (players) => {
    return axios
        .all(players.map(getUserData))
        .then(sortPlayers)
        .catch(handleErrors);
};

export const FetchPopularRepos = (language) => {
    const encodeURI = window.encodeURI(
        `${API}search/repositories?q=stars:>1+language:"${language}&sort=stars&order=desc&type=Repositories`
    );
    return axios.get(encodeURI).then((response) => response.data.items);
    // .catch((error) => console.error(error));
};
