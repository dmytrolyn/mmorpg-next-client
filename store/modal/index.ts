import { combineReducers } from 'redux'
import auth from './auth'
import video from './video'

export default combineReducers({
    auth,
    video
});