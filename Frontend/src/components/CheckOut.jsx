import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import Alert from './Alert';


const CheckOut = () => {
  const location = useLocation();
  const { cartItems } = useCart();
  const totalPrice = cartItems.reduce((total, item) => total + item.new_price * item.quantity, 0);
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const handleFinish = () => {

    setShowAlert(true);
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };



  return (
    <>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div className="py-0 text-center">
          <h1>Checkout Form</h1>
        </div>

        <div className="row" style={{ flexGrow: 1 }}>
          {/* Cart section */}
          <div className="col-md-4 order-2">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your Cart</span>
            </h4>

            <div className="card">
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between bg-light">
                  <div className="text-success">
                    <h6 className="my-0">Promo code</h6>
                    <small>EXAMPLECODE</small>
                  </div>
                  <span className="text-success">-$15</span>
                </li>
              </ul>

              <div className="card-footer d-flex justify-content-between">
                <h1>Total (USD)</h1>
                <h1>${totalPrice}</h1>
              </div>

              <form className="card p-2">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Promo code" />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-secondary">
                      Redeem
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Billing Address Section */}
          <div className="col-md-8 pb-5 order-1">
            <h4 className="mb-3">Billing Address</h4>
            <div className="row">
              <div className="col mb-4">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
              </div>
              <div className="col mb-4">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
              </div>
            </div>

            <div className="col mb-4">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" placeholder="Email" aria-label="Email" />
            </div>
            <div className="row">
              <div className="col mb-4">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" placeholder="Address" aria-label="Address" />
              </div>
              <div className="col mb-4">
                <label htmlFor="zip">Zip Code</label>
                <input type="text" className="form-control" placeholder="Zip Code" aria-label="Zip Code" />
              </div>
            </div>
            <div className="row">
              <div className="col mb-4">
                <label htmlFor="city">City</label>
                <input type="text" className="form-control" placeholder="City" aria-label="City" />
              </div>
              <div className="col mb-4">
                <label htmlFor="country">Country</label>
                <input type="text" className="form-control" placeholder="Country" aria-label="Country" />
              </div>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="shippingCheck" />
              <label className="form-check-label" htmlFor="shippingCheck">
                Shipping address is the same as my billing address
              </label>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="saveInfo" />
              <label className="form-check-label" htmlFor="saveInfo">
                Save this information for next time
              </label>
            </div>

            <hr className="mb-4" />

            <div className="row">
              <div className="col mb-4">
                <label htmlFor="cardName">Name on card</label>
                <input type="text" className="form-control" aria-label="cardName" />
                <small className="text-muted">Full name, as displayed on the card</small>
              </div>

              <div className="col mb-4">
                <label htmlFor="cardNumber">Credit card number</label>
                <input type="text" className="form-control" placeholder="1234-5678-9012" aria-label="cardNumber" />
              </div>
            </div>

            <div className="row">
              <div className="col mb-3">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input type="text" className="form-control" aria-label="expiryDate" />
              </div>

              <div className="col mb-3">
                <label htmlFor="cvv">CVV</label>
                <input type="text" className="form-control" aria-label="cvv" />
              </div>
            </div>

            <div className="d-grid gap-2" style={{ marginTop: 'auto' }}>
            <button className="btn btn-dark btn-lg" onClick={handleFinish}>Finish</button>
      {showAlert && <Alert message="Ordered! Your order has been successfully placed." duration={2000} />}
            </div>
          </div>

          <hr className="mb-4" />
        </div>
      </div>
    </>
  );
}

export default CheckOut;

