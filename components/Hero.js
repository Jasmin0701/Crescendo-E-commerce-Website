"use client";

import Link from 'next/link';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-content">
        <h1>Elevate Your Audio Journey</h1>
        <p>
          Experience Sound In Its Purest Form. Morbi Justo Sem, Venenatis Sit Amet Tortor Id,
          Porttitor Facilisis Metus. Ut Scelerisque MaurisVivamus Fringilla Elit Eu Felis Iaculis
          Cursus.
        </p>
        <div className="hero-actions">
          <Link href="/products" className="btn btn-primary">Shop Now</Link>
          <Link href="/about" className="btn btn-outline">Learn More</Link>
        </div>
      </div>
      <div className="hero-image-container">
        {/* We use a placeholder image resembling the UI person with headphones */}
        <img 
          src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80" 
          alt="Person listening to music" 
          className="hero-image"
        />
      </div>
    </section>
  );
}
