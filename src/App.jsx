import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menus from './components/Menus'
import Banner from './components/Banner'
import Banner2 from './components/Banner2'
import Banner3 from './components/Banner3'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <main className='overflow-x-hidden'>
        {/* <Router> */}
        {/* <div> */}
        <Navbar />
        <Hero />
        {/* <Routes> */}
        {/* <Route path="#menus" element={ <Menus />} /> */}
        <Menus />
        <Banner />
        <Banner2 />
        <Banner3 />
        <Footer />
        {/* </Routes> */}
        {/* </div> */}
        {/* </Router> */}
      </main>
    </>
  )
}

export default App