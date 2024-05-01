import AddProperties from '../Components/AddProperties'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import View from '../Components/View'
import Admin from '../Pages/Admin'
import Auth from '../Pages/Auth'
import Dashboard from '../Pages/Dashboard'
import Home from '../Pages/Home'
import MyListings from '../Pages/MyListings'
import Profile from '../Pages/Profile'
import Properties from '../Pages/Properties'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
   
    <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/dash' element={<Dashboard/>}></Route>
     <Route path='/login' element={<Auth/>}></Route>
     <Route path='/register' element={<Auth insideRegister />}></Route>
     <Route path='/property' element={<Properties/>}></Route>
     <Route path='/view/:id' element={<View/>}></Route>
     <Route path='/contact' element={<Contact/>}></Route>
     <Route path='/add' element={<AddProperties/>}></Route>
     <Route path='/my-listing' element={<MyListings/>}></Route>
     <Route path='/admin' element={<Admin/>}></Route>
     <Route path='/profile' element={<Profile/>}></Route>
     
    
    </Routes>
    <Footer/>

      
    </>
  )
}

export default App
