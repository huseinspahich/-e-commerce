import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'


const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/women'); 
        setProducts(response.data); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts(); 
  }, []);

  return (
    <div>
    <div>
      <div class="px-4  text-center">
      <p class="lead mb-4">"Find the most popular products and add them to your cart!"</p>
      <div class="d-flex justify-content-center h-100">
        
        <div class="search">
          <input class="search_input" type="text" name="" placeholder="Search here..."/>
          <a href="#" class="search_icon"><i class="fa fa-search"></i></a>
        </div>
      </div>
    </div>
  </div>
  <div class="album py-5 ">
    <div class="container">

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
      {products.map((product) =>( 
        <div class="col" key={product.id}>
          <div class="card shadow-sm">
          <img src={`http://localhost:3000${product.image}`} alt={product.name} />

            <div class="card-body">
              <p className='fw-semibold mb-0'>{product.name}</p>
              <p className="card-text mb-1" style={{ fontWeight: "bold", display: "inline-block", marginRight: "10px" }}>${product.new_price}</p>
              <p className="card-text mb-1" style={{ textDecoration: "line-through", color: "grey", display: "inline-block" }}>${product.old_price}</p>

              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn btn-dark">Add to cart</button>
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
  )
}

export default AllProducts
