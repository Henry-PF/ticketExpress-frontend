import axios from 'axios';
import { GET_TERMINAL, GET_ROUTES, SEARCH_RESULTS, USER_LOGIN } from './action-types'

export const userLogin = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/auth/perfil')
            console.log('user', data.user);
            dispatch({
                type: USER_LOGIN,
                payload: data
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export const userRegister = (formData) => async () => {
    try {
        const response = await axios.post('http://localhost:3001/usuarios', formData);
        console.log('Registro exitoso:', response.data);
    } catch (error) {
        console.error('Error en el registro:', error);
    }
};

export const createRoute = (formData) => async () => {
    console.log('REDUX', formData);
    try {
        const response = await axios.post('http://localhost:3001/rutas', formData);
        console.log('Registro exitoso:', response.data);
    } catch (error) {
        console.error('Error en el registro:', error);
    }
};

export const getCities = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/terminal/get');
            dispatch({
                type: GET_TERMINAL,
                payload: data,
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export const getRoutes = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/rutas/getAll');
            dispatch({
                type: GET_ROUTES,
                payload: data,
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export const searchResults = ({ origen, destino, fecha_salida }) => {
    return async (dispatch) => {
        console.log('Redux', origen, destino, fecha_salida);
        try {
            const { data } = await axios.get(`http://localhost:3001/rutas/filter?origen=${origen}&destino=${destino}&fecha_salida=${fecha_salida}`);
            dispatch({
                type: SEARCH_RESULTS,
                payload: data,
            })
        } catch (error) {
            console.error(error);
        }
    }
}