import { takeLatest, put } from 'redux-saga/effects';
import * as types from '../actionTypes';

function* handleComp({ data }) {
  yield put({type: types.HANDLE_COMP_SUCCESS });
}

function* sidebarStatus({ data }) {
  yield put({type: types.SAVE_SIDEBAR_STATUS_SUCCESS, data: data });
}


export default [
  takeLatest(types.HANDLE_COMP, handleComp),
  takeLatest(types.SAVE_SIDEBAR_STATUS, sidebarStatus),
];
