import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Lock, Car, Droplets, CupSoda, Wifi } from 'lucide-react';
import './Amenities.css';

const amenities = [
  {
    icon: Wind,
    name: 'AC',
    description: 'Fully air-conditioned facility',
  },
  {
    icon: Lock,
    name: 'Locker',
    description: 'Secure locker rooms with locks',
  },
  {
    icon: Car,
    name: 'Parking',
    description: 'Free parking available',
  },
  {
    icon: Droplets,
    name: 'Shower',
    description: 'Clean shower facilities',
  },
  {
    icon: CupSoda,
    name: 'Water Cooler',
    description: 'Drinking water available',
  },
  {
    icon: Wifi,
    name: 'WiFi',
    description: 'High-speed free WiFi',
  },
];

const Amenities = () => {
  return (
    <section className="amenities section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="amenities__header"
        >
          <h2 className="amenities__title">AMENITIES</h2>
        </motion.div>

        <div className="amenities__grid">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="amenity-card"
            >
              <div className="amenity-card__icon">
                <amenity.icon size={32} strokeWidth={1.5} />
              </div>
              <span className="amenity-card__name">{amenity.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="location__header"
        >
          <h2 className="amenities__title">LOCATION</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="location__map-wrapper"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7618927822363!2d77.1919!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMTEnMzAuOSJF!5e0!3m2!1sen!2sin!4v1645564756245!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '16px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Titan Fitness Location"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Amenities;
