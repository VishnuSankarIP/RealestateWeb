import React, { useState } from 'react';
import Header from './Header';
import { Col, FloatingLabel, Row, Form } from 'react-bootstrap';
import { contactAPI } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const[commentDetails,setCommentDetails]=useState({name:"",email:"",comments:""})
  console.log(commentDetails);

  const handleAdd = async () => {
    const { name, email, comments } = commentDetails;
    if (!name || !email || !comments) {
      toast.warning("Please fill out all fields.");
    } else {
      const reqBody = {
        name,
        email,
        comments
      };
  
      const token = sessionStorage.getItem("token");
      if (token) {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        };
        try {
          const result = await contactAPI(reqBody, reqHeader);
          console.log(result);
          if (result.status === 200) {
            toast.success(`message sent successfully.`);
            setCommentDetails({
              name: "",
              email: "",
              comments: ""
            });
          } else {
            alert(result.response.data);
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
  



  return (
    <>
      <Header insideDashboard={true} />
      <div className="mainDiv d-flex justify-content-center" style={{ height: '100vh' }}>
        <div className="container text-center mt-5 w-50">
          <h2>Connect With Our Team</h2>
          <h6>Fill the form so that our team can reach out to you</h6>

          <div className="justify-content-center ">
          <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="text"
          placeholder="name@example.com"
          value={commentDetails.name}
          onChange={(e)=>setCommentDetails({...commentDetails,name:e.target.value})}
        />
        <label htmlFor="floatingInputCustom">Name</label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingPasswordCustom"
          type="text"
          placeholder="Password"
          value={commentDetails.email}
          onChange={(e)=>setCommentDetails({...commentDetails,email:e.target.value})}

        />
        <label htmlFor="floatingPasswordCustom">Email address</label>
      </Form.Floating>
      <FloatingLabel controlId="floatingTextarea2" label="Comments" >
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px'
          }}
          value={commentDetails.comments}
          onChange={(e)=>setCommentDetails({...commentDetails,comments:e.target.value})}
        />
      </FloatingLabel>
      <div className="btnDiv me-5" >
          <button onClick={handleAdd} className='w-100 mt-3 ' style={{color:'white',backgroundColor:'#2b2b2b',height:'50px',borderRadius:'10px'}}>Submit</button>
        </div>
          </div>
        </div>
        <ToastContainer position='top-center' theme='colored' autoClose={3000} />
      </div>
    </>
  );
}

export default Contact;
