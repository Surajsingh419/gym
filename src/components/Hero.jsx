import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
        <div className="hero__gradient-overlay" />
        <div className="hero__grid-pattern" />
      </div>

      <div className="container hero__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero__content"
        >
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span>#1 Fitness Gym in City</span>
          </div>

          <h1 className="hero__title">
            Transform Your Body,
            <br />
            <span className="hero__title-gradient">Transform Your Life</span>
          </h1>

          <p className="hero__subtitle">
            Join the best fitness gym in your city. Experience world-class training, 
            state-of-the-art equipment, and expert guidance to achieve your fitness goals.
          </p>

          <div className="hero__cta-group">
            <button 
              className="hero__cta hero__cta--primary"
              onClick={() => scrollToSection('#contact')}
            >
              Join Now
              <ArrowRight size={20} />
            </button>
            <button 
              className="hero__cta hero__cta--secondary"
              onClick={() => scrollToSection('#about')}
            >
              <Play size={20} />
              Free Trial
            </button>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">10K+</span>
              <span className="hero__stat-label">Active Members</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">50+</span>
              <span className="hero__stat-label">Expert Trainers</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">15+</span>
              <span className="hero__stat-label">Years Experience</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero__image-wrapper"
        >
          <div className="hero__image-glow" />
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
            alt="Fitness Training"
            className="hero__image"
          />
          <div className="hero__floating-card hero__floating-card--1">
            <span className="hero__floating-icon">🔥</span>
            <div>
              <div className="hero__floating-title">500+</div>
              <div className="hero__floating-subtitle">Calories Burned</div>
            </div>
          </div>
          <div className="hero__floating-card hero__floating-card--2">
            <span className="hero__floating-icon">💪</span>
            <div>
              <div className="hero__floating-title">100%</div>
              <div className="hero__floating-subtitle">Results Guaranteed</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
