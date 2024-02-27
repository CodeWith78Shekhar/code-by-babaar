import React,{useRef} from 'react'
import User from './ChildRef.jsx'
const Forward = () => {
  let inputRef = useRef(null)
  function updateInput(){
    inputRef.current.value = "1000"
    inputRef.current.focus()
    inputRef.current.style.color = "red"
  }
  return (
    <div>
      <h1>forwardRef in react</h1>
      <User ref={inputRef}/>
      <button onClick={updateInput}>update Inputbox</button>
    </div>
  )
}

export default Forward
