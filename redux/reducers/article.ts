import * as types from '../actionTypes'

const article = {
  isFetching: false,
  code: 0,
  msg: null,
  data: '',
  dateTime: null
}

const GetArticle = (state = article, action) => {
  switch(action.type) {
    case types.GET_ARTICLE_DETAIL:
      return {
        ...state,
        isFetching: true
      }
    case types.GET_ARTICLE_DETAIL_SUCCESS:
      return {
        ...state,
        msg: '成功',
        data: action.data,
        isFetching: false,
        dateTime: Date.now()
      }
    default: 
      return state
  }
}

export { 
  GetArticle
}