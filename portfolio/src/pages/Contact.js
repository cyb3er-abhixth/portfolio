// src/pages/Contact.js
import React from 'react';
import 'aos/dist/aos.css';
import './Contact.css';

const Contact = () => {
  return (
    <section>
      <div className="contact-container">
        <div className="contact" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
          <div className="contact-title">
            Contact <span>Me</span>
          </div>
          <div className="contact-subtitle">
            I'm always open to discussing product design work or partnerships. Let's talk.
          </div>
          <div className="contact-info">
            <div className="info">
              <i className="fa-solid fa-location-dot"></i>
              <div className="info-text">
                <div className="info-title">Address</div>
                <div className="info-subtitle">Ras Al Khaimah, United Arab Emirates</div>
              </div>
            </div>
            <div className="info">
              <i className="fa-solid fa-phone"></i>
              <div className="info-text">
                <div className="info-title">Phone</div>
                <div className="info-subtitle">
                  <a href="tel:+971581859002" style={{ color: 'inherit', textDecoration: 'none' }}>+971 581859002</a>
                </div>
              </div>
            </div>
            <div className="info">
              <i className="fa-solid fa-envelope"></i>
              <div className="info-text">
                <div className="info-title">Email</div>
                <div className="info-subtitle">
                  <a 
                    href="mailto:abhinav13347@indianschoolrak.com"
                    style={{ color: '#2563eb', textDecoration: 'underline', background: 'none', fontWeight: 600 }}
                    onClick={e => e.stopPropagation()}
                  >
                    abhinav13347@indianschoolrak.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;