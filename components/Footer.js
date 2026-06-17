import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="footer-content">
        <div className="footer-logo">
          <strong>CRESCENDO</strong>
          <p>Elevating your audio journey since 2026.</p>
        </div>
        <div className="footer-links">
          <div className="link-group">
            <h4>Shop</h4>
            <Link href="/products">All Products</Link>
            <Link href="/products?category=Earbuds">Earbuds</Link>
            <Link href="/products?category=Headphones">Headphones</Link>
          </div>
          <div className="link-group">
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/find-us">Contact</Link>
            <Link href="#">Careers</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Crescendo. All rights reserved.</p>
      </div>
    </footer>
  );
}
