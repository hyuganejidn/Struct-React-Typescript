import React, { useState, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { increaseCount, decreaseCount } from './Count.actions'
import TodoList from '../TodoList/TodoList'
import './Count.scss'

const mapStateToProps = ({ count }: { count: number }) => ({ count })

const mapDispatchToProps = { increaseCount, decreaseCount }

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

console.log(123)

const Count = (props: Props) => {
  const [test, setTest] = useState(0)
  useEffect((): any => {
    console.log(123123)
    return (p: any, s: any) => {
      console.log('return', p, s)
    }
  }, [])
  useEffect(() => {
    console.log('count', props.count)
  }, [props.count])
  console.log(props, 'rpos')

  useEffect((): any => {
    const a = setTimeout(() => {
      console.log(123)
    }, 0)
    console.log('test', test)
    return (p: any, s: any) => {
      clearTimeout(a)
      console.log('return', p, s)
    }
  }, [test])
  console.log(props)
  return (
    <div>
      <button onClick={() => props.increaseCount()}>click</button>
      <button onClick={() => setTest(test + 1)}>click 1</button>
      {console.log(test, 'render')}
      <ul className="li">{props.count}</ul>
      <ul className="li">hung</ul>
      <ul className="li">hung</ul>
      {test !== 5 && <TodoList className={'test'} test_={test}></TodoList>}
    </div>
  )
}

export default connector(Count)
