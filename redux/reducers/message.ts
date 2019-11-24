import * as types from '../actionTypes'

const messageStatus = {
  isFetching: false,
  code: 0,
  msg: null,
  data: null,
  dateTime: null
}

const MessageStatus = (state = messageStatus, action) => {
  switch(action.type) {
    case types.HANDLE_MESSAGE:
      return {
        ...state,
        isFetching: true
      }
    case types.HANDLE_MESSAGE_SUCCESS:
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
  MessageStatus
}