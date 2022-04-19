const apiUrl = 'https://jsonplaceholder.typicode.com';

export const getUserData = () => {
    let randUser = Math.floor(Math.random() * 10) + 1;

    return fetch(`${apiUrl}/users/${randUser}`)
        .then((response) => response.json())
        .then(({ id, name, email }) => ({ id, name, email }))
};

export default {
    getUserData,
};
