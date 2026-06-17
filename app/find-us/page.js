import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './FindUsPage.css';

export default function FindUsPage() {
  return (
    <div className="find-us-page container">
      <div className="page-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Visit our flagship store or reach out to our support team.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon"><MapPin size={24} /></div>
            <div>
              <h3>Visit Us</h3>
              <p>123 Audio Boulevard<br/>Suite 400<br/>New York, NY 10001</p>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon"><Phone size={24} /></div>
            <div>
              <h3>Call Us</h3>
              <p>+1 (800) 555-0199<br/>Mon-Fri, 9am to 6pm EST</p>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon"><Mail size={24} /></div>
            <div>
              <h3>Email Us</h3>
              <p>support@crescendoaudio.com<br/>sales@crescendoaudio.com</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon"><Clock size={24} /></div>
            <div>
              <h3>Store Hours</h3>
              <p>Monday - Saturday: 10am - 8pm<br/>Sunday: 11am - 6pm</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" required></textarea>
            </div>
            <button type="button" className="btn btn-primary submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
