
import React from 'react'
import Parent from './Redux/ContextApi/Parent'

const App = () => {
 
  return (
    <div>
    <Parent/>
    </div>
  )
}

export default App


// import Home from './RoutingComponent/BasicRoutin/Home.jsx'
// import About from './RoutingComponent/BasicRoutin/About.jsx'
// import Navbar from './RoutingComponent/BasicRoutin/Navbar.jsx'
// import Page404 from './RoutingComponent/BasicRoutin/Page404.jsx'
// import Params from './RoutingComponent/BasicRoutin/Params.jsx'
// import { BrowserRouter, Routes, Route, Link , Navigate } from 'react-router-dom'
// import Contact from './RoutingComponent/BasicRoutin/Contact.jsx'
// import Company from './RoutingComponent/BasicRoutin/Company.jsx'
// import Channel from './RoutingComponent/BasicRoutin/Channel.jsx'
// import Others from './RoutingComponent/BasicRoutin/Others.jsx'


// const App = () => {
//   return (
//     <>
//     {/* <Nav/>
//    <Top/> */}
   
// {/* <Slider/> */}

//     <BrowserRouter>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/about' element={<About/>}/>
//         {/* <Route path='/*' element={<Page404/>}/> */}
//         <Route path='/user/:name' element={<Params/>}/>
//         <Route path='/*' element={<Navigate to="/"/>}/> 
//         <Route path='/contact/' element={<Contact/>}>
//             <Route path='company' element={<Company/>}/>
//             <Route path='channel' element={<Channel/>}/>
//             <Route path='other' element={<Others/>}/>
//         </Route>
//         {/* //Params - useparams we use because we create one card and show multiple card by changing the path by name   */}
//         {/* //we use Navigate for unknown path and we show the default path */}
//         {/* //Navlink is basically use for give className to link for change style and when we click on link then active class activate in link so we change style of active link so we know abot the exact page */}
       
//       </Routes>
//     </BrowserRouter> 
//     </>
//   )
// }

// export default App









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

