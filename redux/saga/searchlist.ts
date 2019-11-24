import { takeLatest, put, call } from 'redux-saga/effects';
import { getDomain } from '../../config/base'
import * as types from '../actionTypes';
import fetch from 'isomorphic-unfetch'

function* getSearchList(data) {
  try {
    const res = yield fetch(`${ getDomain() }/search`, {
      method: 'POST',
      body: JSON.stringify({ key: data.data.key, pageNum: data.data.pageNum }),
      credentials: 'same-origin',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    });
    const json = yield res.json();

    if (json.retCode === 200) {
      yield put({
        type: types.GET_SEARCHLIST_SUCCESS,
        data: json.data
      })
    } else {
      yield put({
        type: types.GET_SEARCHLIST_FAIL,
        data: json.message
      })
    }
  } catch (e) {
    yield put({
      type: types.GET_SEARCHLIST_FAIL,
      data: e.message
    })
  }

}




export default [
  takeLatest(types.GET_SEARCHLIST, getSearchList),
];
