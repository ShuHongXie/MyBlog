import * as types from '../actionTypes'

const author = {
  isFetching: false,
  code: 0,
  msg: null,
  data: false,
  dateTime: null
}

const Author = (state = author, action) => {
  switch(action.type) {
    case types.SAVE_AUTHOR:
      return {
        ...state,
        isFetching: true
      }
    case types.SAVE_AUTHOR_SUCCESS:
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
  Author
}