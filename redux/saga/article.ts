import { takeLatest, put } from 'redux-saga/effects';
import * as types from '../actionTypes';

function* getArticle({ data }) {
  yield put({type: types.GET_ARTICLE_DETAIL_SUCCESS, data });
}




export default [
  takeLatest(types.GET_ARTICLE_DETAIL, getArticle),
];
