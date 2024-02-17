import React, {useState} from 'react'

const Form = () => {

   
    const[data,setdata] = useState("")
    const[interest , setinterest]= useState("")
    const[tnc , settnc] = useState(false)

    function getData(e){
        e.preventDefault()
        console.log(data,interest,tnc)
       
    }


  return (
    <div style={{display:'flex' , flexDirection:'column' , alignItems:'center'}}>
       <h1>Form Input</h1>
       <form onSubmit={getData}>
        <input type="text" onChange={(e)=>setdata(e.target.value)} placeholder='enter name' /> <br/><br/>
        <select name="" id="" onChange={(e)=>setinterest(e.target.value)}>
            <option value="">Select option</option>
            <option value="Marvel">Marvel</option>
            <option value="Dc">DC</option>
        </select> <br /> <br />
        <input type="checkbox" onChange={(e)=>settnc(e.target.checked)} /> <span>Accept Terms and condition</span> <br /><br />
        <button type='submit'>Submit</button>
       </form>
    </div>
  )
}

export default Form
