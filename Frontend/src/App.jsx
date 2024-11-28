import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Home from './components/Home'
import AllProducts from './components/AllProducts';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';

function App() {

  return (
    <>
     <BrowserRouter>
     <Header/>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/all-products" element={<AllProducts />} />
         <Route path="/men" element={<Men />} />
         <Route path="/women" element={<Women />} />
         <Route path="/kids" element={<Kids />} />
         
     </Routes>     
     </BrowserRouter>
    </>
  )
}

export default App
