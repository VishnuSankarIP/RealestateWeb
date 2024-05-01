import React, { useState } from 'react'
import { Card, Carousel, Modal } from 'react-bootstrap'
import img5 from '../src/assets/pic.png'
import { Link, useNavigate } from 'react-router-dom'
import { SERVER_URL } from '../Services/serverUrl'
import logo from '../src/assets/reallogo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function PropertyCard({displayData}) {
 const navigate=useNavigate()
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
 
 console.log(email);


  const handleClose = () => {

    setShow(false);
    setShowInputField(false);
  }
  const handleShow = () => setShow(true);
  const [showInputField, setShowInputField] = useState(false);

  const handleBookVisit = () => {
    setShowInputField(true);
  };

  const handleBook = () => {
    if (email === '' || date === '') {
        toast.warning('Please fill out the form completely.');
    } else {
        handleClose();
        setEmail(''); 
        setDate('');
        setTimeout(() => {
          toast.success("Book successfully");
        }, 2000)
       
    }
};

  return (
   <>

{/* <Link  to={`/view/${displayData?._id}`} style={{ textDecoration: 'none' }}> */}
      <Card onClick={handleShow} style={{width:'400px',height:'400px'}} className='ms-3'>
        <Carousel>
          <Carousel.Item>
            <img style={{height:'250px'}}
              className="d-block w-100"
              src={`${SERVER_URL}/uploads/${displayData?.propertyImage[0]}`}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img style={{height:'250px'}}
              className="d-block w-100"
              src={`${SERVER_URL}/uploads/${displayData?.propertyImage[1]}`}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          <div className="div d-flex justify-content-between" >
          <Card.Title><h2 style={{fontFamily: "Manrope",color:'#7166F0'}}>{displayData?.title}</h2></Card.Title>
          <Card.Text>
           <h3 style={{fontFamily: "Manrope"}}>${displayData?.price}</h3> 
          </Card.Text>
          </div>
          
          
          <Card.Text>
           <p style={{fontFamily: "Manrope"}}>{displayData?.description} </p> 
          </Card.Text>
         
        </Card.Body>
      </Card>
    {/* </Link> */}

    <Modal size='lg'  show={show} onHide={handleClose} >
        <Modal.Header closeButton>
         </Modal.Header>
        <Modal.Body>
        <div className="mainDiv me-5">
  
     <div className="div text-center">
     <img  style={{width:'500px'}}  src={`${SERVER_URL}/uploads/${displayData?.propertyImage[0]}`}></img>
     </div>
    
     
    <div className="div">
    <div className="d-flex justify-content-between">
        <h2 className='mt-5'>{displayData?.title}</h2>
        <h2 className='mt-5 me-5'>${displayData?.price}</h2>
       
        </div>
        <div className="detailsDiv mt-3 d-flex justify-content-evenly">
          <p><i class="fa-solid fa-door-open me-2"></i>{displayData?.room}</p>
          <p><i class="fa-solid fa-car me-2"></i>{displayData?.parking}</p>
          <p><i class="fa-solid fa-shower me-2"></i>{displayData?.bathroom}</p>
        </div>


        <div className="desc ms-2 me-2">
        <p className='mt-2'><i class="fa-solid fa-location-dot me-2"></i>{displayData?.address}</p>
        </div>

        <div className="btnDiv text-center" >
          <button onClick={handleBookVisit} className='w-100 mt-3 ' style={{color:'white',backgroundColor:'#2b2b2b',height:'50px',borderRadius:'10px'}}>Book your visit</button>
        </div>
        
    </div>
        
    

     
  
   </div>

   {showInputField && (
             <div className="input-container d-flex justify-content-center mt-5 ">
             <input 
                 style={{width:'150px'}} 
                 className='form-control' 
                 type="text" 
                 placeholder="Enter your email" 
                 onChange={(e)=>setEmail(e.target.value)} 
             />
             <br /> {/* Assuming you want to separate inputs */}
             <input 
                 type='date'
                 onChange={(e)=>setDate(e.target.value)} 
             />
             <br /> {/* Assuming you want to separate inputs */}
             <button 
                 onClick={handleBook}
                 style={{
                     backgroundColor:'#7166F0',
                     border:'none',
                     width:'150px'
                 }} 
             >
                 Book
             </button>
         </div>
        
          )}
          
        </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
              
              
   </>
  )
}

export default PropertyCard

// import React, { useState, useContext } from 'react';
// import { Card, Carousel, Modal } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import { SERVER_URL } from '../Services/serverUrl';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import AuthContext, { AuthAPI } from '../context/AuthContext';


// function PropertyCard({ displayData }) {
//     const navigate = useNavigate();
//     const { isAuthenticated, userId } = useContext(AuthAPI); // Get authentication state and userId from context
//     const [show, setShow] = useState(false);
//     const [email, setEmail] = useState('');
//     const [date, setDate] = useState('');
//     const [showInputField, setShowInputField] = useState(false);

