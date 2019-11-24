import { all } from 'redux-saga/effects';

import common from './common'
import article from './article'
import searchlist from './searchlist'
import author from './author'
import message from './message'
// import loanListDetail from './loanListDetail';
// import loanCard from './loanCard';

export default function* rootSaga() {
  yield all([
    ...common,
    ...article,
    ...searchlist,
    ...author,
    ...message
  ]);
}
