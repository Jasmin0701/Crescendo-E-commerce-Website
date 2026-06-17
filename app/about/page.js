import { Headphones, ShieldCheck, Zap } from 'lucide-react';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page container">
      <div className="about-hero">
        <h1>Elevating Audio Experiences</h1>
        <p>Since 2026, Crescendo has been dedicated to providing premium, high-fidelity sound equipment to audiophiles worldwide.</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>At Crescendo, we believe that sound is more than just hearing—it's about feeling. Our mission is to bridge the gap between artist intent and listener experience by curating only the highest caliber audio equipment.</p>
          <p>We work tirelessly to source innovative, beautifully designed, and acoustically perfect products that fit seamlessly into your lifestyle, whether you're commuting, working in the studio, or relaxing at home.</p>
        </div>
        <div className="about-image-wrapper">
          <img src="https://images.unsplash.com/photo-1599839619722-39751411ea63?w=800&q=80" alt="Professional studio headphones" />
        </div>
      </div>

      <div className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <Headphones size={40} className="value-icon" />
            <h3>Acoustic Excellence</h3>
            <p>We refuse to compromise on sound quality. Every product in our catalog meets strict acoustic standards.</p>
          </div>
          <div className="value-card">
            <Zap size={40} className="value-icon" />
            <h3>Innovation</h3>
            <p>We embrace cutting-edge technology that enhances, rather than complicates, the listening experience.</p>
          </div>
          <div className="value-card">
            <ShieldCheck size={40} className="value-icon" />
            <h3>Uncompromising Quality</h3>
            <p>From the materials used in manufacturing to our post-purchase support, quality is our north star.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
