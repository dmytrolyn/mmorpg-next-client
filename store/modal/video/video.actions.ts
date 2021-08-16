import Types, { ManageVideoModalActionType } from './video.types'

export const manageVideoModal = (status: boolean, data: string | null): ManageVideoModalActionType => ({
    type: Types.MANAGE_VIDEO_MODAL,
    status,
    data
})



