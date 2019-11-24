import * as types from '../actionTypes'

export const getSearchList = data => {
  return {
    type: types.GET_SEARCHLIST,
    data
  }
}