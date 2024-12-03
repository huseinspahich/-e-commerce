import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MenPopular = ({ isLoggedIn }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/menpopular'); 
        setProducts(response.data); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts(); 
  }, []);

  return (
    <div>
      <div className="px-4 py-5 my-5 mb-0 pb-0 text-center">
        <h1 className="display-5 border-bottom d-inline border-3 border-dark text-body-emphasis">
          POPULAR IN MEN
        </h1>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
        <Link to="/men" className="btn btn-dark btn-lg px-4 gap-3">
        View All
            </Link>
          
        </div>
      </div>
      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            {products.map((product) => (
              <div className="col" key={product.id}>
                <div className="card shadow-sm">
                  <img src={`http://localhost:3000${product.image}`} alt={product.name} />
                  <div className="card-body">
                    <p className='fw-semibold mb-0'>{product.name}</p>
                    <p className="card-text mb-1" style={{ textDecoration: 'line-through' }}>${product.old_price}</p>
                    <p className="card-text mb-1" style={{ fontWeight: 'bold' }}>${product.new_price}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                      {isLoggedIn ? (
                          <button type="button" className="btn btn-sm btn-dark">Add to cart</button>
                        ) : (
                          <p>Please login to add to cart</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenPopular;
