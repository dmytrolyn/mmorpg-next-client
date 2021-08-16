import Types, { ManageAuthModalActionType } from './auth.types';

export const manageAuthModal = (status: boolean, state: boolean): ManageAuthModalActionType => ({
    type: Types.MANAGE_AUTH_MODAL,
    status,
    state
})