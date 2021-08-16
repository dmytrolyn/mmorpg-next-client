import Types, { RewardsReducerType } from './rewards.types'
import ActionType from './rewards.actions'

const initialState: RewardsReducerType = {
    data: null,
    loading: [],
    errors: []
}

const rewardsReducer = (state = initialState, action: ActionType): RewardsReducerType => {
    switch(action.type) {
        case Types.SET_REWARDS: return {...state, data: action.data }
        case Types.GET_RANK_REWARD: {
            if(state.data) {
                let { received } = state.data!;
                return {...state, data: {...state.data, received: [...received, { Rank: action.rank }] }};
            } else return state
        }
        case Types.RANK_REWARD_LOADING: {
            let { rank, status } = action;
            if(status) {
                return {...state, loading: [...state.loading, rank]};
            } else {
                return {...state, loading: state.loading.filter(r => r !== rank)};
            }
        }
        case Types.RANK_REWARD_ERROR: {
            let { rank, error } = action;
            if(error) {
                return {...state, errors: [...state.errors, { rank, error }]};
            } else {
                return {...state, errors: state.errors.filter(r => r.rank !== rank)};
            }
        }
        default: return state;
    }
}

export default rewardsReducer;