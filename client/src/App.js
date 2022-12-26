import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Popular from './components/Popular'
import Search from './components/Search'
import Footer from './components/Footer'
import AdminHome from './pages/AdminHome'
import AdminViewRestaurant from './pages/AdminViewRestaurant'
import CustomerHome from './pages/CustomerHome'
import CustomerViewRestaurant from './pages/CustomerViewRestaurant'
import CustomerSearchRestaurants from './pages/CustomerSearchRestaurants'
import SignUp from './components/SignUp'
import AddRestaurant from './pages/AddRestaurant'
import AdminLogin from './pages/AdminLogin'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      {/* <NavBar /> */}
        <Routes>
          <Route path='/' element={<CustomerHome />} />
          <Route path='/sign_up' element={<SignUp />} />
          <Route path='/search_restaurants' element={ <CustomerSearchRestaurants /> } />
          <Route path='/view_restaurant' element={<CustomerViewRestaurant />} />
          <Route path='/review' element={<AdminViewRestaurant />} />
          <Route path='/add_restaurant' element={<AddRestaurant />} />
          <Route path='/admin_login' element={<AdminLogin />} />
          <Route path='/admin_home' element={<AdminHome />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App