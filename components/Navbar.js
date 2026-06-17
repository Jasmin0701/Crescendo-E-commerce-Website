"use client";

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { ShoppingBag } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const { cartCount } = useCart();
  const { user, logout } = useAuth();

  return (
    <nav className="navbar container">
      <div className="navbar-logo">
        <Link href="/">
          <strong>CRESCENDO</strong>
        </Link>
      </div>
      <div className="navbar-links">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link href="/find-us">Find us</Link>
        <Link href="/products">Pages</Link>
      </div>
      <div className="navbar-actions">
        <Link href="/cart" className="cart-icon" aria-label="Cart">
          <ShoppingBag size={24} strokeWidth={1.5} />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
        {user ? (
          <div className="auth-actions">
            <span style={{marginRight: '15px'}}>Hi, {user.name}</span>
            <button className="btn btn-outline" onClick={logout} style={{color: 'black', border: '1px solid #ccc'}}>Logout</button>
          </div>
        ) : (
          <Link href="/login" className="btn btn-primary">Login</Link>
        )}
      </div>
    </nav>
  );
}
