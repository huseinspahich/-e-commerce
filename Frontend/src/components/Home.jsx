import React from 'react'
import Hero from './hero'
import Reviews from './Reviews'
import MenPopular from './MenPopular'
import Subscribe from './Subscribe'
import Delivery from './Delivery'
import Footer from './footer'
import WomenPopular from './WomenPopular'
import KidsPopular from './KidsPopular'

const Home = () => {
  return (
    <>
     <Hero/> 
     <MenPopular/>
     <Subscribe/>
     <WomenPopular/>
     <Reviews/>
     <KidsPopular/>
     <Delivery/>
     <Footer/>
    </>
  )
}

export default Home
