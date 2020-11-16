import { actionTypes } from './actions';

export interface userState {
    user: any,
    isAuth: boolean
};

const initialState: userState = {
    user: null,
    isAuth: false
};

const userReducer = (state = initialState, action: { type: actionTypes, payload: any }) => {
    switch (action.type) {
        case actionTypes.SET_USER_DATA:
            return {
                ...state,
                user: action.payload,
                isAuth: true
            }
        default:
            return state;
    }
};

export default userReducer;