import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_NOTES" actions
function* fetchWeatherForDate(action) {
    const { date, zipCode } = action.payload;
    console.log(process.env);
    try {
        const response = yield axios.get(`/api/weather/${date}/${zipCode}`);
        console.log({response});
        yield put({ type: 'SET_WEATHER', payload: response.data });
    } catch (error) {
        console.log('Weather get request failed', error);
    }
}

function* weatherSaga() {
    yield takeLatest('FETCH_WEATHER_FOR_DATE', fetchWeatherForDate);
}

export default weatherSaga;