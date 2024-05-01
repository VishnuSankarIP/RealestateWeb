import React, { useEffect, useState } from 'react';
import logo from '../src/assets/adminlogo.png';
import { getAllCommentsAPI, removeCommentAPI } from '../Services/allAPI';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Admin() {
  
  const navigate=useNavigate()
  const [allComments, setAllComments] = useState([]);
  
  useEffect(() => {
    getAllComments();
  }, [allComments]);

  const getAllComments = async () => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    };
    try {
      const result = await getAllCommentsAPI(reqHeader);
      console.log(result);
      if (result.status === 200) {
        setAllComments(result.data);
      }
    }
    catch (err) {
      console.error("Error fetching comments:", err);
      // Handle the error, display a message, or do something else as needed
    }
  };
  const handleLogout=()=>{
    sessionStorage.clear()
    setTimeout(() => {
      navigate('/')
    }, 2000)
    toast.error("Logout Successfully")
    
  }


  // const handleDelete=async(commentId)=>{
  //   const token=sessionStorage.getItem("token")
  //   if(token)
  //   {
  //     const reqHeader={
  //       "Context-Type":"application/json",
  //       "Authorization":`Bearer ${token}`
  //     }
  //     // api call
  //     const result=await removeCommentAPI(commentId,reqHeader)
  //     if(result.status==200)
  //     {
  //       getAllComments()
  //     }
  //     else{
  //       console.log(result);
  //     }

  //   }
  // }
  const handleDelete = async (cid) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      };
      try {
        const result = await removeCommentAPI(cid, reqHeader);
        if (result.status === 200) {
          getAllComments();
        } else {
          console.error("Error deleting comment:", result.statusText);
        }
      } catch (err) {
        console.error("Error deleting comment:", err);
      }
    }
  };

  return (
    <>
      <div className="mainDiv" style={{ height: '100vh' }}>
        <div className="row">
          <div className="col-lg-4">
            <div className="div" style={{ backgroundColor: '#7166F0', height: '100vh' }}>
              <img src={logo} width="300px" alt="Admin Logo" />
              <h1 className='text-center'>Welcome Admin</h1>
              <div className="div text-center">
                <Button onClick={handleLogout}>Logout</Button>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <h1 className='d-flex justify-content-center mt-5'>Admin Dashboard</h1>
            <div className="container">
              <h2>Contact Details</h2>
              {allComments?.length > 0 ? (
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>userId</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Comments</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allComments.map(comm => (
                      <tr key={comm.id}>
                        <td>{comm._id}</td>
                        <td>{comm.name}</td>
                        <td>{comm.email}</td>
                        <td>{comm.comments}</td>
                        <td> <i onClick={() => handleDelete(comm._id)}  class="fa-solid fa-trash"></i></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="fw-bolder">No messages yet!!!</div>
              )}
            </div>
          </div>
        </div>
        <ToastContainer position='top-center' theme='colored' autoClose={3000} />
      </div>
    </>
  );
}

export default Admin;
