import Types, { ShopReducerType } from './shop.types'
import ShopActionType from './shop.actions'

const initialState: ShopReducerType = {
    items: null,
    loading: [],
    errors: [],
    messages: []
}

const manageShop = (state = initialState, action: ShopActionType): ShopReducerType => {
    switch(action.type) {
        case Types.SHOP_LOADING: {
            let { id, status } = action.item
            if(status) return {...state, loading: [...state.loading, action.item] } 
            else return {...state, loading: state.loading.filter(i => i.id !== id) }
        }
        case Types.SHOP_ERROR: {
            let { id, message } = action.error
            if(!message) return {...state, errors: state.errors.filter(i => i.id !== id )}
            else return {...state, errors: [...state.errors, action.error ]}
        }
        case Types.SHOP_MESSAGE: {
            let { id, message } = action.message;
            if(!message) return {...state, messages: state.messages.filter(i => i.id !== id )};
            else return {...state, messages: [...state.messages, action.message ]};
        }
        default: return state;
    }
}

export default manageShop;