import { takeLatest, put, delay } from 'redux-saga/effects';
import * as types from '../actionTypes';

function* handleMessage({ data }) {
  yield put({type: types.HANDLE_MESSAGE_SUCCESS, data });
  yield delay(3000);
  
  const finalData = JSON.parse(JSON.stringify(Object.assign(data, { status: false })));
  yield put({type: types.HANDLE_MESSAGE_SUCCESS, data: finalData });
}



export default [
  takeLatest(types.HANDLE_MESSAGE, handleMessage),
];
