import { MessageType } from 'utils/storeTypes'

type RouletteItem = {
    RowID: number
    Count: number
    Icon: string
    ItemName: string
}

type RouletteRewardLog = {
    ItemName: string
    Count: number
    Date: string
}

export interface RouletteData {
    items: Array<RouletteItem>
    rewards: Array<RouletteRewardLog>
    titles: Array<string>
    price: number
}

export interface RouletteReducerType {
    data: RouletteData | null,
    delay: number,
    status: { index: number, dir: boolean }
    loading: boolean
    messages: Array<MessageType>
    error: string | null
}

enum RouletteActionTypes {
    GET_ROULETTE_REWARD = "GET_ROULETTE_REWARD",
    SET_ROULETTE = "SET_ROULETTE",
    SET_ROULETTE_STATUS = "SET_ROULETTE_STATUS",
    SET_ROULETTE_LOADING = "SET_ROULETTE_LOADING",
    SET_ROULETTE_ERROR = "SET_ROULETTE_ERROR",
    SET_ROULETTE_MESSAGE = "SET_ROULETTE_MESSAGE",
    ADD_ROULETTE_REWARD = "ADD_ROULETTE_REWARD"
}

export default RouletteActionTypes