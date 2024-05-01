import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <>
   <div style={{height:'300px',backgroundColor:"#7166F0"}}  className='mt-5 w-100'>
       <div className="footer-content d-flex justify-content-between mt-5">
        <div style={{width:'400px'}} className="media ms-5 mt-5">
            <h5 className='d-flex' style={{color:'white'}}> Serenity Estates</h5>
            <p style={{textAlign:'justify',color:'white'}}>Designed and build with all the love in the world by the Bootstrap team with the help of our components</p>
            <span style={{color:'white'}}>Code licensed MIT,docs CC BY 3.0.</span>
            
        </div>
        <div className="links d-flex flex-column mt-5">
            <h5 className='d-flex' style={{color:'white'}}>Links</h5>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Profile</Link>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Contact</Link>
        </div>
        <div className="guides d-flex flex-column mt-5">
            <h5 style={{color:'white'}}>Guides</h5>
            <a href='https://react.dev/'  target='_blank' style={{textDecoration:'none',color:'white'}}>React JS</a>
            <a href='https://reactrouter.com/en/main'  target='_blank' style={{textDecoration:'none',color:'white'}}>React Routing</a>
            <a href='https://react-bootstrap.github.io/'  target='_blank' style={{textDecoration:'none',color:'white'}}>React Bootstrap</a>


        </div>
        <div className="contact me-5 mt-5">
            <h5 style={{color:'white'}}>Contacts Us</h5>
            <div className="d-flex">
                <input className="form-control me-1" type='text' placeholder='Enter your Mail'></input>
                <button className='btn ' style={{color:'white'}}><i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="icons d-flex justify-content-between mt-3">
            <a href='https://react.dev/'  target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter"></i></a>
            <a href='https://react.dev/'  target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram"></i></a>
            <a href='https://react.dev/'  target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook"></i></a>
            <a href='https://react.dev/'  target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin"></i></a>
          
            <a href='https://react.dev/'  target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-phone"></i></a>
            </div>
        </div>
       </div>
       <p className='text-center mt-5' style={{color:'white'}}>Copyright &copy; 2024  Serenity Estates.Bulid with React</p>
        </div>
   </>
  )
}

export default Footer