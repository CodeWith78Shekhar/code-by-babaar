import React ,{useRef} from 'react'

const UseRef = () => {
    let inputRef = useRef(null)
    function clickHandler(){
       // console.log("hello")
       inputRef.current.value = "1000"
       inputRef.current.focus();
       inputRef.current.style.display = "none"
    
    }
  return (
    <div style={{display:'flex' , flexDirection:'column' , alignItems:'center'}}>
      <h1>useRef in react</h1>
      <input type="text" ref={inputRef}/>
      <button onClick={clickHandler}>Handle Input</button>
    </div>
  )
}

export default UseRef
