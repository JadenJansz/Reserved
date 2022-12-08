import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Popular from './components/Popular'
import Search from './components/Search'
import Footer from './components/Footer'
import AdminHome from './pages/AdminHome'
import AdminViewRestaurant from './pages/AdminViewRestaurant'
import Home from './pages/Home'
import CustomerViewRestaurant from './pages/CustomerViewRestaurant'
import CustomerSearchRestaurants from './pages/CustomerSearchRestaurants'
import SignUp from './components/SignUp'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign_up' element={<SignUp />} />
          <Route path='/search_restaurants' element={ <CustomerSearchRestaurants /> } />
          <Route path='/view_restaurant' element={<CustomerViewRestaurant />} />
          <Route path='/review' element={<AdminViewRestaurant />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App