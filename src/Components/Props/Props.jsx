import React from 'react'

const Props = (props) => {
  return (
    <div style={{backgroundColor:"skyblue",display:"flex", flexDirection:"column",alignItems:"center", marginTop:"5px"}}>
      <h1>hello {props.name}</h1>
      <h2>Email : {props.email}</h2>
      <h2>Address : {props.other.address}</h2>
      <h2>Mobile : {props.other.mobile}</h2>
    </div>
  )
}

export default Props
