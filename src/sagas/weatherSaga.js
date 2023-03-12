import { takeLatest, put, call } from 'redux-saga/effects';
import {UPDATE_ERROR, UPDATE_WEATHER_LIST} from "../actions/actions";
import config from "../../config";
import axios from 'axios';
const getWeatherData = (cityName) => {
     return axios.get(`${config.URL}${cityName}&units=metric&APPID=${config.API_KEY}`)
        .then(data => {
            return data;
        })
        .catch(err => {
            UPDATE_ERROR('Object does not exist.')
            return null;
        });
}


function* fetchLatLongHandler(action) {
    const response = yield call(getWeatherData, action.payload);
    if(response) {
        yield put(UPDATE_WEATHER_LIST(response.data));
    }
};

export function* getWeatherSage() {
    yield takeLatest('GET_WEATHER', fetchLatLongHandler);
};
