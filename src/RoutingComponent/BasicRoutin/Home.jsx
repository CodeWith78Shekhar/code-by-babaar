import React from 'react'
import { Link , useNavigate} from 'react-router-dom'

const Home = () => {

  //button k click p navigate krne k liye useNavigate hook ka use krte h
  const navigate = useNavigate();

  function NavigateFunc(url){
    navigate(url)
  }
  return (
    <div>
      <h1>I am from Home</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae excepturi quis qui laudantium reiciendis ad ex temporibus sunt ut culpa.</p>
      <Link to="/about">Go to About Page</Link>
      <br />
      <button onClick={()=> NavigateFunc('/about')}>go to about Page</button>
      <button onClick={()=> NavigateFunc('/user/:name')}>go to params</button>
    </div>
  )
}

export default Home
