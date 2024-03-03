import React from 'react'
import { Link , Outlet } from 'react-router-dom'

const Contact = () => {
  //Nested routing
  
  return (
    <div>
      <h1>Contact Page</h1>
     <Link to='company'>Company Page</Link>
     <Link to='channel'>Channel Page</Link>
     <Link to='other'>other Page</Link>
    <Outlet/>
    </div>
  )
}

export default Contact
