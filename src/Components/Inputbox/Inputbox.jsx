import React, {useState} from 'react'

const Inputbox = () => {
   
  const[data , setdata] = useState(null)
  const[data2, setdata2] = useState(false)
  function getData(e){
       console.log(e.target.value)
       setdata(e.target.value)
       setdata2(false)
  }

function clickFunc(){
      setdata2(true)
        // setdata2(data)
}

  return (
    <div style={{display:'flex' , flexDirection:'column' ,alignItems:'center'}}>
      <h1>Hello {data}</h1>
      {
        data2 ?  <h1>Hello {data} </h1>:null
      }
     
      <input type="text" onChange={getData} />
      <button onClick={clickFunc}> print data</button>
      <button onClick={()=>setdata2(!data2)}>toggle</button>
    </div>
  )
}

export default Inputbox
