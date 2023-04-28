import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_NOTES" actions
function* fetchNotes() {
  try {
    const response = yield axios.get('/api/notes');
    yield put({ type: 'SET_NOTES', payload: response.data });
  } catch (error) {
    console.log('Notes get request failed', error);
  }
}

function* fetchNoteDetails(action) {
    try {
        const response = yield axios.get(`/api/notes/${action.payload}`);
        yield put({ type: 'SET_NOTE_DETAILS', payload: response.data });
      } catch (error) {
        console.log('Note details get request failed', error);
      }
}

function* addNote(action) {
  try {
    yield axios.post(`/api/notes`, action.payload);
    yield put({ type: 'FETCH_NOTES' });
    yield put({type: 'CLEAR_WEATHER'});
  } catch (error) {
    console.log('Note details post request failed', error);
  }
}

function* notesSaga() {
  yield takeLatest('FETCH_NOTES', fetchNotes);
  yield takeLatest('FETCH_NOTE_DETAILS', fetchNoteDetails);
  yield takeLatest('ADD_NOTE', addNote);
}

export default notesSaga;
