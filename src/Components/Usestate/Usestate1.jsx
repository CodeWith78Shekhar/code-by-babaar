import React, {useState} from 'react'
import './Usestate.css'
const Usestate1 = () => {
    const [data, setdata] = useState(0)
  
    function setCount(){
          setdata(data+1)
    }
  
    return (
      <div className='app'>
         <h1>{data}</h1>
         <button onClick={setCount}>click me</button>
      </div>
    )
}

export default Usestate1
