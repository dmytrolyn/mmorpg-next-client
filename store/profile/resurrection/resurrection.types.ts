import { CharItemSchema } from 'utils/contentTypes'

export interface ResurrectionData {
    deleted: {
        data: Array<CharItemSchema>
        titles: Array<string>
    }
    active: {
        data: Array<CharItemSchema>
        titles: Array<string>
    }
    price: number
}

export interface ResurrectionReducerType {
    data: ResurrectionData | null
    loading: Array<number>
    errors: Array<{ CharID: number, error: string | null }>
}

enum ResurrectionActionTypes {
    SET_CHARS = "SET_CHARS",
    RESURRECT_CHAR = "RESURRECT_CHAR",
    RESURRECT_REQUEST = "RESURRECT_REQUEST",
    DELETE_CHAR = "DELETE_CHAR",
    DELETE_REQUEST = "DELETE_REQUEST",
    CHAR_ACTION_LOADING = "CHAR_ACTION_LOADING",
    CHAR_ACTION_ERROR = "CHAR_ACTION_ERROR"
}

export default ResurrectionActionTypes