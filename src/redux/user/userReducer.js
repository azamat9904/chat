import { actionTypes } from './actions';


const initialState = {
    user: null,
    isAuth: false,
    loginSuccess: false,
    loginFailed: false,
    registerSuccess: false,
    registerFailed: false,
    registerError: null,
    verifyUserSuccess: false,
    verifyUserFailed: false,
    verifyUserError: null,
    verifyUserClear: false,
    searchedUsers: [],
    searchedUsersError: null,
    selectedUser: null
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
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                registerSuccess: true
            };
        case actionTypes.REGISTER_FAILED:
            return {
                ...state,
                registerFailed: true,
                registerError: action.payload
            };
        case actionTypes.REGISTER_CLEAR:
            return {
                ...state,
                registerFailed: false,
                registerSuccess: false,
                registerError: null
            };
        case actionTypes.VERIFY_USER_SUCCESS:
            return {
                ...state,
                verifyUserSuccess: true
            };
        case actionTypes.VERIFY_USER_FAILED:
            return {
                ...state,
                verifyUserFailed: true,
                verifyUserError: action.payload
            };
        case actionTypes.VERIFY_USER_CLEAR:
            return {
                ...state,
                verifyUserSuccess: false,
                verifyUserFailed: false,
                verifyUserError: null
            };
        case actionTypes.SEARCH_USER_SUCCESS:
            return {
                ...state,
                searchedUsers: action.payload
            };
        case actionTypes.SEARCH_USER_FAILED:
            return {
                ...state,
                searchedUsersError: action.payload
            };
        case actionTypes.SEARCH_USER_CLEAR:
            return {
                ...state,
                searchedUsersError: null,
                searchedUsers: []
            };
        default:
            return state;
    }
};

export default userReducer;