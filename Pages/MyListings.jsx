import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Button, Card, Carousel, Col, Row } from 'react-bootstrap'

import { getUserPropertyAPI, removePropertyAPI } from '../Services/allAPI'
import { SERVER_URL } from '../Services/serverUrl'
import Edit from '../Components/Edit'
import { EditResponseContext } from '../context/ContextAPI'


function MyListings({displayData}) {
  const [userProperty,setUserProperty]=useState([])
  const { editResponse, setEditResponse } = useContext(EditResponseContext)
  console.log(userProperty);

  useEffect(()=>{

    getUserProperty()
  },[editResponse])

  const getUserProperty = async () => {
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result=await getUserPropertyAPI(reqHeader)
      console.log(result);
      if(result.status==200)
      {
        setUserProperty(result.data)
      }

    }
    catch (err) {

    }
  }
  const handleDeleteProperty=async(propertyId)=>{
    const token=sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    }
    // api call
    const result=await removePropertyAPI(propertyId,reqHeader)
    if(result.status==200)
    {
      getUserProperty()
    }
    else
    {
      console.log(result);
    }

    }
    
  }

  return (
   <>
  
   <Header insideDashboard={true}/>
   
   
   <div className="contentDiv mt-5 ms-5 me-5" style={{height:'100vh'}}>
    <Row>
      {
         userProperty?.length>0?
         userProperty.map(property=>(<Col>
          <Card style={{height:'450px',width:'400px'}} displayData={property}>
          <Carousel>
          <Carousel.Item>
            <img style={{height:'250px'}}
              className="d-block w-100"
              src={`${SERVER_URL}/uploads/${property?.propertyImage[0]}`}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img style={{height:'250px'}}
              className="d-block w-100"
              src={`${SERVER_URL}/uploads/${property?.propertyImage[1]}`}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
          {/* <Card.Img variant="top"  src={`${SERVER_URL}/uploads/${property?.propertyImage[0]}`} /> */}
          <Card.Body>

            <Card.Title style={{color:'#7166F0'}}><h3>{property?.title}</h3></Card.Title>
            <Card.Text>
             Description: {property?.description}
            </Card.Text>
            <div className="div d-flex justify-content-between">
            <Card.Text>
              Location:{property?.address}
            </Card.Text>
            <Card.Text>
              Price:{property?.price}
            </Card.Text>
            </div>
           

            <div className="div d-flex justify-content-between">
            <div className="btn"> <Edit property={property} /></div>
            {/* <Button style={{width:"150px"}} variant="primary">Edit</Button> */}
            <button onClick={()=>handleDeleteProperty(property?._id)} style={{backgroundColor:'#7166F0',width:'100px',color:'white',height:'40px',borderRadius:'15px',border:'none'}} variant="primary">Delete</button>

            </div>
           
          </Card.Body>
        </Card>
          </Col>)):
          <div className="div text-danger text-center">Property not added yet</div>

      }
      
    </Row>
    

    </div>

   </>
  )
}

export default MyListings