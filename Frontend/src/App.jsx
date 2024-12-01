import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext.jsx';
import Header from './components/header';
import Login from './components/login';
import Home from './components/Home';
import AllProducts from './components/AllProducts';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import Cart from './components/cart';
import Register from './components/Register';
import CheckOut from './components/CheckOut.jsx';

function App() {
  return (
    <CartProvider>  {/* Omotavamo celu aplikaciju sa CartProvider */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
