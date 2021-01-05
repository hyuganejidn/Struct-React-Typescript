import * as types from './Test.constants'

export const changeTest = (payload = 'a') => ({ payload, type: types.TEST })
