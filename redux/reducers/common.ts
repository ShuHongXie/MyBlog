import * as types from '../actionTypes'

const handle = {
  search: false, // 控制搜索框
  black: false, // 控制黑色背景
}

const HandleComp = (state = handle, action) => {
  switch(action.type) {
    case types.HANDLE_COMP:
      return Object.assign({},state,action.data)
    case types.HANDLE_COMP_SUCCESS:
      return Object.assign({},state,action.data)
    default: 
      return state
  }
}

const SidebarStatus = (state = false, action) => {
  switch(action.type) {
    case types.SAVE_SIDEBAR_STATUS:
      return action.data
    case types.SAVE_SIDEBAR_STATUS_SUCCESS:
      return action.data
    default: 
      return state
  }
}

export { 
  HandleComp, 
  SidebarStatus,
}