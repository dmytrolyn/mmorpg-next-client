import { UserSchema } from 'utils/contentTypes'

export interface AuthorizedUser {
    resultCode: number
    data: UserSchema
}