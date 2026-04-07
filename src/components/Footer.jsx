import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, Facebook, ArrowUp, Dumbbell } from 'lucide-react';
import './Footer.css';

const quickLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Contact', href: '#contact' },
];

const programs = [
  'Weight Training',
  'Cardio Training',
  'Personal Training',
  'Yoga & Zumba',
  'CrossFit',
  'Nutrition',
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <div className="footer__logo">
                <Dumbbell size={32} />
                <span>Titan<span className="footer__logo-accent">Fitness</span></span>
              </div>
              <p className="footer__description">
                Transform your body, transform your life. Join the best fitness community 
                and start your journey to a healthier, stronger you today.
              </p>
              <div className="footer__socials">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="footer__social"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Quick Links</h4>
              <ul className="footer__links">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="footer__link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Programs</h4>
              <ul className="footer__links">
                {programs.map((program) => (
                  <li key={program}>
                    <span className="footer__link">{program}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Newsletter</h4>
              <p className="footer__newsletter-text">
                Subscribe to get fitness tips and exclusive offers.
              </p>
              <form className="footer__newsletter" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="footer__newsletter-input"
                />
                <button type="submit" className="footer__newsletter-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-container">
          <p className="footer__copyright">
            2024 Titan Fitness Gym. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="footer__scroll-top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
