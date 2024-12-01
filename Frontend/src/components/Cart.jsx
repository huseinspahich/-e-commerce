import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Učitavanje podataka iz localStorage pri učitavanju komponente
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Učitani proizvodi iz localStorage:', storedCart);  // Provjeri podatke
    setCartItems(storedCart);
  }, []);

  const handleQuantityChange = useCallback((id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent negative or zero quantities
  
    // Ažuriraj količinu proizvoda u korpi
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Ažuriraj localStorage
  }, [cartItems, setCartItems]);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Ažuriraj localStorage
  };

  const calculateTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.new_price * item.quantity, 0);

  return (
    <section className="h-100 h-custom" >
      <div className="container py-0 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2" style={{ borderRadius: '15px' }}>
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0">Shopping Cart</h1>
                        <h6 className="mb-0 text-muted">{cartItems.length} items</h6>
                      </div>
                      <hr className="my-4" />

                      {cartItems.length === 0 ? (
                        <div className="text-center">
                          <h3>Your cart is empty!</h3>
                        </div>
                      ) : (
                        cartItems.map((item, index) => {
                          if (item === null) return null;  // Check for null pointer references
                          return (
                            <div key={index}>
                              <div className="row mb-4 d-flex justify-content-between align-items-center">
                                <div className="col-md-2 col-lg-2 col-xl-2">
                                  <img
                                    src={`http://localhost:3000${item.image}`}
                                    className="img-fluid rounded-3"
                                    alt={item.name}
                                  />
                                </div>
                                <div className="col-md-3 col-lg-3 col-xl-3">
                                  <h6 className="text-muted">{item.category}</h6>
                                  <h6 className="mb-0">{item.name}</h6>
                                </div>
                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                  <button
                                    className="btn btn-sm btn-light"
                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                  >
                                    -
                                  </button>
                                  <span className="mx-2">{item.quantity}</span>
                                  <button
                                    className="btn btn-sm btn-light"
                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                  >
                                    +
                                  </button>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                  <h6 className="mb-0">${item.new_price}</h6>
                                </div>
                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                  <button
                                    className="btn btn-link text-danger"
                                    onClick={() => removeFromCart(item.id)}
                                  >
                                    <i className="fas fa-times"></i>
                                  </button>
                                </div>
                              </div>
                              <hr className="my-4" />
                            </div>
                          );
                        })
                      )}

                      <div className="pt-5">
                        <h6 className="mb-0">
                          <a href="/all-products" className="text-body">
                            <i className="fas fa-long-arrow-alt-left me-2"></i>
                            Back to shop
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-light">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">Items {cartItems.length}</h5>
                        <h5>${calculateTotalPrice()}</h5>
                      </div><Link to={{ pathname: '/checkout', state: { totalPrice: calculateTotalPrice() } }}>
  <button type="button" className="btn btn-dark btn-block btn-lg">
    Checkout
  </button>
</Link>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;

