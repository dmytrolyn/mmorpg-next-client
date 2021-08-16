import { SpenderSchema } from 'utils/contentTypes'
import Types, { SpenderErrorType } from './spenders.types'

interface SetSpendersAction {
    type: Types.SET_SPENDERS
    data: Array<SpenderSchema>
}

export const setSpendersData = (data: Array<SpenderSchema>): SetSpendersAction => ({
    type: Types.SET_SPENDERS,
    data
})

interface GetSpenderRewardAction {
    readonly type: Types.GET_SPENDER_REWARD
    id: number
    level: number
}

export const getSpenderReward = (id: number, level: number): GetSpenderRewardAction => ({
    type: Types.GET_SPENDER_REWARD,
    id,
    level
})

interface IncreaseSpenderStatusAction {
    readonly type: Types.INCREASE_SPENDERS_STATUS
    value: number
}

export const increaseSpendersStatus = (value: number): IncreaseSpenderStatusAction => ({
    type: Types.INCREASE_SPENDERS_STATUS,
    value
})

interface SpenderLoadingAction {
    readonly type: Types.SET_SPENDER_LOADING
    SpenderID: number
    level: number
    status: boolean
}

export const spenderRewardLoading = (SpenderID: number, level: number, status: boolean): SpenderLoadingAction => ({
    type: Types.SET_SPENDER_LOADING,
    SpenderID,
    level,
    status
})

interface SpenderErrorAction {
    readonly type: Types.SET_SPENDER_ERROR
    error: SpenderErrorType
}

export const spenderRewardError = (error: SpenderErrorType): SpenderErrorAction => ({
    type: Types.SET_SPENDER_ERROR,
    error
})

interface GetSpenderRewardRequestAction {
    type: Types.GET_SPENDER_REWARD_REQUEST
    SpenderID: number,
    Level: number
    RowID: number
}

export const getSpenderRewardRequest = (SpenderID: number, Level: number, RowID: number): GetSpenderRewardRequestAction => ({
    type: Types.GET_SPENDER_REWARD_REQUEST,
    SpenderID,
    Level,
    RowID
})

type SpenderActionType = GetSpenderRewardAction | IncreaseSpenderStatusAction | SpenderLoadingAction | SpenderErrorAction | SetSpendersAction

export default SpenderActionType