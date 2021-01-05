import React, { useEffect, memo, useState, useRef } from 'react'
import { useInputDebounce } from '@/hooks/useInputDebounce'

interface Props {
  handleSearch: (value: string) => void
  test?: any
}

type Test = {
  func: () => void
  test: string
}

export const CountChild = memo(({ handleSearch }: Props) => {
  const inputDebounce = useInputDebounce(handleSearch)

  console.log('countChild')

  const testFunc = (test: Test) => {
    console.log(test)
  }

  // const handleSubmit = () => {
  //   if (inputDebounce.value) {
  //     console.log('has value')
  //   } else {
  //     console.log('no value')
  //   }
  // }

  return (
    <div>
      {/* <form onSubmit={handleSubmit}> */}
      <input type="text" name="search" id="search" {...inputDebounce} />
      {/* </form> */}
      <button onClick={() => testFunc({ test: 'hung', func: () => 123 })}>test func</button>
    </div>
  )
})

// export default memo(CountChild)
// const CountChilds = memo(CountChild)
// export CountChilds
