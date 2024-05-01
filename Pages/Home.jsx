import React, { useEffect } from 'react'
import Header from '../Components/Header'
import logo from '../src/assets/reallogo.png'
import img2 from '../src/assets/img2.png'
import img3 from '../src/assets/img3.png'
import img4 from '../src/assets/img4.png'
import img5 from '../src/assets/pic.png'
import img6 from '../src/assets/value.png'
import img7 from '../src/assets/message.png'
import '../style.css'
import { Accordion, Button, Card } from 'react-bootstrap'


function Home() {



  return (
    <>
      <Header />
      <main>

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
                <img className='home img1' src={logo}></img>
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


        <div className="midDiv mt-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="div ms-5">
                <h3 className='y'>Our Value</h3>
                <h1 className='y' style={{ color: '#5A52C0' }}>Value We Give To You</h1>
                <p className='me-5 y'>We always ready to help by providing the best services for you.
                  We beleive a good blace to live can make your life better</p>
              </div>
              <div className="div ms-5 mt-5">
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{ color: '#5A52C0' }}>Best interest rates on the market</h4></Accordion.Header>
                    <Accordion.Body>
                      <p className='y'>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header><h4 style={{ color: '#5A52C0' }}>Prevent unstable prices</h4></Accordion.Header>
                    <Accordion.Body>
                      <p className='y'>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p>                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header><h4 style={{ color: '#5A52C0' }}>Best price on the market</h4></Accordion.Header>
                    <Accordion.Body>
                      <p className='y'>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p>                     </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

            </div>

            <div className="col-lg-6">
              <div className="div  d-flex justify-content-center">
                <img src={img6} className='arrow ms-5 mt-lg-5' ></img>
              </div>

            </div>
          </div>
        </div>

        <div className="midDiv mt-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="div  d-flex justify-content-center">
                <img src={img7} className='arrow1 ms-5 mt-lg-5' ></img>
              </div>


            </div>

            <div className="col-lg-6">
              <div className="div ms-5 me-5">
                <h3 className='y'>Our Contact Us</h3>
                <h1 className='y' style={{ color: '#5A52C0' }}>Easy to contact us</h1>
                <p className='me-5 y'>We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</p>
              </div>
              <div className="div ms-5 mt-5 me-5">
                <div className="row mt-5">
                  <div className="col-lg-6">
                    <Card style={{ width: '18rem' }}>
                  
                    <Card.Body>
                      <div className="div d-flex justify-content-center">
                      <i class="fa-solid fa-comments fa-3x"></i>   
                      </div>
                              
                      
                      <div className="div d-flex justify-content-center mt-2">
                      <Button variant="primary" style={{width:'100px',backgroundColor:'#7166F0'}}>Chat now</Button>
                      </div>
                      
                    </Card.Body>
                  </Card></div>
                  <div className="col-lg-6">
                  <Card style={{ width: '18rem' }}>
                  
                  <Card.Body>
                    <div className="div d-flex justify-content-center">
                    <i class="fa-solid fa-phone fa-3x"></i>
                    </div>
                            
                    
                    <div className="div d-flex justify-content-center mt-2">
                    <Button variant="primary" style={{width:'100px',backgroundColor:'#7166F0'}}>Call now</Button>
                    </div>
                    
                  </Card.Body>
                </Card>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
          <div className="div d-flex justify-content-center">
          <div className="cardDiv mt-5 container ms-5 me-5 border rounded " style={{backgroundColor:'#7166F0'}}>
            <h1 className='text-center mt-5 y'>Get Started with  Serenity Estates</h1>
            <p className='text-center y'>Subscribe and find super attractive price quotes from us.<br></br>
            Find your residence soon</p>
            <div className="div d-flex justify-content-center mt-2 mb-5">
                    <Button className='y' variant="primary" style={{width:'150px',backgroundColor:'white',color:'#7166F0'}}>Get Started</Button>
                    </div>

        </div>
          </div>
        

      </main>

    </>
  )
}

export default Home