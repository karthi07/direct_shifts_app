import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('userToken');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem('userToken', JSON.stringify({ token: userToken }));
        setToken(userToken.token);
    };
    return {
        setToken: saveToken,
        token
    }
}