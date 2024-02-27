import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>I am from Home</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae excepturi quis qui laudantium reiciendis ad ex temporibus sunt ut culpa.</p>
      <Link to="/about">Go to About Page</Link>
    </div>
  )
}

export default Home
