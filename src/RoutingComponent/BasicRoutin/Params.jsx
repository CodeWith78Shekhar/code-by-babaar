import React from 'react'
import { useParams } from 'react-router-dom'
const Params = () => {
    const params = useParams()
    const {name} = params;
  return (
    <div>
      <h1>hello {name}</h1>
    </div>
  )
}

export default Params
