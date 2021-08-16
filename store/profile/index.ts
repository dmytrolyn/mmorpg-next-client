import Types, { ProfileReducerType } from './profile.types';
import ActionType from './profile.actions'
import manageRewards from './rewards';
import manageResurrection from './resurrection';
import manageSpenders from './spenders';
import manageRoulette from './roulette';

const initialState: ProfileReducerType  = {
    info: null,
    rewards: undefined,
    resurrection: undefined,
    spenders: undefined,
    roulette: undefined
}

const manageProfile = (state = initialState, action: ActionType): ProfileReducerType  => {
    switch(action.type) {
        case Types.SET_USER_INFO: return {...state, info: action.user }
        case Types.CLEAR_PROFILE_DATA: return initialState
        case Types.CHANGE_USER_BALANCE: {
            if(state.info) {
                return {...state, info: {...state.info, Point: state.info!.Point - action.diff }}
            } else return state
        } 
        default: return {
            info: state.info,
            rewards: manageRewards(state.rewards, action),
            resurrection: manageResurrection(state.resurrection, action),
            spenders: manageSpenders(state.spenders, action),
            roulette: manageRoulette(state.roulette, action)
        };
    }
}

export default manageProfile;
