import axios from "axios";
import {
	SHOW_LOADER,
	HIDE_LOADER,
  GET_TERMINAL,
  SEARCH_RESULTS,
  USER_LOGIN,
  GETCONTACTDATA,
} from "./action-types";

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
      const { data } = await axios.get("http://localhost:3001/auth/perfil");
      console.log("user", data.user);
      dispatch({
        type: USER_LOGIN,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const userRegister = (formData) => async () => {
  try {
    const response = await axios.post(
      "http://localhost:3001/usuarios",
      formData
    );
    console.log("Registro exitoso:", response.data);
  } catch (error) {
    console.error("Error en el registro:", error);
  }
};

export const createRoute = (formData) => async () => {
  console.log("REDUX", formData);
  try {
    const response = await axios.post("http://localhost:3001/rutas", formData);
    console.log("Registro exitoso:", response.data);
  } catch (error) {
    console.error("Error en el registro:", error);
  }
};

export const getCities = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/terminal/get");
      dispatch({
        type: GET_TERMINAL,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

// export const getProvince = () => {
//     return async (dispatch) => {
//         try {
//             const { data } = await axios.get('http://localhost:3001/provincias/get_province');
//             dispatch({
//                 type: GET_PROVINCE,
//                 payload: data,
//             })
//         } catch (error) {
//             console.error(error);
//         }
//     }
// }

export const searchResults = ({ origen, destino, fecha_salida }) => {
  return async (dispatch) => {
    console.log("Redux", origen, destino, fecha_salida);
    try {
      const { data } = await axios.get(
        `http://localhost:3001/rutas/filter?origen=${origen}&destino=${destino}&fecha_salida=${fecha_salida}`
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
        `http://localhost:3001/usuarios`
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
