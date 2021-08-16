import { createStore, applyMiddleware, combineReducers, compose } from "redux"
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

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const middleware = [ sagaMiddleware ];
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

export default store;

export type AppState = ReturnType<typeof rootReducer>
export type DispatchType = typeof store.dispatch