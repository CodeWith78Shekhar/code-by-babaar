import React, { useEffect,useState } from 'react'

const UseEffect = () => {
const [data , setdata] = useState(10)
const [count , setcount] = useState(20)
  useEffect(()=>{
    console.warn("useEffect called")
  },[count])


  return (
    <div>
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button onClick={()=>setdata(data+1)}>Update data</button>
      <button onClick={()=>setcount(count+1)}>Update count</button>
    </div>
  )
}

export default UseEffect
