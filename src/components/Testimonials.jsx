import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Jennifer Martinez',
    role: 'Business Executive',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    rating: 5,
    text: 'Titan Fitness has completely transformed my lifestyle. The trainers are incredibly knowledgeable and the facilities are world-class. I have lost 20kg and gained so much confidence!',
  },
  {
    id: 2,
    name: 'Robert Kim',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    rating: 5,
    text: 'After sitting at a desk for years, I needed a change. The personal training program at Titan Fitness helped me build strength I never knew I had. Highly recommend!',
  },
  {
    id: 3,
    name: 'Amanda Foster',
    role: 'Marketing Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    rating: 5,
    text: 'The yoga and pilates classes here are exceptional. The instructors create such a welcoming environment. It is not just a gym, it is a community that supports each other.',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="testimonials__header"
        >
          <span className="testimonials__subtitle">Testimonials</span>
          <h2 className="testimonials__title">
            What Our <span className="testimonials__title-accent">Members</span> Say
          </h2>
          <p className="testimonials__description">
            Hear from our community of fitness enthusiasts who have transformed their lives.
          </p>
        </motion.div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="testimonial-card"
            >
              <div className="testimonial-card__quote">
                <Quote size={32} />
              </div>
              
              <div className="testimonial-card__rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="testimonial-card__star" fill="currentColor" />
                ))}
              </div>

              <p className="testimonial-card__text">{testimonial.text}</p>

              <div className="testimonial-card__author">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-card__avatar"
                />
                <div className="testimonial-card__info">
                  <h4 className="testimonial-card__name">{testimonial.name}</h4>
                  <p className="testimonial-card__role">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
