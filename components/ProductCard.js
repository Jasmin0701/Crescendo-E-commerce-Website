import Link from 'next/link';
import './ProductCard.css';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-title">{product.name}</h3>
        <span className="product-price">${product.price.toFixed(2)} USD</span>
      </div>
      <Link href={`/products/${product.id}`} className="product-link-overlay" aria-label={`View ${product.name}`}></Link>
    </div>
  );
}
