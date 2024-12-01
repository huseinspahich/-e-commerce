import React from 'react'
import ecommerceImage from '../assets/ecommerce.jpg';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <>
     <div className="container my-5">
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Shop the Best, Forget the Rest!</h1>
        <p className="lead">"Explore our wide range of products, curated just for you. Quality, style, and convenience - all in one place."</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
        <Link to="/all-products">
  <button className="btn btn-dark btn-lg px-4 me-md-2">All Products</button>
</Link>

        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-3" src={ecommerceImage} alt="" width="620"/>
      </div>
    </div>
  </div>
    </>
  )
}

export default Hero
