import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <> 
<Navbar expand="lg"  bg='black'>
      <Container>
      <Navbar.Brand>
          <Link style={{textDecoration:'none',color:'white'}} className='fw-bolder' to={'/'}>Serenity Estates</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Navbar.Brand>
          <Link style={{textDecoration:'none',color:'white',fontFamily:"Manrope"}}  to={'/property'}>Properties</Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link style={{textDecoration:'none',color:'white',fontFamily:"Manrope"}}  to={'/contact'}>Contact</Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link style={{textDecoration:'none',color:'white',fontFamily:"Manrope"}}  to={'/add'}>Add Property</Link>
        </Navbar.Brand>
        
      <Link to={'/login'}><button  style={{width:'100px',height:'40px',borderColor:'white',borderRadius:"10px",fontFamily:"Manrope"}}>Login</button></Link> 
      
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header