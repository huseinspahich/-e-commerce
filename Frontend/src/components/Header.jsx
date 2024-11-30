import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; // Uvozimo useCart hook

function Header() {
  const { getCartCount } = useCart();  // Dohvatanje broja proizvoda iz CartContext
  const cartCount = getCartCount();    // Pozivanje funkcije koja vraća ukupan broj proizvoda u korpi

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
          <Link to="/login" className="nav-link px-2 link-dark me-3">Login</Link>

          <Link to="/cart" className="nav-link px-2 link-dark">
            <i className="bi-cart-fill me-1"></i>
            Cart
            {/* Dinamički broj proizvoda u korpi */}
            <span className="badge text-dark ms-1 rounded-pill">{cartCount}</span>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
