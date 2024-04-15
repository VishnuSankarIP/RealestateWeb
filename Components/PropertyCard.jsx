import React from 'react'
import { Card } from 'react-bootstrap'
import img5 from '../src/assets/pic.png'
import { Link } from 'react-router-dom'
function PropertyCard() {
  return (
   <>

   <Link to={'/view'} style={{textDecoration:'none'}}><Card style={{ width: '18rem' }} className='ms-3'>
                <Card.Img variant="top" src={img5} />
                <Card.Body>
                  <Card.Title>Kerala Homes</Card.Title>
                  <Card.Text >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis earum quia provident aesentium dolorum modi eos hic iste iusto eius delectus.
                  </Card.Text>
               
                </Card.Body>
              </Card></Link>


              
              
   </>
  )
}

export default PropertyCard