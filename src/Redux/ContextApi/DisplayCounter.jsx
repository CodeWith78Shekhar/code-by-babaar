import React from 'react'
import { UseCounter } from './CreateContext'

const DisplayCounter = () => {
    const {count} = UseCounter()
  return (
    <div>
      <h1>Counter display : {count}</h1>
    </div>
  )
}

export default DisplayCounter
