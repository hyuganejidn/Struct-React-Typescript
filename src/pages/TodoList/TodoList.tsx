import React, { useEffect } from 'react'
import './TodoList.scss'

function TodoList(props: any) {
  useEffect(() => {
    console.log(1, props)
  }, [props.test_])
  useEffect(() => {
    console.log(props.test_)
  }, [])
  return <div className="todo">{props.test_}</div>
}

export default TodoList
