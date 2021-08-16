import { put, select, call, takeEvery, SagaReturnType } from 'redux-saga/effects'
import * as ShopActions from './shop.actions'
import { changeUserBalance } from 'store/profile/profile.actions'
import { increaseSpendersStatus } from 'store/profile/spenders/spenders.actions'
import * as profileSelectors from 'store/profile/profile.selectors'
import * as shopSelectors from './shop.selectors'
import Types from './shop.types'
import ShopAPI from 'api/shop'

function* makePurchase({ id }: { id: number, type: string }) {
    let info: ReturnType<typeof profileSelectors.getInfo> = yield select(profileSelectors.getInfo)
    let shopItems: ReturnType<typeof shopSelectors.getItems> = yield select(shopSelectors.getItems)

    let uid = Symbol();
    if(info !== null && shopItems !== null) {
        let { Point } = info;
        let toBuy = shopItems.find(i => i.RowID === id)

        try {
            if(toBuy && Point >= toBuy.Price && Point !== 0) {
                yield put(ShopActions.setShopLoading({ id: uid, status: true }))

                let resp: SagaReturnType<typeof ShopAPI.makePurchaseRequest> = yield call(ShopAPI.makePurchaseRequest, id);
                let { message = '' } = resp;
        
                if(resp.resultCode === 0) {
                    yield put(changeUserBalance(toBuy.Price));
                    yield put(increaseSpendersStatus(toBuy.Price));
        
                    yield put(ShopActions.setShopMessage({ id: uid, message }));
                } else {
                    yield put(ShopActions.setShopError({ id: uid, message }));
                }
            } else {
                yield put(ShopActions.setShopError({ id: uid, message: "You don't have enough SP to buy this item" }));
            }
        } catch(err) {
            yield put(ShopActions.setShopError({ id: uid, message: err.message }));
        }
        yield put(ShopActions.setShopLoading({ id: uid, status: false }));
    } else {
        yield put(ShopActions.setShopError({ id: uid, message: "You are not authorized" }));
    }
}

export default function* shopWatcher() {
    yield takeEvery(Types.SHOP_PURCHASE, makePurchase)
}