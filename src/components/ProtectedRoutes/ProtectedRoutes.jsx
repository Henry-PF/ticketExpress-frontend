import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoutes = () => {
    const [userGoogle, setUserGoogle] = useState(null);

    useEffect(() => {
        const userData = Cookies.get("userData");

        if (userData) {
            const parsedUser = JSON.parse(userData);
            console.log("parsedUser:", parsedUser);
            setUserGoogle(parsedUser);
        }
    }, []);

    // Utiliza un useEffect separado para manejar lógica posterior a la actualización del estado
    useEffect(() => {
        if (!localStorage.getItem('token') || !userGoogle) {
            // Realiza una redirección u ejecuta la lógica que necesites aquí
            // Puedes confiar en que userGoogle se ha actualizado en este punto
        }
    }, [userGoogle]);

    return <div><Outlet /></div>;
};

export default ProtectedRoutes;

