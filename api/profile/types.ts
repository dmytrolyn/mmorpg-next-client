import { UserSchema, CharItemSchema, RankRewardSchema, SpenderSchema } from 'utils/contentTypes'
import { BasicResponse } from 'api/types'

export type GetUser = UserSchema

export interface ManageChar extends BasicResponse {
    CharName?: string
}

export interface GetAllChars {
    active: { data: Array<CharItemSchema>, titles: Array<string> }
    deleted: { data: Array<CharItemSchema>, titles: Array<string> }
    price: number
}

export interface GetRankRewards {
    data: Array<RankRewardSchema>
    received: Array<number>
    titles: Array<string>
    current: number
}

export type GetSpenders = Array<SpenderSchema>

type RouletteItem = {
    RowID: number
    ItemID: number
    Count: number
    Rate: number
    Icon: string
    ItemName: string
}

type RouletteReward = {
    ItemName: string
    Count: number
    Date: string
}

export interface GetRoulette {
    items: Array<RouletteItem>
    rewards: Array<RouletteReward>
    titles: Array<string>
    price: number
}

export interface GetRouletteReward extends BasicResponse {
    reward: number
}