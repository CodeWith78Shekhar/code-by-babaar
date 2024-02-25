import React from 'react'

const use = (props) => {
  return (
    <div>
      <span style={{padding:'10px'}}>{props.elem.name}</span>
       <span style={{padding:'10px'}}>{props.elem.email}</span>
       <span style={{padding:'10px'}}>{props.elem.address}</span>
    </div>
  )
}

export default use
