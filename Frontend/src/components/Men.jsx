import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css'


const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/men'); 
        setProducts(response.data); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts(); 
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  return (
    <div>
    <div>
      <div class="px-4  text-center">
      <p class="lead mb-4">"Find the most popular products and add them to your cart!"</p>
      <div class="d-flex justify-content-center h-100">
        
        <div class="search">
        <input 
          class="search_input" 
          type="text" 
          value={searchTerm}
          placeholder="Search here..."
          onChange={(e) => setSearchTerm(e.target.value)}  />
          <a href="#" class="search_icon"><i class="fa fa-search"></i></a>
        </div>
      </div>
    </div>
  </div>
  <div class="album py-5 ">
    <div class="container">

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
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
                      <p className="card-text mb-1" style={{ textDecoration: 'line-through' }}>${product.old_price}</p>
                    <p className="card-text mb-1" style={{ fontWeight: 'bold' }}>${product.new_price}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-dark">
                            Add to cart
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
  )
}

export default AllProducts
