import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
console.log('outsise  app hung')

import Count from '@/pages/Count/Count'

export const App = () => {
  console.log('hung')
  useEffect(() => {
    console.log('app')
  }, [])
  return (
    <Provider store={store}>
      <Count />
    </Provider>
  )
}