//     const handleShow = () => setShow(true);
//     const handleClose = () => {
//         setShow(false);
//         setShowInputField(false);
//     };

//     const handleBookVisit = () => {
//       const token = sessionStorage.getItem('token');
//       const tokenId = sessionStorage.getItem('_id');
  
//       if (token) {
//           if (displayData.userId == tokenId) {
//               toast.warning("You can't book a visit for your own property.");
//           } else {
//               setShowInputField(true);
//           }
//       } else {
//           navigate('/property'); // Redirect to the property listing page if the user is not logged in
//       }
//   };
  
  

//     const handleBook = () => {
//         if (email === '' || date === '') {
//             toast.warning('Please fill out the form completely.');
//         } else {
//             handleClose();
//             setEmail('');
//             setDate('');
//             setTimeout(() => {
//                 toast.success('Book successfully');
//             }, 2000);
//         }
//     };

//     return (
//         <>
//             <Card onClick={handleShow} style={{ width: '400px', height: '400px' }} className="ms-3">
//                 <Carousel>
//                     <Carousel.Item>
//                         <img style={{ height: '250px' }} className="d-block w-100" src={`${SERVER_URL}/uploads/${displayData?.propertyImage[0]}`} alt="First slide" />
//                     </Carousel.Item>
//                     <Carousel.Item>
//                         <img style={{ height: '250px' }} className="d-block w-100" src={`${SERVER_URL}/uploads/${displayData?.propertyImage[1]}`} alt="Second slide" />
//                     </Carousel.Item>
//                 </Carousel>
//                 <Card.Body>
//                     <div className="div d-flex justify-content-between">
//                         <Card.Title>
//                             <h2 style={{ fontFamily: 'Manrope', color: '#7166F0' }}>{displayData?.title}</h2>
//                         </Card.Title>
//                         <Card.Text>
//                             <h3 style={{ fontFamily: 'Manrope' }}>${displayData?.price}</h3>
//                         </Card.Text>
//                     </div>
//                     <Card.Text>
//                         <p style={{ fontFamily: 'Manrope' }}>{displayData?.description} </p>
//                     </Card.Text>
//                 </Card.Body>
//             </Card>

//             <Modal size="lg" show={show} onHide={handleClose}>
//                 <Modal.Header closeButton></Modal.Header>
//                 <Modal.Body>
//                     <div className="mainDiv me-5">
//                         <div className="div text-center">
//                             <img style={{ width: '500px' }} src={`${SERVER_URL}/uploads/${displayData?.propertyImage[0]}`} alt="Property" />
//                         </div>
//                         <div className="div">
//                             <div className="d-flex justify-content-between">
//                                 <h2 className="mt-5">{displayData?.title}</h2>
//                                 <h2 className="mt-5 me-5">${displayData?.price}</h2>
//                             </div>
//                             <div className="detailsDiv mt-3 d-flex justify-content-evenly">
//                                 <p>
//                                     <i className="fa-solid fa-door-open me-2"></i>
//                                     {displayData?.room}
//                                 </p>
//                                 <p>
//                                     <i className="fa-solid fa-car me-2"></i>
//                                     {displayData?.parking}
//                                 </p>
//                                 <p>
//                                     <i className="fa-solid fa-shower me-2"></i>
//                                     {displayData?.bathroom}
//                                 </p>
//                             </div>
//                             <div className="desc ms-2 me-2">
//                                 <p className="mt-2">
//                                     <i className="fa-solid fa-location-dot me-2"></i>
//                                     {displayData?.address}
//                                 </p>
//                             </div>
//                             <div className="btnDiv text-center">
//                                 <button
//                                     onClick={handleBookVisit}
//                                     className="w-100 mt-3"
//                                     style={{
//                                         color: 'white',
//                                         backgroundColor: '#2b2b2b',
//                                         height: '50px',
//                                         borderRadius: '10px',
//                                         pointerEvents: displayData.userId === userId ? 'none' : 'auto',
//                                     }}
//                                     disabled={displayData.userId === userId}
//                                 >
//                                     Book your visit
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                     {showInputField && (
//                         <div className="input-container d-flex justify-content-center mt-5">
//                             <input
//                                 style={{ width: '150px' }}
//                                 className="form-control"
//                                 type="text"
//                                 placeholder="Enter your email"
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                             <br />
//                             <input type="date" onChange={(e) => setDate(e.target.value)} />
//                             <br />
//                             <button onClick={handleBook} style={{ backgroundColor: '#7166F0', border: 'none', width: '150px' }}>
//                                 Book
//                             </button>
//                         </div>
//                     )}
//                 </Modal.Body>
//                 <Modal.Footer></Modal.Footer>
//             </Modal>
//             <ToastContainer position="top-center" theme="colored" autoClose={3000} />
//         </>
//     );
// }

// export default PropertyCard;
