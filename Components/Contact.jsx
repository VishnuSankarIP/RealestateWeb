import React from 'react';
import Header from './Header';
import { Col, FloatingLabel, Row, Form } from 'react-bootstrap';

function Contact() {
  return (
    <>
      <Header />
      <div className="mainDiv d-flex justify-content-center" style={{ height: '80vh' }}>
        <div className="container text-center mt-5 w-50">
          <h2>Connect With Our Team</h2>
          <h6>Fill the form so that our team can reach out to you</h6>

          <div className="justify-content-center ">
          <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Name</label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Email address</label>
      </Form.Floating>
      <FloatingLabel controlId="floatingTextarea2" label="Comments" >
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <div className="btnDiv me-5" >
          <button className='w-100 mt-3 ' style={{color:'white',backgroundColor:'#2b2b2b',height:'50px',borderRadius:'10px'}}>Submit</button>
        </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
