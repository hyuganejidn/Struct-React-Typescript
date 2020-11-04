import * as types from './Count.contants'

export const increaseCount = (payload = 1) => ({ type: types.INCREMENT, payload })
export const decreaseCount = (payload = 1) => ({ type: types.DECREMENT, payload })
