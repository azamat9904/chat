import { actionTypes } from './actions';


const initialState = {
    user: null,
    isAuth: false,
    loginSuccess: false,
    loginFailed: false
};

const userReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case actionTypes.SET_USER_DATA:
            return {
                ...state,
                user: action.payload,
                isAuth: true
            };
        case actionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                loginSuccess: true
            };
        case actionTypes.FETCH_USER_FAILED:
            return {
                ...state,
                loginFailed: true
            };
        case actionTypes.FETCH_USER_CLEAR:
            return {
                ...state,
                loginFailed: false,
                loginSuccess: false
            };
        default:
            return state;
    }
};

export default userReducer;