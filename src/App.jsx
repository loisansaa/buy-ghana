import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Homepage from './Pages/Homepage.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Products from './Pages/Products.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import Support  from './Pages/Support.jsx';
import CartPage from './Pages/Cart.jsx';
import { CartProvider } from './Context/CartContext.jsx';

function App() {
  return (
   <div>
    <CartProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/support' element={<Support />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>

        <Footer />
      </Router>
    </CartProvider>
   </div>
  )
}

export default App