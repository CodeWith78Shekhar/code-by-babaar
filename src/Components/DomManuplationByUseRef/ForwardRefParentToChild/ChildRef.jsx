import React ,{forwardRef}from 'react'

const ChildRef = (props,ref) => {
  return (
    <div>
      <input type="text" ref={ref}/>
    </div>
  )
}

export default forwardRef(ChildRef);
