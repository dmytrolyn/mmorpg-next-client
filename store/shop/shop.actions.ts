import Types from './shop.types'
import { ErrorType, LoadingType, MessageType } from 'utils/storeTypes'

interface ShopLoadingActionType {
    type: Types.SHOP_LOADING
    item: LoadingType
}

export const setShopLoading = (item: LoadingType): ShopLoadingActionType => ({
    type: Types.SHOP_LOADING,
    item
})

export interface ShopErrorActionType {
    type: Types.SHOP_ERROR
    error: ErrorType
}

export const setShopError = (error: ErrorType): ShopErrorActionType => ({
    type: Types.SHOP_ERROR,
    error
})

export interface ShopMessageActionType {
    type: Types.SHOP_MESSAGE
    message: MessageType
}

export const setShopMessage = (message: MessageType): ShopMessageActionType => ({
    type: Types.SHOP_MESSAGE,
    message
})

export interface ShopPurchaseActionType {
    type: Types.SHOP_PURCHASE
    id: number
}

export const makePurchase = (id: number): ShopPurchaseActionType => ({
    type: Types.SHOP_PURCHASE,
    id
})

type ShopActionType = ShopLoadingActionType | ShopErrorActionType | ShopMessageActionType
export default ShopActionType