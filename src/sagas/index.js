import { all, fork} from 'redux-saga/effects';
import {getWeatherSage} from "./weatherSaga";
export function* rootSaga () {
    yield all([
        fork(getWeatherSage),
    ]);
};
