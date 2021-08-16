import { ShopItemSchema } from 'utils/contentTypes';
import { LoadingType, ErrorType, MessageType } from 'utils/storeTypes'

export interface ShopReducerType {
    items: null | Array<ShopItemSchema>
    loading: Array<LoadingType>
    errors: Array<ErrorType>
    messages: Array<MessageType>
}

enum ShopActionTypes {
    SHOP_LOADING = "SHOP_LOADING",
    SHOP_ERROR = "SHOP_ERROR",
    SHOP_MESSAGE = "SHOP_MESSAGE",
    SHOP_PURCHASE = "SHOP_PURCHASE"
}

export default ShopActionTypes;