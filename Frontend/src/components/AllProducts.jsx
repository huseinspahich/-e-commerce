import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';
import '../App.css';
import { useCart } from './CartContext'; // Uvoz useCart iz konteksta

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const { addToCart } = useCart(); // Pristup funkciji za dodavanje proizvoda u korpu

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/'); // Dohvatanje podataka sa servera
        setProducts(response.data); // Postavljanje podataka u state
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  // Filtriranje proizvoda prema pojmu za pretragu
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="px-4 text-center">
        <p className="lead mb-4">"Find the most popular products and add them to your cart!"</p>
        <div className="d-flex justify-content-center h-100">
          <div className="search">
            <input
              className="search_input"
              type="text"
              value={searchTerm}
              placeholder="Search here..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <a href="#" className="search_icon">
              <i className="fa fa-search"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div className="col" key={product.id}>
                  <div className="card shadow-sm">
                    <img
                      src={`http://localhost:3000${product.image}`}
                      alt={product.name}
                    />
                    <div className="card-body">
                      <p className="fw-semibold mb-0">{product.name}</p>
                      <p className="card-text mb-1" style={{ textDecoration: 'line-through' }}>
                        ${product.old_price}
                      </p>
                      <p className="card-text mb-1" style={{ fontWeight: 'bold' }}>
                        ${product.new_price}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-dark"
                            onClick={() => addToCart(product)} // Dodavanje proizvoda u korpu
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                No products found
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
