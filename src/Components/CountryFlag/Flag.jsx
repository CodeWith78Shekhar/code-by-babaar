import { useState ,useEffect} from "react"
import React from "react"
import "./Flag.css"

const Flag = () => {
    const[name , setname] = useState("")
  const[country , setcountry] = useState("")
 const[data,setdata] = useState([])
 const[code , setcode] = useState("")
   function inpHandler(e){
       setname(e.target.value)
   }
   
 function valueHandler(){
      setcountry(name)

    //   for(let i in data){
    //     if(country === data[i]){
    //        setcode(i)
    //      console.log(i)
    //     }
    // }

 }

 useEffect(()=>{
    const data = async()=>{
        let data =await fetch("https://flagcdn.com/en/codes.json")
        let data2 =await data.json()
        setdata(data2)
        console.log(typeof data2)
    }

    data();
 },[])

 useEffect(()=>{
    for(let i in data){
             if(country === data[i]){
                setcode(i)
              console.log(i)
             }
         }
 },[country,data])

// 

// for(let i in data){
//     if(country === data[i]){
//        setcode(i)
//      console.log(i)
//     }
// }

 
 

  return (
    <div className='containerX' >
        <div className="box box1">
            <input type="text"  onChange={inpHandler}/>
            <button onClick={valueHandler}>Submit</button>
        </div>
        <div className="box box2">
            <img src={`https://flagcdn.com/224x168/${code}.png`} alt="img not found" />
        </div>
    </div>
  )
}

export default Flag
