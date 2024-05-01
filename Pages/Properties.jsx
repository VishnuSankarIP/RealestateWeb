// import React, { useEffect, useState } from 'react'
// import Header from '../Components/Header'
// import '../property.css'
// import PropertyCard from '../Components/PropertyCard'
// import { Col, Row } from 'react-bootstrap'
// import { getAllPropertyAPI } from '../Services/allAPI'

// function Properties() {
//   const[searchKey,setSearchKey]=useState("")
//   const [allproperties, setAllProperties] = useState([])
//   console.log(allproperties);

//   useEffect(()=>{
//     getAllProperty()
//   },[searchKey])

//   const getAllProperty = async () => {
//     const token = sessionStorage.getItem("token")
//     const reqHeader = {
//       "Authorization": `Bearer ${token}`
//     }
//     try {
//       const result=await getAllPropertyAPI(searchKey,reqHeader)
//       console.log(result);
//       if(result.status==200)
//       {
//         setAllProperties(result.data)
//       }

//     }
//     catch (err) {

//     }
//   }
//   return (
//     <>

//       <Header insideDashboard={true} />
//       <div className="SearchDiv mt-3">
//         <div class="search-container">
//           <input onChange={e=>setSearchKey(e.target.value)} type="text" class="search-bar" placeholder="Search..." />
//           <button type="submit" class="search-button">Search</button>
//         </div>
//       </div>

//       <div className="contentDiv">
//         <Row className='mt-5 ms-5'>
//           {
//             allproperties?.length>0?
//             allproperties?.map(property=>(<Col key={property} className='mb-3' sm={12} md={6} lg={4}>
//             <PropertyCard displayData={property}/>
//           </Col>))
            
//           :
//           <div className="div text-danger text-center">Project not found</div>

//           }
          
//         </Row>

//       </div>
      






//     </>
//   )
// }

// export default Properties


import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import '../property.css';
import PropertyCard from '../Components/PropertyCard';
import { Col, Row, Pagination } from 'react-bootstrap'; 
import { getAllPropertyAPI } from '../Services/allAPI';

function Properties() {
  const [searchKey, setSearchKey] = useState("");
  const [allproperties, setAllProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [propertiesPerPage] = useState(6); 

  useEffect(() => {
    getAllProperty();
  }, [searchKey]);

  const getAllProperty = async () => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    };
    try {
      const result = await getAllPropertyAPI(searchKey, reqHeader);
      if (result.status === 200) {
        setAllProperties(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = allproperties.slice(indexOfFirstProperty, indexOfLastProperty);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header insideDashboard={true} />
      <div className="SearchDiv mt-3">
        <div class="search-container">
          <input onChange={e => setSearchKey(e.target.value)} type="text" class="search-bar" placeholder="Search..." />
          <button type="submit" class="search-button">Search</button>
        </div>
      </div>
<div className="div" style={{height:"110vh"}}>
<div className="contentDiv">
        <Row className='mt-5 ms-5'>
          {currentProperties.length > 0 ? (
            currentProperties.map(property => (
              <Col key={property._id} className='mb-3' sm={12} md={6} lg={4}>
                <PropertyCard displayData={property} />
              </Col>
            ))
          ) : (
            <div className="div text-danger text-center">Project not found</div>
          )}
        </Row>
      </div>
      </div>
      {/* Pagination */}
      <div className="d-flex justify-content-center">
        <Pagination>
          {[...Array(Math.ceil(allproperties.length / propertiesPerPage)).keys()].map(number => (
            <Pagination.Item key={number + 1} onClick={() => paginate(number + 1)} active={number + 1 === currentPage}>
              {number + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>

      
    </>
  );
}

export default Properties;
