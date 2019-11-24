import * as types from '../actionTypes'

export const handleMessage = data => {
  return {
    type: types.HANDLE_MESSAGE,
    data
  }
}