import { SpenderSchema } from 'utils/contentTypes'

export type SpenderErrorType = {
    level: number
    message: string
}

export interface SpendersReducerType {
    data: Array<SpenderSchema> | null
    loading: Array<number>
    errors: Array<SpenderErrorType>
}

enum SpendersActionTypes {
    SET_SPENDERS = "SET_SPENDERS",
    GET_SPENDER_REWARD = "GET_SPENDER_REWARD",
    GET_SPENDER_REWARD_REQUEST = "GET_SPENDER_REWARD_REQUEST",
    SET_SPENDER_LOADING = "SET_SPENDER_LOADING",
    SET_SPENDER_ERROR = "SET_SPENDER_ERROR",
    INCREASE_SPENDERS_STATUS = "INCREASE_SPENDERS_STATUS"
}

export default SpendersActionTypes