import React, {useState} from 'react'

const FormBasic = () => {

   const[login , setlogin] = useState("")
   const[pass , setpass] = useState("")
   const[err , seterr] = useState(false)
   const[passerr , setpasserr] = useState(false)


    function loginHandle(e){
        if(login.length <=3 || pass.length <=3){
            alert("put correct value")
        }else{
            alert("all good")
        }
        

        
        e.preventDefault()
    }

    function userHandler(e){
        let item = e.target.value;
        if(item.length<=3){
           seterr(true)
            // console.log("not valid")
        }else{
            seterr(false)
            // console.log("valid")
        }
        setlogin(item)
        //  console.log(e.target.value.length)
    }
    function passHandler(e){
        let item = e.target.value;
        if(item.length<=3){
           setpasserr(true)
            // console.log("not valid")
        }else{
            setpasserr(false)
            // console.log("valid")
        }
        setpass(item)
        //  console.log(e.target.value.length)
    }

  
  return (
    <div style={{display:'flex' , flexDirection:'column' , alignItems:'center'}}>
      <h1>Form Validation</h1> 
      <form onSubmit={loginHandle}>
        <input type="text" onChange={userHandler} placeholder='Enter user Id' /> { err ? <span>not valid user</span>:null}
        <br /><br />
        <input type="text" onChange={passHandler} placeholder='Enter user Password' /> { passerr ? <span>not valid user</span>:null}
        <br /><br />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default FormBasic
