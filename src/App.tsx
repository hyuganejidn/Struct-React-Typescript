import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Test } from './pages/test/Test'
import { TestProvider } from './pages/test/TestContextProvider'
import { TestClass } from './pages/test/TestClass'
import Count from './pages/Count/Count'

export const App = () => {
  console.log(store)
  return (
    <Provider store={store}>
      {/* <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/foo">Foo</Link>
          <Link to="/bar">Bar</Link>
        </nav>
      </Router> */}
      <Count />
      {/* <TestProvider> */}
      {/* <Test /> */}
      {/* </TestProvider> */}
      {/* <TestClass test={123} /> */}
    </Provider>
  )
}
