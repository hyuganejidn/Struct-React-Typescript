import { combineReducers } from 'redux'
import { countReducer } from '@/pages/Count/Count.reducers'

export const rootReducer = combineReducers({
  count: countReducer,
})
