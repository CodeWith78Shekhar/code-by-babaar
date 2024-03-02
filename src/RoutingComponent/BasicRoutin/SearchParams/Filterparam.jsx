import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Searchparams from './Searchparams';
const filter = () => {
    const[SearchParams,setSearchParams] = useSearchParams();
    const age = SearchParams.get('age')
  return (
    <div>
      <h1>Filter Page</h1>
      <h1>age : {age}</h1>
    </div>
  )
}

export default filter
