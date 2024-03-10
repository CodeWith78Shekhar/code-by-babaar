import React from 'react'
import { UseCounter } from './CreateContext'

const CounterUpdate = () => {
    const {increment , decrement} = UseCounter()
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default CounterUpdate
