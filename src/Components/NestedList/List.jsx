import React from 'react'
import {Table} from 'react-bootstrap'
const List = () => {
   
    const users = [
        { name:'Anil',email:'anil@test.com' ,address: [
            {Hn:"10",city:"Noida",country:"India"},
            {Hn:"20",city:"Delhi",country:"India"},
            {Hn:"30",city:"Gurgaon",country:"India"},
            {Hn:"40",city:"Banglore",country:"India"},
        ]  },
        { name:'Rohan',email:'rohan@test.com' ,address: [
            {Hn:"10",city:"Noida",country:"India"},
            {Hn:"30",city:"Delhi",country:"India"},
            {Hn:"40",city:"Noida",country:"India"},
            {Hn:"80",city:"Banglore",country:"India"},
        ]  },
        { name:'sohan',email:'sohan@test.com' ,address: [
            {Hn:"90",city:"Noida",country:"India"},
            {Hn:"100",city:"Delhi",country:"India"},
            {Hn:"109",city:"Gurgaon",country:"India"},
            {Hn:"107",city:"Banglore",country:"India"},
        ]  },

    ]


  return (
    <div>
       <h1>List with nested Array</h1>
       <Table variant='dark'>
        <tbody>
            <tr>
                <td>S.N.</td>
                <td>Name</td>
                <td>Email</td>
                <td>Adress</td>
               
            </tr>
           {
            users.map((data,idx)=>(
               
                <tr key={idx}>
                <td>{idx+1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.address.map((data2,idx)=>(
                    <Table>
                    <tbody>
                    <tr>
                <td>{data2.Hn}</td>
                <td>{data2.city}</td>
                <td>{data2.country}</td>
               
            </tr>
            </tbody>
            </Table>
                ))}</td>
               
            </tr>
            ))
           }
        </tbody>
       </Table>
    </div>
  )
}

export default List
