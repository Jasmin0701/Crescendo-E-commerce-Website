"use client";

import { use, useState } from 'react';
import productsData from '@/data/products.json';
import { useCart } from '@/context/CartContext';
import { Truck, ShieldCheck, Undo2, Check } from 'lucide-react';
import './ProductDetail.css';

export default function ProductDetailPage({ params }) {
  // Use React.use() to unwrap the params promise in Next.js 15+
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  
  const product = productsData.find(p => p.id === id);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) {
    return <div className="container" style={{padding: '100px 0', textAlign: 'center'}}><h2>Product not found</h2></div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-detail-page container">
      <div className="product-detail-grid">
        <div className="product-detail-image-wrapper">
          <img src={product.image} alt={product.name} className="product-detail-image" />
        </div>
        
        <div className="product-detail-info">
          <div className="category-badge">{product.category}</div>
          <h1 className="product-detail-title">{product.name}</h1>
          <p className="product-detail-price">${product.price.toFixed(2)} USD</p>
          
          <div className="product-detail-description">
            <p>{product.description}</p>
            <p>Experience superior sound quality and comfort. Designed for the modern audiophile who demands the best from their equipment. Whether you're commuting, working out, or relaxing at home, this product delivers exceptional performance.</p>
          </div>
          
          <div className="product-detail-actions">
            <button 
              className={`btn ${added ? 'btn-success' : 'btn-primary'} btn-large`} 
              onClick={handleAddToCart}
            >
              {added ? <><Check size={20} style={{marginRight: '8px'}}/> Added to Cart</> : 'Add to Cart'}
            </button>
          </div>
          
          <div className="product-perks">
            <div className="perk">
              <Truck size={20} className="perk-icon" /> Free worldwide shipping
            </div>
            <div className="perk">
              <ShieldCheck size={20} className="perk-icon" /> 1 Year Warranty
            </div>
            <div className="perk">
              <Undo2 size={20} className="perk-icon" /> 30-Day Returns
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
