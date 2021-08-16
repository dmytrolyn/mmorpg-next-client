import { UserSchema } from 'utils/contentTypes'
import { ResurrectionReducerType } from './resurrection/resurrection.types'
import { RewardsReducerType } from './rewards/rewards.types'
import { RouletteReducerType } from './roulette/roulette.types'
import { SpendersReducerType } from './spenders/spenders.types'

export interface ProfileReducerType {
    info: UserSchema | null
    resurrection?: ResurrectionReducerType
    rewards?: RewardsReducerType
    spenders?: SpendersReducerType
    roulette?: RouletteReducerType
}

enum ProfileActionTypes {
    SET_USER_INFO = "SET_USER_INFO",
    CLEAR_PROFILE_DATA = "CLEAR_PROFILE_DATA",
    CHANGE_USER_BALANCE = "CHANGE_USER_BALANCE"
}

export default ProfileActionTypes