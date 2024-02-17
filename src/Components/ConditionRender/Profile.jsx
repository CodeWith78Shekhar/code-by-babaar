import React, {useState} from 'react'

const Profile = () => {
     const[login, setlogin] = useState(1)
  
  return (
    <div>
     {
       
        login==1?  <h1>Profile 1</h1>: login ==2? <h1>Profile 2</h1>:<h1>profile guest</h1>
     } 
    </div>
    
  )
}

export default Profile
