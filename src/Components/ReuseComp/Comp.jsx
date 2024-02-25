import React from 'react'
import Use from './use'
const Comp = () => {
    const users = [
        { name:'Anil',email:'anil@test.com' ,address:"101"  },
        { name:'Rohan',email:'rohan@test.com' ,address:"101"  },
        { name:'sohan',email:'sohan@test.com' ,address:  "101" },

    ]

  return (
    <div>
    {
        users.map((data)=>
            <Use  elem = {data}></Use>
        )
    }
    
    </div>
  )
}

export default Comp
