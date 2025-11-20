import React, { useState } from 'react';
import Icon from '../elements/Icon';

const ProductsPage = () => {
  // Define sample products
  const products = [
    { 
      id: 1, 
      name: 'Daily Soft Lenses', 
      description: 'Comfortable daily disposable lenses for everyday wear',
      price: '$29.99',
      category: 'Soft Lenses'
    },
    { 
      id: 2, 
      name: 'Extended Wear Lenses', 
      description: 'Monthly lenses designed for extended comfort',
      price: '$49.99',
      category: 'Soft Lenses'
    },
    { 
      id: 3, 
      name: 'RGP Lenses', 
      description: 'Rigid gas permeable lenses for sharp vision',
      price: '$89.99',
      category: 'RGP Lenses'
    },
    { 
      id: 4, 
      name: 'Cosmetic Lenses', 
      description: 'Enhance your natural eye color with our cosmetic collection',
      price: '$39.99',
      category: 'Cosmetic'
    },
    { 
      id: 5, 
      name: 'Keratoconus Lenses', 
      description: 'Specialized lenses for irregular corneal shapes',
      price: '$129.99',
      category: 'Specialty'
    },
    { 
      id: 6, 
      name: 'Lens Care Solution', 
      description: 'Complete cleaning and disinfecting solution',
      price: '$19.99',
      category: 'Care Products'
    },
  ];

  return (
    <div className="container py-5">
      <div className="row justify-center">
        <div className="col-12">
          <h1 className="section-title text-center mb-4">Our Products</h1>
          <p className="section-subtitle text-center mb-5">
            Discover our premium selection of contact lenses and care products
          </p>
        </div>
      </div>

      <div className="row gap-4">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-md-4">
            <div className="feature-card text-center">
              <div className="product-image pattern-bg"></div>
              <div className="feature-icon display-4">
                <Icon name="fa-flask" size="2rem" />
              </div>
              <span className="badge bg-primary mb-2">{product.category}</span>
              <h3 className="feature-title">{product.name}</h3>
              <p className="feature-description">{product.description}</p>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="fw-bold fs-5">{product.price}</span>
                <button className="btn btn-primary">
                  <Icon name="fa-plus" size="1rem" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-5">
        <div className="col-12 text-center">
          <a href="/contact" className="btn btn-secondary btn-large">
            Contact Us for More Information
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
