// import React, { useState } from 'react'
// import { Button, Modal } from 'react-bootstrap';
// import { editPropertyAPI } from '../Services/allAPI';

// function Edit({property}) {
//     const[propertyData,setPropertyData]=useState({id:property?._id,title:property?.title,description:property?.description,address:property?.address
//     ,price:property?.price})
//     console.log(property);
//     const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);


//   const handleShow = () => {

//     setShow(true);
//     setPropertyData({
//         id:property?._id,title:property?.title,description:property?.description,address:property?.address
//         ,price:property?.price
//     })}

//   const handleUpdateProject=async()=>{
//     const {title,description,address,price}=propertyData
//     if(!title || !description || !address || !price)
//     {
//         alert("please fill the form")
//     }
//     else
//     {
//         // api call
//         const reqBody=new FormData()
//       reqBody.append("title", title)
//       reqBody.append("description",description)
//       reqBody.append("address",address)
//       reqBody.append("price", price)

//       const token=sessionStorage.getItem("token")
//       if(token)
//       {
//         const reqHeader = {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`
//       }
//       try{
//         const result=await editPropertyAPI(propertyData.id,reqBody,reqHeader)
//         console.log(result);
//         if(result.status==200)
//         {
//             handleClose()

//         }else{
//                 console.log(result.response);
//         }


//       }
//       catch(err)
//       {
//         console.log(err);
//       }
//     }}

//   }
// // const handleUpdateProject = async () => {
// //     const { title, description, address, price } = propertyData;
// //     if (!title || !description || !address || !price) {
// //       alert("Please fill the form");
// //     } else {
// //       const token = sessionStorage.getItem("token");
// //       if (token) {
// //         const reqHeader = {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${token}`,
// //         };
// //         try {
// //           const result = await editPropertyAPI(propertyData.id, propertyData, reqHeader);
// //           console.log(result);
// //           if (result.status === 200) {
// //             handleClose();
// //           } else {
// //             console.log(result.response);
// //           }
// //         } catch (err) {
// //           console.log(err);
// //         }
// //       }
// //     }
// //   };


//   return (
//    <>
// <button onClick={handleShow}  className='btn btn-primary'><i className='fa-solid fa-edit me-2'></i>Edit</button>
// <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body> <input value={property?.title} onChange={e => setPropertyData({ ...propertyData, title: e.target.value })} type='text' className='form-control mb-2' placeholder='Property Title'></input>
//               <input value={property?.description} onChange={e => setPropertyData({ ...propertyData, description: e.target.value })} type='text' className='form-control mb-2' placeholder='Description'></input>
//               <input value={property?.address} onChange={e => setPropertyData({ ...propertyData, address: e.target.value })} type='text' className='form-control mb-2' placeholder='Address'></input>
//               <input value={property?.price} onChange={e => setPropertyData({ ...propertyData, price: e.target.value })} type='text' className='form-control mb-2' placeholder='Price'></input>
//               </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleUpdateProject}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//    </>
//   )
// }

// export default Edit

import React, { useContext, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { editPropertyAPI } from '../Services/allAPI';
import { EditResponseContext } from '../context/ContextAPI';

function Edit({ property }) {

    const { editResponse, setEditResponse } = useContext(EditResponseContext)
    const [propertyData, setPropertyData] = useState({
        id: property?._id,
        title: property?.title,
        description: property?.description,
        address: property?.address,
        price: property?.price
    });
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e, field) => {
        setPropertyData({ ...propertyData, [field]: e.target.value });
    };
  

    const handleUpdateProject = async () => {
        const { title, description, address, price } = propertyData;
        if (!title || !description || !address || !price) {
            alert("Please fill the form");
        } else {
            const token = sessionStorage.getItem("token");
            if (token) {
                const reqHeader = {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
                try {
                    const result = await editPropertyAPI(propertyData.id, propertyData, reqHeader);
                    console.log(result);
                    
                    if (result.status === 200) {
                        handleClose();
                        setEditResponse(result)

                    } 
                    else {
                        console.log(result.response);
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        }
    };
    useEffect(()=>{

    },[editResponse])

    return (
        <>
            <button style={{backgroundColor:'#7166F0',width:'100px',color:'white',height:'40px',borderRadius:'15px',border:'none'}} onClick={handleShow} className='btn btn-primary'><i className='fa-solid fa-edit me-2'></i>Edit</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input value={propertyData.title} onChange={(e) => handleChange(e, 'title')} type='text' className='form-control mb-2' placeholder='Property Title' />
                    <input value={propertyData.description} onChange={(e) => handleChange(e, 'description')} type='text' className='form-control mb-2' placeholder='Description' />
                    <input value={propertyData.address} onChange={(e) => handleChange(e, 'address')} type='text' className='form-control mb-2' placeholder='Address' />
                    <input value={propertyData.price} onChange={(e) => handleChange(e, 'price')} type='text' className='form-control mb-2' placeholder='Price' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdateProject}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Edit;
