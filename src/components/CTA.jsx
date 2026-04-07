import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cta__content"
        >
          <div className="cta__glow" />
          
          <div className="cta__badge">
            <Sparkles size={18} />
            <span>Limited Time Offer</span>
          </div>
          
          <h2 className="cta__title">
            Start Your Fitness Journey Today
          </h2>
          
          <p className="cta__description">
            Join now and get 50% off your first month + free personal training session. 
            Do not wait to become the best version of yourself.
          </p>
          
          <div className="cta__buttons">
            <a 
              href="https://wa.me/1234567890?text=Hi%20Titan%20Fitness!%20I'm%20interested%20in%20joining%20your%20gym." 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta__button cta__button--primary"
            >
              Join Now on WhatsApp
              <ArrowRight size={20} />
            </a>
            <button className="cta__button cta__button--secondary">
              Schedule a Tour
            </button>
          </div>
          
          <div className="cta__stats">
            <div className="cta__stat">
              <span className="cta__stat-number">50%</span>
              <span className="cta__stat-label">First Month Off</span>
            </div>
            <div className="cta__stat-divider" />
            <div className="cta__stat">
              <span className="cta__stat-number">FREE</span>
              <span className="cta__stat-label">Training Session</span>
            </div>
            <div className="cta__stat-divider" />
            <div className="cta__stat">
              <span className="cta__stat-number">0</span>
              <span className="cta__stat-label">Hidden Fees</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
