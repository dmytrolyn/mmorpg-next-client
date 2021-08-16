import { put, call, delay, takeEvery, SagaReturnType } from 'redux-saga/effects'
import API from 'api/profile'
import Types from './spenders.types'
import * as Actions from './spenders.actions'

function* getSpenderRewardWorker ({ SpenderID, Level, RowID }: { SpenderID: number, Level: number, RowID: number, type: string }) {
    try {
        yield put(Actions.spenderRewardLoading(SpenderID, Level, true))
        let resp: SagaReturnType<typeof API.getSpenderReward> = yield call(API.getSpenderReward, { SpenderID, Level, RowID })
        if(resp.resultCode === 0) {
            yield put(Actions.getSpenderReward(SpenderID, Level))
        } else {
            throw new Error(resp.message)
        }
    } catch(err) {
        yield put(Actions.spenderRewardError({ level: Level, message: err.message as string }))
        yield delay(3000)
        yield put(Actions.spenderRewardError({ level: Level, message: "" }))
    } finally {
        yield put(Actions.spenderRewardLoading(SpenderID, Level, false));
    }
}

export default function* spendersWatcher() {
    yield takeEvery(Types.GET_SPENDER_REWARD_REQUEST, getSpenderRewardWorker)
}
