import { takeLatest, put } from 'redux-saga/effects';
import * as types from '../actionTypes';

function* saveAuthor({ data }) {
  yield put({type: types.SAVE_AUTHOR_SUCCESS, data });
}




export default [
  takeLatest(types.SAVE_AUTHOR, saveAuthor),
];
