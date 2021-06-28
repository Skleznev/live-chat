export const setUserSession = (user) => {
    localStorage.setItem('user', user);
}

export const removeUserSession = () => {
    localStorage.removeItem('user');
}

export const getUser = () => {
    return localStorage.getItem('user') || null;
}