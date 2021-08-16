import Types, { ResurrectionReducerType } from "./resurrection.types"
import { CharItemSchema } from 'utils/contentTypes'
import ActionType from './resurrection.actions'

const initialState: ResurrectionReducerType = {
    data: null,
    loading: [],
    errors: []
}

const manageResurrection = (state = initialState, action: ActionType): ResurrectionReducerType => {
    switch(action.type) {
        case Types.SET_CHARS: return {...state, data: action.data }
        case Types.RESURRECT_CHAR: {
            let { deleted, active } = state.data!
            let resurrectedChar = deleted.data.find(item => item.CharID === action.CharID)
            if(resurrectedChar) {
                let updateActive = [...active.data, { ...resurrectedChar }]
                let updateDeleted: CharItemSchema[] = deleted.data.filter(item => item.CharID !== action.CharID)
                return {...state, data: {...state.data!, active: {...active, data: updateActive }, deleted: {...deleted, data: updateDeleted }}}
            } else {
                return state
            }
        }
        case Types.DELETE_CHAR: {
            let { deleted, active } = state.data!
            let deletedChar = active.data.find(item => item.CharID === action.CharID)
            if(deletedChar) {
                let updateActive: CharItemSchema[] = active.data.filter(item => item.CharID !== action.CharID)
                let updateDeleted = [...deleted.data, { ...deletedChar, DeleteDate: new Date().toLocaleString() }]
                return {...state, data: {...state.data!, active: {...active, data: updateActive }, deleted: {...deleted, data: updateDeleted }}}
            } else {
                return state
            }
        }
        case Types.CHAR_ACTION_LOADING: {
            let { CharID, status } = action;
            if(status) {
                return {...state, loading: [...state.loading, CharID ]};
            } else {
                return {...state, loading: state.loading.filter(id => id !== CharID)};
            }
        }
        case Types.CHAR_ACTION_ERROR: {
            let { CharID, error } = action;
            if(error) {
                return {...state, errors: [...state.errors, { CharID, error } ]};
            } else {
                return {...state, errors: state.errors.filter(e => e.CharID !== CharID)};
            }
        }
        default: return state;
    }
}

export default manageResurrection;