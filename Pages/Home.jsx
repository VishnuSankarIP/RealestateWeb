import React from 'react'
import Header from '../Components/Header'
import logo from '../src/assets/reallogo.png'
import img2 from '../src/assets/img2.png'
import img3 from '../src/assets/img3.png'
import img4 from '../src/assets/img4.png'
import img5 from '../src/assets/pic.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../style.css'

function Home() {
  return (
    <>
      <Header />
      <main>

        <div className="headerSection" style={{ height: "90vh", backgroundColor: "black" }}>
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
        <div className="logoSection mt-3">
          <div className="row">
            <div className="col-lg-1 ">
            </div>

            <div className="col-lg-2">
              <img src={img2} width={'200px'}></img>
            </div>
            <div className="col-lg-2 ">
            </div>
            <div className="col-lg-2">
              <img src={img3} width={'200px'}></img>
            </div>
            <div className="col-lg-2 ">
            </div>
            <div className="col-lg-2">
              <img src={img4} width={'200px'}></img>
            </div>
            <div className="col-lg-1 ">
            </div>
          </div>
        </div>
        <div className="head ms-5 mt-5">
          <h4>Best Choices</h4>
          <h2>Popular Residencies</h2>
          <div className="row mt-5">
            <div className="col-lg-3 ">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img5} />
                <Card.Body>
                  <Card.Title>Kerala Homes</Card.Title>
                  <Card.Text >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis earum quia provident aesentium dolorum modi eos hic iste iusto eius delectus.
                  </Card.Text>
               
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 ">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img5} />
                <Card.Body>
                  <Card.Title>Kerala Homes</Card.Title>
                  <Card.Text >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis earum quia provident aesentium dolorum modi eos hic iste iusto eius delectus.
                  </Card.Text>
               
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 ">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img5} />
                <Card.Body>
                  <Card.Title>Kerala Homes</Card.Title>
                  <Card.Text >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis earum quia provident aesentium dolorum modi eos hic iste iusto eius delectus.
                  </Card.Text>
               
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 ">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img5} />
                <Card.Body>
                  <Card.Title>Kerala Homes</Card.Title>
                  <Card.Text >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis earum quia provident aesentium dolorum modi eos hic iste iusto eius delectus.
                  </Card.Text>
               
                </Card.Body>
              </Card>
            </div>
          </div>

        </div>
      </main>

    </>
  )
}

export default Home