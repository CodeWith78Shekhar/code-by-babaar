import React ,{useEffect , useRef} from 'react'

const PreviousProps = (props) => {
    const lastVal = useRef();
    useEffect(()=>{
        lastVal.current = props.count
    })
    const previousProps = lastVal.current

    //here useeffect is calling before update the state
  return (
    <div>
      <h1>current value : {props.count}</h1>
      <h1>Previous value : {previousProps}</h1>
      <h1>Difference : {props.count - previousProps}</h1>
    </div>
  )
}

export default PreviousProps
