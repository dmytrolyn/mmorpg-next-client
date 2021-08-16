import Types from './profile.types'
import { UserSchema } from 'utils/contentTypes'

interface SetUserDataAction {
    type: Types.SET_USER_INFO
    user: UserSchema
}

export const setUserData = (user: UserSchema): SetUserDataAction => ({
    type: Types.SET_USER_INFO,
    user
})

interface ChangeUserBalanceAction {
    type: Types.CHANGE_USER_BALANCE
    diff: number
}

export const changeUserBalance = (diff: number): ChangeUserBalanceAction => ({
    type: Types.CHANGE_USER_BALANCE,
    diff
})

interface ClearProfileDataAction {
    type: Types.CLEAR_PROFILE_DATA
}

export const clearProfileData = (): ClearProfileDataAction => ({
    type: Types.CLEAR_PROFILE_DATA
})

type ProfileActionType = ChangeUserBalanceAction | ClearProfileDataAction | SetUserDataAction

export default ProfileActionType