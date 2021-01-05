import * as types from './Count.constants'

export const increaseCount = (payload = 1) => ({ payload, type: types.INCREMENT })
export const decreaseCount = (payload = 1) => ({ payload, type: types.DECREMENT })

export const test = (payload = 1) => (dispatch: any) => {
  setTimeout(() => {
    // dispatch({ type: types.DECREMENT, payload })
    // dispatch({ type: types.INCREMENT, payload })
    dispatch(increaseCount())

    // return ({ type: types.DECREMENT, payload })
  }, 2000)
  return Promise.resolve('test')
  // return ({ type: types.DECREMENT, payload })
}
