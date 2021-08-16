import Types, { AuthActionType, AuthReducerType } from './auth.types';

const initialState: AuthReducerType = {
    hasAuth: false,
    user: null
}

const authReducer = (state: typeof initialState = initialState, action: AuthActionType): AuthReducerType => {
    switch(action.type) {
        case Types.LOGIN: return { hasAuth: true, user: action.user };
        case Types.LOGOUT: return { hasAuth: false, user: null };
        default: return state;
    }
}

export default authReducer;