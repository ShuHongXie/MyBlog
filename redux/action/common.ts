import * as types from '../actionTypes'

export const handleComp = data => {
  return {
    type: types.HANDLE_COMP,
    data
  }
}

export const saveSidebarStatus = data => {
  return {
    type: types.SAVE_SIDEBAR_STATUS,
    data
  }
}

export const handleMessage = data => {
  return {
    type: types.HANDLE_MESSAGE,
    data
  }
}