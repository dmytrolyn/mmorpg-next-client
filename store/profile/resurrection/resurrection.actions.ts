import Types, { ResurrectionData } from './resurrection.types'

interface SetCharsAction {
    type: Types.SET_CHARS
    data: ResurrectionData
}

export const setResurrectionData = (data: ResurrectionData): SetCharsAction => ({
    type: Types.SET_CHARS,
    data
})

interface ResurrectCharActionType {
    type: Types.RESURRECT_CHAR
    CharID: number
}

export const resurrectChar = (CharID: number): ResurrectCharActionType => ({
    type: Types.RESURRECT_CHAR,
    CharID
})

interface DeleteCharActionType {
    type: Types.DELETE_CHAR
    CharID: number
}

export const deleteChar = (CharID: number): DeleteCharActionType => ({
    type: Types.DELETE_CHAR,
    CharID
})

interface CharErrorActionType {
    type: Types.CHAR_ACTION_ERROR
    CharID: number
    error: string | null
}

export const charActionError = (CharID: number, error: string | null): CharErrorActionType => ({
    type: Types.CHAR_ACTION_ERROR,
    CharID,
    error
})

interface CharLoadingActionType {
    type: Types.CHAR_ACTION_LOADING
    CharID: number
    status: boolean
}

export const charActionLoading = (CharID: number, status: boolean): CharLoadingActionType => ({
    type: Types.CHAR_ACTION_LOADING,
    CharID,
    status
})

interface RessurectCharRequestAction {
    type: Types.RESURRECT_REQUEST
    CharID: number
}

export const resurrectCharRequest = (CharID: number): RessurectCharRequestAction => ({
    type: Types.RESURRECT_REQUEST,
    CharID
})

interface DeleteCharRequestAction {
    type: Types.DELETE_REQUEST
    CharID: number
}

export const deleteCharRequest = (CharID: number): DeleteCharRequestAction => ({
    type: Types.DELETE_REQUEST,
    CharID
})

type ResurrectionActionType = ResurrectCharActionType | DeleteCharActionType | CharErrorActionType | CharLoadingActionType | SetCharsAction

export default ResurrectionActionType