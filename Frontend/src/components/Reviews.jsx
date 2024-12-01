import React from 'react'

const Reviews = () => {
  return (
    <div>
        <section>
  <div className="row text-center">
    <div className="col-md-12">
      <div id="carouselBasicExample" data-mdb-carousel-init className="carousel slide carousel-dark" data-mdb-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <p className="lead font-italic mx-4 mx-md-5">
            "The best shopping experience I've had! The site is so easy to navigate, and the customer service was incredible. Highly recommend!"
            </p>
            <div className="mt-5 mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                className="rounded-circle img-fluid shadow-1-strong" alt="smaple image" width="100"
                height="100" />
            </div>
            <p className="text-muted mb-0">- Anna Morian</p>
          </div>

          <div className="carousel-item">
            <p className="lead font-italic mx-4 mx-md-5">
            "Easy checkout, great prices, and fast shipping. Everything about this shopping experience was smooth!"
            </p>
            <div className="mt-5 mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                className="rounded-circle img-fluid shadow-1-strong" alt="smaple image" width="100"
                height="100" />
            </div>
            <p className="text-muted mb-0">- Teresa May</p>
          </div>

          <div className="carousel-item">
            <p className="lead font-italic mx-4 mx-md-5">
            "What sets this store apart is not just the great products, but the experience as a whole. Everything from the easy-to-use website to the fast delivery and excellent customer service makes shopping here a pleasure. I’m already planning my next purchase and will be telling everyone about this store. Highly recommend!"
            </p>
            <div className="mt-5 mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                className="rounded-circle img-fluid shadow-1-strong" alt="smaple image" width="100"
                height="100" />
            </div>
            <p className="text-muted mb-0">- Kate Allise</p>
          </div>
        </div>
        <button data-mdb-button-init className="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample"
          data-mdb-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button data-mdb-button-init className="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample"
          data-mdb-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>  
   </section>      
    </div>
  )
}

export default Reviews
