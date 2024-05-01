import React, { useEffect, useState } from 'react'
import logo from '../src/assets/userlogo.png';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Profile() {
  const navigate=useNavigate()
  const[displayName,setDisplayName]=useState("")

  useEffect(()=>{
    if(sessionStorage.getItem("existingUser"))
    {
        const {email}=JSON.parse(sessionStorage.getItem("existingUser"))
        setDisplayName(email)
    }
    else{
        setDisplayName("")
    }
  },[])
  const handleBack=()=>{
    navigate('/property')
  }
  return (
    <>
   <div className="mainDiv" style={{ height: '100vh' }}>
        <div className="row">
          <div className="col-lg-4">
            <div className="div" style={{ backgroundColor: '#7166F0', height: '100vh' }}>
              <img src={logo} width="300px" alt="Admin Logo" />
              <h1 className='text-center'>User Profile</h1>
              <div className="div text-center"> <Button onClick={handleBack} >Back</Button></div>
             
             
            
              <div className="div text-center">
              
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="div text-center">
            <h1 className='d-flex justify-content-center mt-5 mb-5'>Welcome User</h1>
            <h2><span style={{color:'#7166F0'}}>UserId:</span>{displayName?.split(" ")[0]}</h2>
            </div>
            
            
          </div>
        </div>
       
      </div>
    </>
  )
}

export default Profile