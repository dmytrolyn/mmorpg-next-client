import * as types from './newsTypes';

interface IColors {
    [key: string]: string
}

export const colors: IColors = {
    [types.NEWS]: "#92d529",
    [types.UPDATE]: "#579281",
    [types.EVENT]: "#b76046"
}