import React from 'react'
import NavBar from './components/NavBar'
import Popular from './components/Popular'
import Search from './components/Search'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <NavBar />
      <Search />
      <Popular />
      <Footer />
    </div>
  )
}

export default App