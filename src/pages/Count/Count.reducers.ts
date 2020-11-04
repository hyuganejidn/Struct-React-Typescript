import * as types from './Count.contants'

const initialState = 0

export const countReducer = (state: number = initialState, action: ActionRedux) => {
  switch (action.type) {
    case types.INCREMENT:
      return state + action.payload
    case types.DECREMENT:
      return state - action.payload
    default:
      return state
  }
}
