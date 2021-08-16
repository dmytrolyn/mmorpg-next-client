import Types, { RouletteReducerType } from './roulette.types'
import ActionType from './roulette.actions'

const initialState: RouletteReducerType = {
    data: null,
    delay: 3000,
    status: { index: 0, dir: false },
    loading: false,
    messages: [],
    error: ""
}

const manageRoulette = (state = initialState, action: ActionType): RouletteReducerType => {
    switch(action.type) {
        case Types.SET_ROULETTE: return {...state, data: action.data }
        case Types.SET_ROULETTE_STATUS: {
            return {
                ...state,
                status: { dir: !state.status.dir , index: action.index }
            }
        }
        case Types.ADD_ROULETTE_REWARD: {
            if(state.data !== null) {
                let rewards = state.data.rewards.length === 5 ? [...state.data.rewards].slice(0, 4) : [...state.data.rewards]

                let item = state.data.items.find(i => i.RowID === action.id)
                if(item) {
                    return {
                        ...state,
                        data: {
                            ...state.data,
                            rewards: [{ ItemName: item.ItemName, Count: item.Count, Date: new Date().toLocaleString() }, ...rewards]
                        }
                    }
                } else {
                    return state
                }
            } else {
                return state
            }
        }
        case Types.SET_ROULETTE_LOADING: return {...state, loading: action.loading };
        case Types.SET_ROULETTE_ERROR: return {...state, error: action.error };
        case Types.SET_ROULETTE_MESSAGE: {
            let { id, message } = action.message;
            if(!message) return {...state, messages: state.messages.filter(i => i.id !== id )};
            else return {...state, messages: [...state.messages, action.message ]};
        }
        default: return state;
    }
}

export default manageRoulette;