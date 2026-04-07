import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: '123 Fitness Street, Gym City, GC 12345',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 (555) 123-4567',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@titanfitness.com',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Mon-Sat: 5AM - 11PM | Sun: 7AM - 9PM',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact__header"
        >
          <span className="contact__subtitle">Contact Us</span>
          <h2 className="contact__title">
            Get In <span className="contact__title-accent">Touch</span>
          </h2>
          <p className="contact__description">
            Have questions? We are here to help. Reach out to us through any of the channels below.
          </p>
        </motion.div>

        <div className="contact__grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact__info"
          >
            {contactInfo.map((item, index) => (
              <div key={item.title} className="contact__info-item">
                <div className="contact__info-icon">
                  <item.icon size={24} />
                </div>
                <div className="contact__info-content">
                  <h4 className="contact__info-title">{item.title}</h4>
                  <p className="contact__info-text">{item.content}</p>
                </div>
              </div>
            ))}

            <div className="contact__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.217676750695!2d-73.98784408459418!3d40.75797467932698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1645564756245!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gym Location"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact__form-wrapper"
          >
            <form className="contact__form">
              <h3 className="contact__form-title">Send us a Message</h3>
              
              <div className="contact__form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your fitness goals..."
                  required
                />
              </div>

              <button type="submit" className="contact__form-submit">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
