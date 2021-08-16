export interface AuthModalReducerType {
    isOpened: boolean
    state: boolean
}

enum AuthModalActionTypes {
    MANAGE_AUTH_MODAL = "MANAGE_AUTH_MODAL"
}

export default AuthModalActionTypes

export interface ManageAuthModalActionType {
    type: AuthModalActionTypes.MANAGE_AUTH_MODAL
    status: boolean
    state: boolean
}

export type AuthModalActionType = ManageAuthModalActionType