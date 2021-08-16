import Types, { RewardsData } from './rewards.types'

interface SetRankRewardsAction {
    type: Types.SET_REWARDS
    data: RewardsData
}

export const setRankRewards = (data: RewardsData): SetRankRewardsAction => ({
    type: Types.SET_REWARDS,
    data
})

interface GetRankRewardAction {
    type: Types.GET_RANK_REWARD
    rank: number
}

export const getRankReward = (rank: number): GetRankRewardAction => ({
    type: Types.GET_RANK_REWARD,
    rank
})

interface RankRewardLoadingAction {
    type: Types.RANK_REWARD_LOADING
    rank: number
    status: boolean
}

export const rankRewardLoading = (rank: number, status: boolean): RankRewardLoadingAction => ({
    type: Types.RANK_REWARD_LOADING,
    rank,
    status
})

interface RankRewardErrorAction {
    type: Types.RANK_REWARD_ERROR
    rank: number
    error: string
}

export const rankRewardError = (rank: number, error: string): RankRewardErrorAction => ({
    type: Types.RANK_REWARD_ERROR,
    rank,
    error
})

interface GetRankRewardRequestAction {
    type: Types.GET_REWARD_REQUEST
    rank: number
}

export const getRewardRequest = (rank: number): GetRankRewardRequestAction => ({
    type: Types.GET_REWARD_REQUEST,
    rank
})

type RankRewardActionType = GetRankRewardAction | RankRewardLoadingAction | RankRewardErrorAction | SetRankRewardsAction

export default RankRewardActionType