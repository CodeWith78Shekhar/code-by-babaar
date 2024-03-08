import React, { useState } from 'react'

const PreviousState = () => {
    const[count , setcount] = useState(1)

    function ClickHandler(){
        // let random = Math.floor(Math.random()*10)
        // setcount((prev)=>{
        //     console.log(prev)
        //     return random
        // })

        for(let i=0 ; i<5 ; i++){
           // setcount(count+1) //by this method it is run only one time loop then it return so we will do
            setcount((pre)=>{
                return pre+1
            })
        }
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={ClickHandler}>click me to update counter</button>
    </div>
  )
}

export default PreviousState
