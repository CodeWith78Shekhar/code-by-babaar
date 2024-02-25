import React from 'react'
import Child from  './Child.jsx'
const Parent = () => {

    function Parent(count){
       count+=1;
       alert(count)
       console.log(count)
       
    }

  return (
    <div>
         <h1 >Hello from parent</h1>
         <Child data = {Parent}/>
    </div>
  )
}

export default Parent
