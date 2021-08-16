import Types, { RouletteData } from './roulette.types'
import { MessageType } from 'utils/storeTypes'

interface SetRouletteAction {
    type: Types.SET_ROULETTE
    data: RouletteData
}

export const setRouletteData = (data: RouletteData): SetRouletteAction => ({
    type: Types.SET_ROULETTE,
    data
})

interface AddRewardAction {
    type: Types.ADD_ROULETTE_REWARD
    id: number
}

export const addRouletteReward = (id: number): AddRewardAction => ({
    type: Types.ADD_ROULETTE_REWARD,
    id,
})

interface SetRouletteMessageAction {
    type: Types.SET_ROULETTE_MESSAGE
    message: MessageType
}

export const setRouletteResultMessage = (message : MessageType): SetRouletteMessageAction => ({
    type: Types.SET_ROULETTE_MESSAGE,
    message
})

interface SetRouletteLoadingAction {
    type: Types.SET_ROULETTE_LOADING
    loading: boolean
}

export const setRouletteLoading = (loading: boolean): SetRouletteLoadingAction => ({
    type: Types.SET_ROULETTE_LOADING,
    loading
})

interface SetRouletteStatusAction {
    type: Types.SET_ROULETTE_STATUS
    index: number
}

export const setRouletteStatus = (index: number): SetRouletteStatusAction => ({
    type: Types.SET_ROULETTE_STATUS,
    index
})

interface SetRouletteErrorAction {
    type: Types.SET_ROULETTE_ERROR
    error: string
}

export const rouletteError = (error: string): SetRouletteErrorAction => ({
    type: Types.SET_ROULETTE_ERROR,
    error
})

interface GetRouletteReward {
    type: Types.GET_ROULETTE_REWARD
}

export const getRouletteReward = (): GetRouletteReward => ({
    type: Types.GET_ROULETTE_REWARD
})

type RouletteActionType = AddRewardAction | SetRouletteMessageAction | SetRouletteLoadingAction | SetRouletteStatusAction | SetRouletteErrorAction | SetRouletteAction

export default RouletteActionType
