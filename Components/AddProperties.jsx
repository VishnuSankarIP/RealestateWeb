import React from 'react'
import Header from './Header'

import { FloatingLabel, Form } from 'react-bootstrap'

function AddProperties() {
  return (
    <>
     <Header/>
    <div className="mainDiv d-flex justify-content-center" style={{ height: '80vh' }}>
    <div className="justify-content-center w-75 mt-5 ">
    <label className='text-center d-flex justify-content-center'>
              
                <img src='https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Logo-PNG-Photos.png' width={'200px'} className='img-fluid'></img>
              </label>
          <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Title</label>
      </Form.Floating >
      <FloatingLabel controlId="floatingTextarea2" label="Description" className="mb-3" >
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Price</label>
      </Form.Floating>
      
      <div className="btnDiv me-5" >
          <button className='w-100 mt-3 ' style={{color:'white',backgroundColor:'#2b2b2b',height:'50px',borderRadius:'10px'}}>Add</button>
        </div>
          </div>
    </div>
    </>
  )
}

export default AddProperties