import { UserSchema } from 'utils/contentTypes';

export interface AuthReducerType {
    hasAuth: boolean
    user: UserSchema | null
}

enum AuthActionTypes {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT"
}

export default AuthActionTypes;


export interface LoginType {
    type: AuthActionTypes.LOGIN
    user: UserSchema | null
}

export interface LogoutType {
    type: AuthActionTypes.LOGOUT
}

export type AuthActionType = LoginType | LogoutType