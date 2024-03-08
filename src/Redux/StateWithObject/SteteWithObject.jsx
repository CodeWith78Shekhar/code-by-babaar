import React, { useState } from 'react'

const SteteWithObject = () => {
    const[data , setdata] = useState({name : "Shekhar" , age: "24"})
  return (
    <div>
      <h1>State With object</h1>
      <input type="text" placeholder=' name here' value={data.name}  onChange={(e)=>setdata({...data,name : e.target.value}) }/>
      <input type="Number" placeholder=' age here' value={data.age}  onChange={(e)=>setdata({ ...data ,age : e.target.value}) }/>

      <h1>{data.name}</h1>
      <h1>{data.age}</h1>
    </div>
  )
}

export default SteteWithObject
