import React from 'react'
import Hero from './hero'
import Reviews from './Reviews'
import MenPopular from './MenPopular'
import Subscribe from './Subscribe'
import Delivery from './Delivery'
import Footer from './footer'
import WomenPopular from './WomenPopular'

const Home = () => {
  return (
    <>
     <Hero/> 
     <Reviews/>
     <MenPopular/>
     <WomenPopular/>
     <Subscribe/>
     <Delivery/>
     <Footer/>
    </>
  )
}

export default Home
