import React, { useState, useEffect, useCallback } from 'react'
import { connect, ConnectedProps, useSelector, useDispatch } from 'react-redux'
import { increaseCount, decreaseCount, test } from './Count.actions'
import './Count.scss'
import { CountChild } from './CountChild'
import { testApi } from '@/services/test'
// import CountChild from './CountChild'

const mapStateToProps = ({ count }: { count: number }) => ({ count })

const mapDispatchToProps = { increaseCount, decreaseCount }

const connector = connect()
// const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

const Count = (props: Props) => {
  // const [test, setTest] = useState(0)
  const [state1, setState1] = useState(0)
  const [state2, setState2] = useState(0)
  const state = useSelector((state: { count: number }) => state)
  const dispatch = useDispatch()
  const [data, setData] = useState({ value: '' })
  // useEffect(() => {
  //   console.log(state, 'count', props)
  //   return () => console.log('unmounted', props)
  // }, [])
  // useEffect(() => {
  //   console.log(state, 'count', props)
  //   return () => console.log('unmounted', props)
  // })
  useEffect(() => {
    console.log(props.dispatch({ type: 'increment', payload: 1 }))
  }, [])

  useEffect(() => {
    console.log(state)
  }, [state])

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(state1, '  ', state2)
  //   }, 1000)
  // })
  // useEffect(() => {
  //   console.log(state, props)
  // }, [state])

  // useEffect(() => {
  //   console.log(state1, '  ', state2)
  // }, [state1])

  // useEffect(() => {
  //   console.log(state1, '  ', state2)
  // }, [state2])
  // console.log(state, 'out')
  const handleSearch = useCallback((value: string) => {
    console.log(value)
  }, [])

  return (
    <div>
      <button
        onClick={() => {
          dispatch(test())
        }}
      >
        click
      </button>
      <button onClick={() => testApi()}>click2</button>
      <div> {state.count}</div>
      <CountChild handleSearch={handleSearch} />
    </div>
  )
}

export default connector(Count)
