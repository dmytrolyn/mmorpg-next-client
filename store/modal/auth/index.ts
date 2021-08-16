import Types, { AuthModalActionType, AuthModalReducerType } from './auth.types';

const initialState: AuthModalReducerType = {
    isOpened: false,
    state: true
}

const authModalReducer = (state = initialState, action: AuthModalActionType): AuthModalReducerType => {
    switch(action.type) {
        case Types.MANAGE_AUTH_MODAL: return {...state, isOpened: action.status, state: action.state };
        default: return state;
    }
}

export default authModalReducer;