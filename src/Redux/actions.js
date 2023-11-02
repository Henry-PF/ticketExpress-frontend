import axios from "axios";

import { SHOW_LOADER, HIDE_LOADER, GET_TERMINAL, GET_ROUTES, SEARCH_RESULTS, USER_LOGIN, DATA_USER, GETCONTACTDATA, } from './action-types'


export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  };
};


export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  };
};

export const userLogin = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("https://api-54nh.onrender.com/auth/perfil");
      console.log("user", data.user);
      dispatch({
        type: USER_LOGIN,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export const userRegister = (formData) => async () => {
  console.log(formData);
  try {
    const response = await axios.post('https://api-54nh.onrender.com/usuarios', formData);
    console.log(response.data);

  } catch (error) {
    console.error(error);
  }
};


export const createRoute = (formData) => async () => {
  try {
    const response = await axios.post("https://api-54nh.onrender.com/rutas", formData);
    console.log("Registro exitoso:", response.data);
  } catch (error) {
    console.error("Error en el registro:", error);
  }
};

export const getCities = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("https://api-54nh.onrender.com/terminal/get");
      dispatch({
        type: GET_TERMINAL,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getRoutes = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('https://api-54nh.onrender.com/rutas/getAll');
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
    try {
      const { data } = await axios.get(
        `https://api-54nh.onrender.com/rutas/filter?origen=${origen}&destino=${destino}&fecha_salida=${fecha_salida}`
      );
      dispatch({
        type: SEARCH_RESULTS,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getContactData = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://api-54nh.onrender.com/usuarios`
      );
      dispatch({
        type: GETCONTACTDATA,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserByEmail = (email) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('https://api-54nh.onrender.com/usuarios/getUserCorreo', email);
      dispatch({
        type: DATA_USER,
        payload: data
      })
    } catch (error) {
      console.error(error);
    }
  }
};