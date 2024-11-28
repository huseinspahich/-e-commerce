import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cartCount }) {
    return (
        <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <img src="/src/assets/shopify_logo_icon_214666.webp" alt="shop-logo" height="50px" width="55px"/><h1>Shopify</h1>
          </a>

    
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Features</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Pricing</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
          </ul>
    
          <div className="col-md-3 text-end">
            <Link to="/login"><button type="button" className="btn btn-dark me-2">Login</button>
            </Link>
             <Link classNameName="nav-link" to="/cart">
             <img 
                            src="/src/assets/cart1.png" 
                            alt="Košarica" 
                            width="30" 
                            height="30" 
                        />
                        {cartCount > 0 && (
                            <span className="badge bg-primary ms-2">
                                {cartCount}
                            </span>
                        )}
             </Link>
          </div>
        </header>
      </div>
    );
}

export default Header;
