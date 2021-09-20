import * as types from './newsTypes'

export const categoryToIndex = {
    [types.NEWS]: 0,
    [types.UPDATE]: 1,
    [types.EVENT]: 2
}

export const indexToCategory: { [key: number]: string } = {
    0: types.NEWS,
    1: types.UPDATE,
    2: types.EVENT
}