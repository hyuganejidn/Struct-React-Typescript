import React, { ReactNode, createContext, useState, useEffect } from 'react'

interface Props {
  children: ReactNode
}

interface TestContextType {
  count: number
  setCount: (count: number) => void
}

export const TestContext = createContext<TestContextType | undefined>(undefined)

export const TestProvider = (props: Props) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(count)
  }, [count])

  return (
    <TestContext.Provider value={{ count, setCount }}>
      <button onClick={() => setCount(count + 1)}>set context </button>
      {props.children}
    </TestContext.Provider>
  )
}
