import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
       <Link to="/about">About</Link>
    <br/>
    <Link to="/">Home</Link>
    <br />
    <Link to="/*">Contact</Link>
    </div>
  )
}

export default Navbar