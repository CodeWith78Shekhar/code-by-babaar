import React from 'react'
import { CounterProvider } from './CreateContext'
import DisplayCounter from './DisplayCounter'
import CounterUpdate from './CounterUpdate'

const Parent = () => {
  return (
    <div>
      <h1>hello world</h1>
      <CounterProvider>
        <DisplayCounter/>
        <CounterUpdate/>
      </CounterProvider>
    </div>
  )
}

export default Parent
