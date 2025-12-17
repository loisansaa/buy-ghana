import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Homepage from './Pages/Homepage.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Products from './Pages/Products.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import Support  from './Pages/Support.jsx';

function App() {
  return (
   <div>
    <Router>
     
      <Navbar />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/support' element={<Support />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <Footer />
    </Router>
   </div>
  )
}

export default App