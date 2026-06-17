import './FeaturesSection.css';
import Link from 'next/link';

import { Truck, MapPin, ShieldCheck } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section className="features-section container">
      <div className="features-container">
        <h2 className="features-heading">Experience Streamlined<br/>Shopping With Crescendo</h2>
        
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon"><Truck size={40} strokeWidth={1.5} /></div>
            <h4 className="feature-title">Global Delivery</h4>
            <p className="feature-desc">Enjoy fast, fully-insured shipping on all orders worldwide, ensuring your premium audio equipment arrives safely.</p>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon"><MapPin size={40} strokeWidth={1.5} /></div>
            <h4 className="feature-title">In-Store Pickup</h4>
            <p className="feature-desc">Select locations offer convenient same-day pickup. Experience our pristine audio environments in person.</p>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon"><ShieldCheck size={40} strokeWidth={1.5} /></div>
            <h4 className="feature-title">Extended Warranty</h4>
            <p className="feature-desc">Every product is backed by our comprehensive coverage and dedicated customer support team.</p>
          </div>
        </div>
        
        <div className="features-action">
          <Link href="/products" className="btn btn-primary">Shop Now</Link>
        </div>
      </div>
    </section>
  );
}
