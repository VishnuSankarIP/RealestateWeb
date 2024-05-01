import React from 'react'
import Header from '../Components/Header'
import logo from '../src/assets/reallogo.png'
import { Col, Row } from 'react-bootstrap'
import PropertyCard from '../Components/PropertyCard'

function Dashboard() {
  return (
    <>
      <Header insideDashboard={true} />
      <div className="mainDiv">
        <div className="headerSection" style={{ height: "100vh", backgroundColor: "#7166F0" }}>
          <div className="row">
            <div className="col-lg-6">
              <div className="div mt-5 ms-5 d-flex flex-column align-items-start justify-content-center">
                <h1 className='mt-5' style={{ fontSize: '70px', color: 'white', fontFamily: "Manrope", margin: 0 }}>Discover <br />Most Suitable <br />Property</h1>
                <div className="BtnDiv mt-3">
                  <button className='exploreBtn'>Book Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="imagecontainer mt-3">
                <img className='img1' src={logo}></img>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* <div className="head ms-5 mt-5">
        <h4>Best Choices</h4>
        <h2>Popular Residencies</h2>

        <div className="contentDiv">
          <Row className='mt-5 ms-5'>
            <Col className='mb-3' sm={12} md={6} lg={4}>
              <PropertyCard />
            </Col>
          </Row>

        </div>



      </div> */}

    </>
  )
}

export default Dashboard