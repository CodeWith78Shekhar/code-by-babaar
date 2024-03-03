import React from 'react'
import {Link, NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>

       {/* <Link to="/about">About</Link>
    <br/> */}
    {/* <Link to="/">Home</Link>
    <br /> */}
    {/* <Link to="/*">Contact</Link>
    <br /> */}
    {/* <Link to="/uer/peter">Peter</Link> <br /> */}
    {/* <Link to="/user/anil">Anil</Link>  <br />
    <Link to="/user/ashu">Ashu</Link> */}
   
    <ul className='Navbar'>
      <li><NavLink className="Nav-link" to="/">Home</NavLink></li>
      <li><NavLink className="Nav-link" to="/about">about</NavLink></li>
      <li><NavLink className="Nav-link" to="/contact">Contact</NavLink></li>
    </ul>

  <NavLink to="/uer/peter">Peter</NavLink> <br /> 
     <NavLink to="/user/anil">Anil</NavLink>  <br />
    </div>
  )
}

export default Navbar
