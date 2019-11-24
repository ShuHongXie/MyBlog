import * as types from '../actionTypes'

export const getArticle = data => {
  return {
    type: types.GET_ARTICLE_DETAIL,
    data
  }
}