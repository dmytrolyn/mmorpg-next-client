import { useMemo } from 'react'
import { createStore, applyMiddleware, combineReducers } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './saga';

import modal from './modal'
import auth from './auth'
import pages from './shop'
import profile from './profile'
import shop from './shop'

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    modal,
    auth,
    pages,
    profile,
    shop
})

let store: any

function initStore(initialState: AppState) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    )
}

export const initializeStore = (preloadedState: AppState) => {
    let _store = store ?? initStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
        ...store.getState(),
        ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    sagaMiddleware.run(rootSaga);

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

function useStore(initialState: AppState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}

export default useStore;

export type AppState = ReturnType<typeof rootReducer>
export type DispatchType = typeof store.dispatch