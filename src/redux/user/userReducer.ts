import { actionTypes } from './actions';

export interface userState {
    user: any,
    isAuth: boolean,
    loginSuccess: boolean,
    loginFailed: boolean
};

const initialState: userState = {
    user: null,
    isAuth: false,
    loginSuccess: false,
    loginFailed: false
};

const userReducer = (state = initialState, action: { type: actionTypes, payload: any }) => {
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
            }
        default:
            return state;
    }
};

export default userReducer;