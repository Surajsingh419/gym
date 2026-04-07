import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Dumbbell, Target } from 'lucide-react';
import './About.css';

const features = [
  {
    icon: Award,
    title: 'Certified Trainers',
    description: 'Our team of certified fitness professionals ensures you get expert guidance.',
  },
  {
    icon: Dumbbell,
    title: 'Modern Equipment',
    description: 'State-of-the-art fitness equipment from leading global brands.',
  },
  {
    icon: Users,
    title: 'Personal Training',
    description: 'One-on-one personalized training sessions tailored to your goals.',
  },
  {
    icon: Target,
    title: 'Goal Tracking',
    description: 'Advanced progress tracking and goal setting with our fitness app.',
  },
];

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="about__grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about__image-wrapper"
          >
            <div className="about__image-glow" />
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80"
              alt="Modern Gym Equipment"
              className="about__image"
            />
            <div className="about__experience-badge">
              <span className="about__experience-number">15+</span>
              <span className="about__experience-text">Years of<br/>Excellence</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about__content"
          >
            <span className="about__subtitle">About Us</span>
            <h2 className="about__title">
              We Are The Best
              <span className="about__title-accent"> Fitness Gym</span>
            </h2>
            <p className="about__description">
              Titan Fitness Gym has been transforming lives since 2009. We believe fitness is not just about 
              physical strength, but about building mental resilience and creating a lifestyle of wellness. 
              Our state-of-the-art facility combines cutting-edge equipment with expert trainers to deliver 
              unparalleled fitness experiences.
            </p>
            <p className="about__description">
              Whether you are a beginner taking your first steps or an athlete pushing limits, 
              we have the programs, support, and environment you need to succeed.
            </p>

            <div className="about__features">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="about__feature"
                >
                  <div className="about__feature-icon">
                    <feature.icon size={24} />
                  </div>
                  <div className="about__feature-content">
                    <h3 className="about__feature-title">{feature.title}</h3>
                    <p className="about__feature-description">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
