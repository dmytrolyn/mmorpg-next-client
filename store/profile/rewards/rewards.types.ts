import { RankRewardSchema } from 'utils/contentTypes'

export interface RewardsData {
    data: Array<RankRewardSchema>
    received: Array<{ Rank: number }>
    titles: Array<string>
    current: number
}

export interface RewardsReducerType {
    data: RewardsData | null
    loading: Array<number>
    errors: Array<{ rank: number, error: string | null }>
}

enum RankRewardsActionTypes {
    SET_REWARDS = "SET_REWARDS",
    GET_RANK_REWARD = "GET_RANK_REWARD",
    GET_REWARD_REQUEST = "GET_REWARD_REQUEST",
    RANK_REWARD_LOADING = "RANK_REWARD_LOADING",
    RANK_REWARD_ERROR = "RANK_REWARD_ERROR"
}

export default RankRewardsActionTypes