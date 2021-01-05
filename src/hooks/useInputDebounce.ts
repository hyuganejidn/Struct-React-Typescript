import { useState, useRef } from 'react'

export function useInputDebounce(handleChangeInput: (value: string) => void, defaultValue = '', wait = 500) {
  const timeout = useRef(null)
  const [value, setValue] = useState(defaultValue)

  const handleDebounce = (func: () => void, wait: number) => {
    if (timeout.current) clearTimeout(timeout.current)
    timeout.current = setTimeout(func, wait)
  }

  const onChange = (e: EventInput) => {
    const value = e.target.value
    if (defaultValue !== '') setValue(value)
    handleDebounce(() => handleChangeInput(value), wait)
  }

  if (defaultValue === '') return { onChange }
  return { value, onChange }
}
