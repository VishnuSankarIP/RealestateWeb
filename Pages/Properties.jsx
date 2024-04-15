import React from 'react'
import Header from '../Components/Header'

import '../property.css'
import PropertyCard from '../Components/PropertyCard'
function Properties() {
  return (
   <>

   <Header/>
   <div className="SearchDiv mt-3">
   <div class="search-container">
  <input type="text" class="search-bar" placeholder="Search..."/>
  <button type="submit" class="search-button">Search</button>
</div>
   </div>
   <div className="contentDiv">
  <PropertyCard/>
    </div>

      
   
   
   </>
  )
}

export default Properties