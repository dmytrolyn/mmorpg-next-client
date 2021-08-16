import { takeEvery } from 'redux-saga/effects'
import Types from './auth.types'

function logout() {
    document.cookie = ""
}

export default function* authWatcher() {
    yield takeEvery(Types.LOGOUT, logout)
}