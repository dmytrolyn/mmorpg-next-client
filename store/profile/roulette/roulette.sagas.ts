import { call, put, delay, select, takeEvery, SagaReturnType } from 'redux-saga/effects'
import { getInfo, getRoulette } from 'store/profile/profile.selectors'
import * as Actions from './roulette.actions'
import Types from './roulette.types'
import { changeUserBalance } from 'store/profile/profile.actions'
import API from 'api/profile'

async function* getRouletteReward() {
    let info: ReturnType<typeof getInfo> = yield select(getInfo)
    let roulette: ReturnType<typeof getRoulette> = yield select(getRoulette)

    if(!info || !roulette) {
        yield put(Actions.rouletteError("You are not authorized"))
    } else {
        let { price } = roulette.data!
        let { Point } = info

        if(Point >= price && Point !== 0) {
            try {
                yield put(Actions.setRouletteLoading(true));
                let resp: SagaReturnType<typeof API.getRouletteReward> = yield call(API.getRouletteReward);
                
                if(resp.resultCode === 0) {
                    let { message } = resp
                    yield put(Actions.setRouletteStatus(resp.reward))

                    yield delay(roulette.delay)
                    yield put(Actions.addRouletteReward(resp.reward))
                    yield put(changeUserBalance(Number(price)))
    
                    let id = Symbol();
                    yield put(Actions.setRouletteResultMessage({ id, message: message! }));
                    
                    yield delay(roulette.delay)
                    yield put(Actions.setRouletteResultMessage({ id, message: message! }))
                } else {
                    throw new Error(resp.message!)
                }
            } catch(err) {
                yield put(Actions.rouletteError(err.message as string))
                yield delay(3000)
                yield put(Actions.rouletteError(""))
            } finally {
                yield put(Actions.setRouletteLoading(false))
            }
        } else {
            yield put(Actions.rouletteError("You don't have enough SP for spin"))
        }
    }
}

export default function* rouletteWatcher() {
    yield takeEvery(Types.GET_ROULETTE_REWARD, getRouletteReward)
}