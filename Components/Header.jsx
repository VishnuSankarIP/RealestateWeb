// import React from 'react'
// import { Dropdown } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';

// function Header({insideDashboard}) {
//   const [loginStatus, setLoginStatus] = useState(false)
//   useEffect(() => {

    
//     if (sessionStorage.getItem("token")) {
//       setLoginStatus(true)
//     }
//     else {
//       setLoginStatus(false)
//     }
//   }, [])
//   return (
//     <> 
// <Navbar expand="lg"  bg='black'>
//       <Container>
//       <Navbar.Brand>
//           <Link style={{textDecoration:'none',color:'white'}} className='fw-bolder' to={'/'}>Serenity Estates</Link>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//           <Navbar.Brand>
//           <Link style={{textDecoration:'none',color:'white',fontFamily:"Manrope"}}  to={'/property'}>Properties</Link>
//         </Navbar.Brand>
//         <Navbar.Brand>
//           <Link style={{textDecoration:'none',color:'white',fontFamily:"Manrope"}}  to={'/contact'}>Contact</Link>
//         </Navbar.Brand>
//         <Navbar.Brand>
//           <Link style={{textDecoration:'none',color:'white',fontFamily:"Manrope"}}  to={'/add'}>Add Property</Link>
//         </Navbar.Brand>
//         {
//           insideDashboard?
//           <Navbar.Brand>
//           {/* <Link style={{textDecoration:'none',color:'white',fontFamily:"Manrope"}}  to={'/add'}><i class="fa-solid fa-bars"></i></Link> */}
//           <Dropdown className="d-inline mx-2" autoClose="outside">
//         <Dropdown.Toggle id="dropdown-autoclose-outside" style={{backgroundColor:'black'}}>
//         <i class="fa-solid fa-bars"></i>
//         </Dropdown.Toggle>
//         <Dropdown.Menu>
//         <Link to={'/profile'} style={{textDecoration:'none'}}> <Dropdown.Item >Profile</Dropdown.Item></Link> 
//           <Dropdown.Item href="#">My Listing</Dropdown.Item>
          
//         </Dropdown.Menu>
//       </Dropdown>
//         </Navbar.Brand>
//           :
//           <div></div>
//         }
        
    
//       {
//         insideDashboard?
//         <Link to={'/login'}><button  style={{width:'100px',height:'40px',borderColor:'white',borderRadius:"10px",fontFamily:"Manrope"}}>Logout</button></Link>
//         :
//         <Link to={'/login'}><button  style={{width:'100px',height:'40px',borderColor:'white',borderRadius:"10px",fontFamily:"Manrope"}}>Login</button></Link> 
//       }
      
            
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     </>
//   )
// }

// export default Header

import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Header({ insideDashboard }) {
  const navigate=useNavigate()
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    // Check login status when the component mounts
    if (sessionStorage.getItem("token")) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, []);
  const handleLogout=()=>{
    sessionStorage.clear()
    navigate('/')
  }

  return (
    <>
      <Navbar expand="lg" style={{backgroundColor:'#7166F0'}}>
        <Container>
          <Navbar.Brand>
            <Link style={{ textDecoration: 'none', color: 'white' }} className='fw-bolder' to={'/'}>
              Serenity Estates
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {loginStatus && ( // Render the links only if user is logged in
                <>
                  <Navbar.Brand>
                    <Link style={{ textDecoration: 'none', color: 'white', fontFamily: "Manrope" }} to={'/property'}>
                      Properties
                    </Link>
                  </Navbar.Brand>
                  <Navbar.Brand>
                    <Link style={{ textDecoration: 'none', color: 'white', fontFamily: "Manrope" }} to={'/contact'}>
                      Contact
                    </Link>
                  </Navbar.Brand>
                  <Navbar.Brand>
                    <Link style={{ textDecoration: 'none', color: 'white', fontFamily: "Manrope" }} to={'/add'}>
                      Add Property
                    </Link>
                  </Navbar.Brand>
                </>
              )}
              {insideDashboard &&
                <Navbar.Brand>
                  <Dropdown className="d-inline mx-2" autoClose="outside">
                    <Dropdown.Toggle id="dropdown-autoclose-outside" style={{ backgroundColor: '#7166F0' }}>
                      <i class="fa-solid fa-bars"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Link to={'/profile'} style={{ textDecoration: 'none' }}>
                      <h5>Profile</h5> 
                      </Link>
                      
                    <Link to={'/my-listing'} style={{ textDecoration: 'none' }}><h5>My Listing</h5></Link> 
                    </Dropdown.Menu>
                  </Dropdown>
                </Navbar.Brand>
              }
              {loginStatus ? ( // Render logout button if user is logged in, otherwise render login button
                <Link to={'/'}>
                  <button onClick={handleLogout} style={{ width: '100px', height: '40px', borderColor: 'white', borderRadius: "10px", fontFamily: "Manrope" }}>
                    Logout
                  </button>
                </Link>
              ) : (
                <Link to={'/login'}>
                  <button style={{ width: '150px', height: '40px', borderColor: 'white', borderRadius: "10px", fontFamily: "Manrope",color:"#7166F0" }}>
                    <h5 style={{fontWeight:'500'}}>Login</h5>
                  </button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;
