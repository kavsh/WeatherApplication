import {createStore, applyMiddleware, compose} from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';
import { rootSaga } from '../sagas/index';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(
        sagaMiddleware,
        createLogger(),
    ),
);
sagaMiddleware.run(rootSaga);

export {
    store,
}
