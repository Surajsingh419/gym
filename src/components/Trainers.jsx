import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Award } from 'lucide-react';
import './Trainers.css';

const trainers = [
  {
    name: 'Marcus Johnson',
    role: 'Head Strength Coach',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80',
    certifications: ['NASM-CPT', 'CrossFit L3'],
    specialty: 'Strength & Conditioning',
  },
  {
    name: 'Sarah Williams',
    role: 'Yoga & Pilates Instructor',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80',
    certifications: ['RYT-500', 'Pilates Mat'],
    specialty: 'Flexibility & Mindfulness',
  },
  {
    name: 'David Chen',
    role: 'Personal Trainer',
    image: 'https://images.unsplash.com/photo-1597347343908-2937e7dcc560?w=400&q=80',
    certifications: ['ACE-CPT', 'NASM-PES'],
    specialty: 'Body Transformation',
  },
  {
    name: 'Emma Rodriguez',
    role: 'HIIT & Cardio Specialist',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
    certifications: ['ACSM-EP', 'TRX Certified'],
    specialty: 'High-Intensity Training',
  },
];

const Trainers = () => {
  return (
    <section id="trainers" className="trainers section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="trainers__header"
        >
          <span className="trainers__subtitle">Expert Trainers</span>
          <h2 className="trainers__title">
            Meet Our <span className="trainers__title-accent">Team</span>
          </h2>
          <p className="trainers__description">
            Certified professionals dedicated to helping you achieve your fitness goals.
          </p>
        </motion.div>

        <div className="trainers__grid">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="trainer-card"
            >
              <div className="trainer-card__image-wrapper">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="trainer-card__image"
                />
                <div className="trainer-card__overlay">
                  <div className="trainer-card__socials">
                    <a href="#" className="trainer-card__social">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="trainer-card__social">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="trainer-card__content">
                <h3 className="trainer-card__name">{trainer.name}</h3>
                <p className="trainer-card__role">{trainer.role}</p>
                
                <div className="trainer-card__certs">
                  <Award size={14} />
                  <span>{trainer.certifications.join(' • ')}</span>
                </div>

                <div className="trainer-card__specialty">
                  <span>{trainer.specialty}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
