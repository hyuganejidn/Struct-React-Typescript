import React, { useEffect, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeTest } from './Test.actions'
import { TestContext } from './TestContextProvider'

interface Props {}

export const Test = () => {
  const { count, setCount } = useContext(TestContext)!
  // const test = useSelector(({ test }: { test: string }) => test)
  // const state = useSelector((state: { test: string; count: number }) => state)
  // const dispatch = useDispatch()

  useEffect(() => {
    // console.log(count, 'testContext')
  }, [])

  return (
    <div>
      <button onClick={() => console.log(count, 'testContext')}>test</button>
      <button onClick={() => setCount(count + 1)}>set context </button>
    </div>
  )
}
