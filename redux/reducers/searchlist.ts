import * as types from '../actionTypes'

const searchList = {
  isFetching: false,
  code: 0,
  msg: null,
  data: null,
  dateTime: null
}

const SearchList = (state = searchList, action) => {
  switch(action.type) {
    case types.GET_SEARCHLIST:
      return {
        ...state,
        isFetching: true
      }
    case types.GET_SEARCHLIST_SUCCESS:
      return {
        ...state,
        msg: '成功',
        data: action.data,
        isFetching: false,
        dateTime: Date.now()
      }
    case types.GET_SEARCHLIST_FAIL:
      return {
        ...state,
        msg: '失败',
        data: null,
        isFetching: false,
        dateTime: Date.now()
      }
    default: 
      return state
  }
}

export { 
  SearchList
}