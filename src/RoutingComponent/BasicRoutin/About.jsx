import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>I am from About</h1>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum repellat ab modi earum ipsa pariatur quibusdam assumenda nostrum rerum fugiat?</p>
     <Link to="/">Go to Home Page</Link>
    </div>
  )
}

export default About
