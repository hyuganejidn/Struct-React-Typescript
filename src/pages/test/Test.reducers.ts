import * as types from './Test.constants'

const initialState = 'test'

export const testReducer = (state: string = initialState, { type, payload }: ActionRedux) => {
  switch (type) {
    case types.TEST:
      return state + payload
    default:
      return state
  }
}
