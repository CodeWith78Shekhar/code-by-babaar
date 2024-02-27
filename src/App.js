import React from 'react'
import Home from './RoutingComponent/BasicRoutin/Home.jsx'
import About from './RoutingComponent/BasicRoutin/About.jsx'
import Navbar from './RoutingComponent/BasicRoutin/Navbar.jsx'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
       
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App









//Props class
// import React ,{useState}from 'react'
// import Props from './Components/Props/Props.jsx'
// import './App.css'
// const App = () => {
//   const [data,setdata] = useState("Anil")
//   function update(){
//      setdata("Ashu")
//   }
//   return (
//    <>
//    <Props  name={data} email={"789@yho"} other = {{address:"jaipur",mobile:"111"}}></Props>
//    <Props name={"Shekhar"} email={"989@yho"} other = {{address:"delhi",mobile:"000"}}></Props>
//    <button onClick={update}>Update first</button>
//    </>
//   )
// }

// export default App



//class components in react
// import React,{Component} from 'react'

// class App extends Component {

//     constructor(){
//       super();
//       this.state = {
//          data:1
//       }
//     }

//     apple(){
//         this.setState({data:this.state.data+1})
//     }
//   render(){
//     return (
//       <div>
//         <h1>{this.state.data}</h1>
//         <button onClick={()=>this.apple()}>upadate data</button>
//       </div>
//     )
//   }
 
// }

// export default App

