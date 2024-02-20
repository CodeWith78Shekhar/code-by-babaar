import React from 'react'
import Table from 'react-bootstrap/Table';
const Map = () => {
    const students = [
        {name:'Anil',email:'@anil.com',contact:888},
        {name:'ram',email:'@ram.com',contact:778},
        {name:'krishna',email:'@krishna.com',contact:688}

    ]
  return (
    <div>
      <h1>Map function in jsx</h1>
      <Table striped border={"1"} hover>
      <tbody>
      <tr >
        <td>Name</td>
        <td>Email</td>
        <td>Contact</td>
       
      </tr>
      {
        students.map((data)=>(
            <tr>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.contact}</td>
       
      </tr>
         ) )
      }
      </tbody>
      </Table>
    </div>
  )
}

export default Map
