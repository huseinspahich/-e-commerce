import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Login from './components/login'
import Home from './components/home'

function App() {

  return (
    <>
     <BrowserRouter>
     <Header/>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
     </Routes>     
     </BrowserRouter>
    </>
  )
}

export default App
