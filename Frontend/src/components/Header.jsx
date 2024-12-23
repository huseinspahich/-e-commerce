import React, { useState,useEffect } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { useCart } from './CartContext'; 


function Header({ isLoggedIn, onLogin }) {
  const { getCartCount } = useCart();  
  const cartCount = getCartCount();  
  const[showLogoutButton, setShowLogoutButton] = useState(false);

  
  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        setShowLogoutButton(true);
      }, 1000); 
    } else {
      setShowLogoutButton(false);
    }
  }, [isLoggedIn]);

 



  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <img src="/src/assets/shopify_logo_icon_214666.webp" alt="shop-logo" height="50px" width="55px"/>
          <h1>ShopHub</h1>
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
          <li><Link to="/all-products" className="nav-link px-2 link-dark">All Products</Link></li>
          <li><Link to="/men" className="nav-link px-2 link-dark">Men</Link></li>
          <li><Link to="/women" className="nav-link px-2 link-dark">Women</Link></li>
          <li><Link to="/kids" className="nav-link px-2 link-dark">Kids</Link></li>
        </ul>

        <div className="col-md-3 text-end d-flex align-items-center justify-content-end">
        {isLoggedIn ? (
        <button
          className={`btn btn-outline-dark me-3 ${showLogoutButton ? '' : 'd-none'}`}
        >
          <i className="fas fa-sign-out-alt me-2"></i> Logout
        </button>
          ) : (
            <Link to="/login" className="btn btn-outline-dark me-3">
              <i className="fas fa-sign-in-alt me-2"></i> Login
            </Link>
          )}
          <Link to="/cart" className="btn btn-outline-dark me-3">
  <i className="bi-cart-fill me-1"></i>
  Cart
  <span className="badge text-dark ms-1 rounded-pill">{cartCount}</span>
</Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
