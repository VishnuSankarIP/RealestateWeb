import React from 'react'
import logo from '../src/assets/reallogo.png'
import Header from './Header'
function View() {
  return (
   <>
   <Header/>
   <div className="mainDiv me-5">
    <div className="row">
      <div className="col-lg-6">
    <img src={logo}></img>
      </div>
      <div className="col-lg-6">
        <div className="d-flex justify-content-between">
        <h2 className='mt-5'>Kerala Homez</h2>
        <h2 className='mt-5 me-5'>$4000</h2>
       
        </div>
        <div className="detailsDiv mt-3 d-flex justify-content-evenly">
          <p><i class="fa-solid fa-door-open me-2"></i>4 room</p>
          <p><i class="fa-solid fa-car me-2"></i>2 Parking</p>
          <p><i class="fa-solid fa-shower me-2"></i>4 Bathrooms</p>
        </div>


        <div className="desc me-5">
        <p className='mt-2'>Indulge in serenity at our peaceful haven, where modern comforts meet tranquil surroundings for a restful stay.</p>
        </div>

        <div className="btnDiv me-5" >
          <button className='w-100 mt-3 ' style={{color:'white',backgroundColor:'#2b2b2b',height:'50px',borderRadius:'10px'}}>Book your visit</button>
        </div>
        
    

      </div>
    </div>
   </div>
   </>
  )
}

export default View