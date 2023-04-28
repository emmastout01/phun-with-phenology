import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_BIRDS" actions
function* fetchBirds() {
    try {
        const response = yield axios.get(`/api/bird`);
        yield put({ type: 'SET_BIRDS', payload: response.data });
    } catch (error) {
        console.log('Birds get request failed', error);
    }
}

function* birdsSaga() {
    yield takeLatest('FETCH_BIRDS', fetchBirds);
}

export default birdsSaga;