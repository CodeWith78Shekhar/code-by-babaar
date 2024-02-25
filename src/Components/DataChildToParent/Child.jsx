import React from 'react'

const Child = (props) => {
    let count = 1;
      
  return (
    <div>
      <h1>Hello from child</h1>
      <button onClick={()=>(props.data(count))}>Click me</button>
    </div>
  )
}

export default Child
