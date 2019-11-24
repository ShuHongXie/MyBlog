import * as types from '../actionTypes'

export const saveAuthor = data => {
  return {
    type: types.SAVE_AUTHOR,
    data
  }
}