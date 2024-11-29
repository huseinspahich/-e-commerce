import React from 'react';

const MenPopular = () => {
  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 border-bottom d-inline border-3 border-dark text-body-emphasis">
          BEST SELLERS
        </h1>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
          <button type="button" className="btn btn-dark btn-lg px-4 gap-3">
            View All
          </button>
        </div>
      </div>
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <div
          className="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          Sale
        </div>

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">Special Item</h5>

            <div className="d-flex justify-content-center small text-warning mb-2">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>

            <span className="text-muted text-decoration-line-through">$20.00</span>
            $18.00
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a className="btn btn-outline-dark mt-auto" href="#">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenPopular;
