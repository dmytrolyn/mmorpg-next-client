import { put, call, delay, takeEvery, SagaReturnType } from 'redux-saga/effects'
import * as Actions from './rewards.actions'
import API from 'api/profile'
import Types from './rewards.types'

function* getRewardWorker({ rank } : { type: string, rank: number }) {
    try {
        yield put(Actions.rankRewardLoading(rank, true))
        let resp: SagaReturnType<typeof API.getRankRewardRequest> = yield call(API.getRankRewardRequest, { rank })
        yield put(Actions.rankRewardLoading(rank, false))
        if(resp.resultCode === 0) {
            yield put(Actions.getRankReward(rank))
        } else {
            throw new Error(resp.message)
        }
    } catch(err) {
        yield put(Actions.rankRewardError(rank, err.message as string));
        yield delay(3000)
        yield put(Actions.rankRewardError(rank, ""))
    } finally {
        yield put(Actions.rankRewardLoading(rank, false));
    }
} 

export default function* rewardsWatcher() {
    yield takeEvery(Types.GET_REWARD_REQUEST, getRewardWorker)
}