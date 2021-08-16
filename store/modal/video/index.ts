import Types, { VideoModalReducerType, VideoActionType } from './video.types';

const initialState: VideoModalReducerType = {
    isOpened: false,
    data: null
}

const playerReducer = (state = initialState, action: VideoActionType): VideoModalReducerType => {
    switch(action.type) {
        case Types.MANAGE_VIDEO_MODAL: {
            return {...state, isOpened: action.status, data: action.data };
        }
        default: return state;
    }
}

export default playerReducer;