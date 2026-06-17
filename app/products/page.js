"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import ProductCard from '@/components/ProductCard';
import productsData from '@/data/products.json';
import './ProductsPage.css';

function ProductsList() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('category');
  
  const displayedProducts = categoryFilter 
    ? productsData.filter(p => p.category === categoryFilter)
    : productsData;

  return (
    <>
      <div className="page-header">
        <h1>{categoryFilter ? `${categoryFilter}` : 'All Products'}</h1>
        <p>Explore our wide selection of premium audio equipment.</p>
      </div>
      
      <div className="products-grid">
        {displayedProducts.length > 0 ? (
          displayedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="no-products">
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default function ProductsPage() {
  return (
    <div className="products-page container">
      <Suspense fallback={<div className="page-header">Loading products...</div>}>
        <ProductsList />
      </Suspense>
    </div>
  );
}
