import React from 'react';


const Footer = () => {
  return (
    <div className="container">
      <footer
        className="text-lg-start"
        style={{
          backgroundColor: '#fff',
          color: '#000',
          padding: '2rem 0',
          paddingBottom: '0',
          borderTop: '2px solid #808080',
        }}
      >
        <div className="container">
          <section>
            <div className="row align-items-start">

              <div className="col-md-6">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img
                    src="/src/assets/shopify_logo_icon_214666.webp"
                    alt="ShopHub Logo"
                    style={{ width: '50px', height: '50px' }}
                  />
                  <h6
                    className="text-uppercase font-weight-bold"
                    style={{
                      fontSize: '1.5rem',
                      letterSpacing: '1px',
                      margin: 0,
                    }}
                  >
                    ShopHub
                  </h6>
                </div>
                <p
                  style={{
                    marginTop: '1rem',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    textAlign: 'justify',
                    color: '#333',
                    maxWidth: '90%',
                  }}
                >
                  Welcome to ShopHub, your one-stop destination for the finest handpicked products. 
                  Experience unmatched quality, seamless shopping, and exceptional customer care with every purchase.
                </p>
              </div>

              <div className="col-md-2"></div>


              <div className="col-md-4 d-flex justify-content-between">
                <div style={{ marginRight: '3rem' }}>
                  <h6 className="text-uppercase mb-4 font-weight-bold">COMPANY</h6>
                  <p>
                    <a className="text-dark" href="#">
                      Home
                    </a>
                  </p>
                  <p>
                    <a className="text-dark" href="#">
                      Products
                    </a>
                  </p>
                  <p>
                    <a className="text-dark" href="#">
                      Cart
                    </a>
                  </p>
                  <p>
                    <a className="text-dark" href="#">
                      Subscribe
                    </a>
                  </p>
                </div>
                <div>
                  <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p>
                    <i className="fas fa-home mr-3"></i> New York, NY 10012, US
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> info@shophub.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="footer-content p-0">
          <div>
       
          </div>
          <div className="author">
            <a id="gh-link" href="https://github.com/huseinspahich">
              <div>Made by</div>
              <img id="gh-logo" src="/src/assets/HH-Logo.jpg" alt="" />
              <div>Harun Huseinspahic</div>
            </a>
          </div>
          <div>
           
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
