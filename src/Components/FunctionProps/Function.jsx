import React from 'react'

const Function = (props) => {
  return (
    <div>
      <h1>Function Prop</h1>
      <button onClick={props.data}>Function call</button>
    </div>
  )
}

export default Function
