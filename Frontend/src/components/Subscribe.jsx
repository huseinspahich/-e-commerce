import React from 'react';

const Subscribe = () => {
  return (
    <>
      <section className="newsletter">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="content">
                <h2 className="newsletter-title">Stay Updated & Save!</h2>
                <p className="newsletter-subtitle">
                  Subscribe to our newsletter and get <strong>20% OFF</strong> your next purchase!
                </p>
                <form>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                    <span className="input-group-btn">
                      <button className="btn" type="submit">
                        Subscribe Now
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
