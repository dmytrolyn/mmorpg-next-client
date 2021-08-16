import Types, { SpendersReducerType } from './spenders.types'
import ActionType from './spenders.actions'

const initialState: SpendersReducerType = {
    data: null,
    loading: [],
    errors: []
}

const manageSpenders = (state = initialState, action: ActionType): SpendersReducerType => {
    switch(action.type) {
        case Types.SET_SPENDERS: return {...state, data: action.data }
        case Types.GET_SPENDER_REWARD: {
            if(state.data) {
                let spender = state.data!.find(s => s.RowID === action.id)
                if(spender) {
                    let receivedRewards = spender.received
                    return {...state, data: [...state.data.filter(item => item.RowID !== action.id), 
                        {...spender, received: [...receivedRewards, action.level ]}]}
                }
            }
            return state
        }
        case Types.SET_SPENDER_LOADING: {
            let { level, status } = action
            if(status) {
                return {...state, loading: [...state.loading, action.level ] }
            } else {
                return {...state, loading: state.loading.filter(l => l !== level) }
            }
        }
        case Types.SET_SPENDER_ERROR: {
            let { level, message } = action.error
            if(message) {
                return {...state, errors: [...state.errors, action.error] };
            } else {
                return {...state, errors: state.errors.filter(e => e.level !== level) }
            }
        }
        case Types.INCREASE_SPENDERS_STATUS: return {...state, data: state.data!.map(spender => ({ ...spender, status: spender.status + action.value }))};
        default: return state
    }
}

export default manageSpenders;