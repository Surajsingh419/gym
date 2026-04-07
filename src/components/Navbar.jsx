import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Dumbbell } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
    >
      <div className="container navbar__container">
        <a href="#hero" className="navbar__logo" onClick={() => scrollToSection('#hero')}>
          <Dumbbell className="navbar__logo-icon" />
          <span className="navbar__logo-text">
            Titan<span className="navbar__logo-accent">Fitness</span>
          </span>
        </a>

        <div className={`navbar__links ${isMobileMenuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="navbar__link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
            >
              {link.name}
            </a>
          ))}
          <button
            className="navbar__cta"
            onClick={() => scrollToSection('#contact')}
          >
            Join Now
          </button>
        </div>

        <button
          className="navbar__mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
