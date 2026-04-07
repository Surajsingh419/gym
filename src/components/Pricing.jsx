import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';
import './Pricing.css';

const plans = [
  {
    name: 'Basic',
    price: '29',
    period: '/month',
    description: 'Perfect for beginners starting their fitness journey',
    features: [
      'Access to gym equipment',
      'Locker room access',
      'Basic fitness assessment',
      'Group classes (2/week)',
      'Fitness app access',
    ],
    popular: false,
    cta: 'Get Started',
  },
  {
    name: 'Standard',
    price: '59',
    period: '/month',
    description: 'Most popular choice for serious fitness enthusiasts',
    features: [
      'All Basic features',
      'Unlimited group classes',
      '2 Personal training sessions/month',
      'Nutrition consultation',
      'Sauna & steam room access',
      'Guest passes (2/month)',
    ],
    popular: true,
    cta: 'Join Now',
  },
  {
    name: 'Premium',
    price: '99',
    period: '/month',
    description: 'The ultimate fitness experience with VIP perks',
    features: [
      'All Standard features',
      'Unlimited personal training',
      'Priority class booking',
      'Private locker',
      'Massage therapy sessions',
      '24/7 gym access',
      'Spa access',
    ],
    popular: false,
    cta: 'Go Premium',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pricing__header"
        >
          <span className="pricing__subtitle">Pricing Plans</span>
          <h2 className="pricing__title">
            Choose Your <span className="pricing__title-accent">Plan</span>
          </h2>
          <p className="pricing__description">
            Flexible membership options to fit your lifestyle and fitness goals.
          </p>
        </motion.div>

        <div className="pricing__grid">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`pricing-card ${plan.popular ? 'pricing-card--popular' : ''}`}
            >
              {plan.popular && (
                <div className="pricing-card__badge">
                  <Star size={14} />
                  Most Popular
                </div>
              )}
              
              <div className="pricing-card__header">
                <h3 className="pricing-card__name">{plan.name}</h3>
                <p className="pricing-card__description">{plan.description}</p>
              </div>

              <div className="pricing-card__price">
                <span className="pricing-card__currency">$</span>
                <span className="pricing-card__amount">{plan.price}</span>
                <span className="pricing-card__period">{plan.period}</span>
              </div>

              <ul className="pricing-card__features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="pricing-card__feature">
                    <Check size={18} className="pricing-card__check" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`pricing-card__cta ${plan.popular ? 'pricing-card__cta--popular' : ''}`}>
                {plan.popular && <Zap size={18} />}
                {plan.cta}
              </button>

              <div className="pricing-card__glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
