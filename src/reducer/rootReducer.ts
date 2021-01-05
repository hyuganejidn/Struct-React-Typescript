import { combineReducers } from 'redux'
import { countReducer } from '@/pages/Count/Count.reducers'
import { testReducer } from '@/pages/test/Test.reducers'

export const rootReducer = combineReducers({
  count: countReducer,
  test: testReducer,
})
