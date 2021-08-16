export interface TableResponse<T> {
    data: Array<T>,
    titles: Array<string>
}

export interface BasicResponse {
    resultCode: number
    message?: string
}