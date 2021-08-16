import { UserSchema } from 'utils/contentTypes'
import Types, { LoginType, LogoutType } from './auth.types'

export const login = (user: UserSchema): LoginType => ({
    type: Types.LOGIN,
    user
})

export const logout = (): LogoutType => ({
    type: Types.LOGOUT
})