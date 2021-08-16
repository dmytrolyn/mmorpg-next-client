import { all, fork, put, call, delay, takeEvery, SagaReturnType, select } from 'redux-saga/effects'
import * as Actions from './resurrection.actions'
import { changeUserBalance } from 'store/profile/profile.actions'
import * as profileSelectors from 'store/profile/profile.selectors'
import Types from './resurrection.types'
import API from 'api/profile'

function* deleteCharWorker ({ CharID }: { CharID: number, type: string }) {
    try {
        yield put(Actions.charActionLoading(CharID, true))
        let resp: SagaReturnType<typeof API.makeDeleteCharRequest> = yield call(API.makeDeleteCharRequest, { CharID })
        if(resp.resultCode === 0) {
            yield put(Actions.deleteChar(CharID));
        } else {
            throw new Error(resp.message!)
        }
    } catch(err) {
        yield put(Actions.charActionError(CharID, "Some error occurred while deleting characheter"));
        yield delay(3000)
        yield put(Actions.charActionError(CharID, null))
    } finally {
        yield put(Actions.charActionLoading(CharID, false));
    }
}

function* resurrectCharWorker({ CharID }: { CharID: number, type: string }) {
    let resurrection: ReturnType<typeof profileSelectors.getChars> = yield select(profileSelectors.getChars)
    let info: ReturnType<typeof profileSelectors.getInfo> = yield select(profileSelectors.getInfo)

    if(!resurrection || !info) {
        yield put(Actions.charActionError(CharID, "You are not authorized"))
    } else {
        let activePlayers = resurrection.data!.active.data
        let deletedPlayers = resurrection.data!.deleted.data

        let activeCount = activePlayers!.length

        let fetchingPlayers = resurrection!.loading.reduce((arr: number[], id) => {
            if(deletedPlayers.some(item => item.CharID === id)) {
                return [...arr, id]
            }
            return arr
        }, []);
        let fetchingCount = fetchingPlayers.length

        if(activeCount + fetchingCount >= 5) {
            return;
        }

        let { price } = resurrection.data!
        let { Point } = info

        if(Point >= price && Point !== 0) {
            try {
                yield put(Actions.charActionLoading(CharID, true))
                let resp: SagaReturnType<typeof API.makeResurrectRequest> = yield call(API.makeResurrectRequest, { CharID })
                if(resp.resultCode === 0) {
                    yield put(changeUserBalance(Number(price)))
                    yield put(Actions.resurrectChar(CharID))
                } else {
                    throw new Error(resp.message)
                }
            } catch(err) {
                yield put(Actions.charActionError(CharID, "Error occured while resurrecting charachter"))
                yield delay(3000)
                yield put(Actions.charActionError(CharID, null))
            } finally {
                yield put(Actions.charActionLoading(CharID, false));
            }
        } else {
            yield put(Actions.charActionError(CharID, "You don't have enough points"));
        }
    }
}

export default function* resurrectionWatcher() {
    yield takeEvery(Types.DELETE_REQUEST, deleteCharWorker)
    yield takeEvery(Types.RESURRECT_REQUEST, resurrectCharWorker)
}