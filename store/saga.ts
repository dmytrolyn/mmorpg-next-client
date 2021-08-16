import { all, fork } from 'redux-saga/effects';
import authSaga from './auth/auth.sagas'
import resurrectionSaga from './profile/resurrection/resurrection.sagas'
import rewardsSaga from './profile/rewards/rewards.sagas'
import rouletteSaga from './profile/roulette/roulette.sagas'
import spendersSaga from './profile/spenders/spenders.sagas'
import shopSaga from './shop/shop.sagas'

export function* rootSaga() {
    yield all([fork(authSaga), 
        fork(resurrectionSaga), 
        fork(rewardsSaga), 
        fork(rouletteSaga), 
        fork(spendersSaga), 
        fork(shopSaga)])
}