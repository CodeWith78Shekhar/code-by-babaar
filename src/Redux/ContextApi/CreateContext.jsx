import React, { createContext, useState } from "react";
import { useContext } from "react";

 const counterContext = createContext();
 export const UseCounter = ()=> useContext(counterContext);

 export const CounterProvider = ({children})=>{
     const[count , setCount] = useState(0)

     let increment = ()=>{
          setCount((pre)=>{
            return pre+1
          })
     }
     let decrement = ()=>{
          setCount((pre)=>{
            return pre-1
          })
     }

     return <counterContext.Provider  value={{count , increment , decrement }}>
        {children}
     </counterContext.Provider>

 }