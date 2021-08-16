export interface VideoModalReducerType {
    isOpened: boolean
    data: string | null
}

enum VideoActionTypes {
    MANAGE_VIDEO_MODAL = "MANAGE_VIDEO_MODAL"
}

export default VideoActionTypes


export interface ManageVideoModalActionType {
    type: VideoActionTypes.MANAGE_VIDEO_MODAL
    status: boolean
    data: string | null
}

export type VideoActionType = ManageVideoModalActionType