import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_NOTES" actions
function* fetchNotes() {
  try {
    console.log('fetching notes')
    const response = yield axios.get('/api/notes');
    yield put({ type: 'SET_NOTES', payload: response.data });
  } catch (error) {
    console.log('Notes get request failed', error);
  }
}

function* notesSaga() {
  yield takeLatest('FETCH_NOTES', fetchNotes);
}

export default notesSaga;
