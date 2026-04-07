import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Heart, UserCheck, Sparkles, ArrowRight } from 'lucide-react';
import './Programs.css';

const programs = [
  {
    icon: Dumbbell,
    title: 'Weight Training',
    description: 'Build strength and muscle with our comprehensive weight training programs designed by experts.',
    duration: '45-60 min',
    level: 'All Levels',
  },
  {
    icon: Heart,
    title: 'Cardio Training',
    description: 'Improve your cardiovascular health and burn calories with high-intensity cardio sessions.',
    duration: '30-45 min',
    level: 'All Levels',
  },
  {
    icon: UserCheck,
    title: 'Personal Training',
    description: 'Get personalized attention with one-on-one sessions tailored to your specific fitness goals.',
    duration: '60 min',
    level: 'Custom',
  },
  {
    icon: Sparkles,
    title: 'Yoga & Zumba',
    description: 'Find balance and flexibility with yoga, or dance your way to fitness with energetic Zumba classes.',
    duration: '45 min',
    level: 'All Levels',
  },
];

const Programs = () => {
  return (
    <section id="programs" className="programs section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="programs__header"
        >
          <span className="programs__subtitle">Our Programs</span>
          <h2 className="programs__title">
            What We <span className="programs__title-accent">Offer</span>
          </h2>
          <p className="programs__description">
            Choose from our diverse range of fitness programs designed to help you achieve your goals.
          </p>
        </motion.div>

        <div className="programs__grid">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="program-card"
            >
              <div className="program-card__icon">
                <program.icon size={32} />
              </div>
              <h3 className="program-card__title">{program.title}</h3>
              <p className="program-card__description">{program.description}</p>
              <div className="program-card__meta">
                <span className="program-card__badge">{program.duration}</span>
                <span className="program-card__badge">{program.level}</span>
              </div>
              <button className="program-card__cta">
                Learn More
                <ArrowRight size={16} />
              </button>
              <div className="program-card__glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
