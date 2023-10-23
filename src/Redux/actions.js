import axios from 'axios';
import { GET_CITIES, GET_PROVINCE, SEARCH_RESULTS, USER_LOGIN } from './action-types'

export const searchResults = (data) => {
    return {
        type: SEARCH_RESULTS,
        payload: data
    }
}

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

export const getCities = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/ciudades/get_cities');
            dispatch({
                type: GET_CITIES,
                payload: data,
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export const getProvince = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/provincias/get_province');
            dispatch({
                type: GET_PROVINCE,
                payload: data,
            })
        } catch (error) {
            console.error(error);
        }
    }
}