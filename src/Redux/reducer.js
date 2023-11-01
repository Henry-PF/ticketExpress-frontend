import { GET_TERMINAL, GET_ROUTES, SEARCH_RESULTS, USER_LOGIN, USER_REGISTER, DATA_USER } from './action-types'

const initialState = {
    rutas: [],
    results: [],
    cities: [],
    province: [],
    userGoogle: {},
    user: {},
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_RESULTS:
            return {
                ...state,
                results: action.payload,
            };
        case USER_LOGIN:
            return {
                ...state,
                userGoogle: action.payload,
            }
        case GET_TERMINAL:
            return {
                ...state,
                cities: action.payload,
            }
        case GET_ROUTES:
            return {
                ...state,
                rutas: action.payload,
            }
        case DATA_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
};

export default rootReducer;