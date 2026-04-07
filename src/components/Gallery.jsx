import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import './Gallery.css';

const transformations = [
  {
    id: 1,
    name: 'John Mitchell',
    duration: '6 Months',
    weightLost: '25 kg',
    before: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80',
    after: 'https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=400&q=80',
    quote: 'Titan Fitness changed my life. The trainers pushed me to achieve what I thought was impossible.',
  },
  {
    id: 2,
    name: 'Lisa Anderson',
    duration: '4 Months',
    weightLost: '18 kg',
    before: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&q=80',
    after: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80',
    quote: 'The personalized training program was exactly what I needed to reach my goals.',
  },
  {
    id: 3,
    name: 'Mike Thompson',
    duration: '8 Months',
    weightLost: '30 kg',
    before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
    after: 'https://images.unsplash.com/photo-1583454155184-870a1f63aebc?w=400&q=80',
    quote: 'Best decision I ever made. The community here is incredibly supportive.',
  },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const nextSlide = () => {
    setSelectedIndex((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setSelectedIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  return (
    <section id="gallery" className="gallery section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gallery__header"
        >
          <span className="gallery__subtitle">Success Stories</span>
          <h2 className="gallery__title">
            Transformation <span className="gallery__title-accent">Gallery</span>
          </h2>
          <p className="gallery__description">
            Real results from real members. See the amazing transformations achieved at Titan Fitness.
          </p>
        </motion.div>

        <div className="gallery__grid">
          {transformations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="transformation-card"
              onClick={() => openModal(index)}
            >
              <div className="transformation-card__images">
                <div className="transformation-card__image-wrapper">
                  <span className="transformation-card__label transformation-card__label--before">Before</span>
                  <img src={item.before} alt={`${item.name} before`} />
                </div>
                <div className="transformation-card__image-wrapper">
                  <span className="transformation-card__label transformation-card__label--after">After</span>
                  <img src={item.after} alt={`${item.name} after`} />
                </div>
              </div>
              <div className="transformation-card__info">
                <h3 className="transformation-card__name">{item.name}</h3>
                <div className="transformation-card__stats">
                  <span className="transformation-card__stat">
                    <strong>{item.duration}</strong>
                    <small>Duration</small>
                  </span>
                  <span className="transformation-card__stat">
                    <strong>{item.weightLost}</strong>
                    <small>Weight Lost</small>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="gallery__modal"
            onClick={closeModal}
          >
            <button className="gallery__modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            
            <button className="gallery__modal-nav gallery__modal-nav--prev" onClick={(e) => { e.stopPropagation(); prevSlide(); }}>
              <ChevronLeft size={32} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="gallery__modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="gallery__modal-images">
                <div className="gallery__modal-image-wrapper">
                  <span className="gallery__modal-label">Before</span>
                  <img src={transformations[selectedIndex].before} alt="Before" />
                </div>
                <div className="gallery__modal-image-wrapper">
                  <span className="gallery__modal-label gallery__modal-label--after">After</span>
                  <img src={transformations[selectedIndex].after} alt="After" />
                </div>
              </div>
              <div className="gallery__modal-info">
                <h3>{transformations[selectedIndex].name}</h3>
                <p className="gallery__modal-quote">"{transformations[selectedIndex].quote}"</p>
                <div className="gallery__modal-stats">
                  <span>{transformations[selectedIndex].duration}</span>
                  <span>{transformations[selectedIndex].weightLost} lost</span>
                </div>
              </div>
            </motion.div>
            
            <button className="gallery__modal-nav gallery__modal-nav--next" onClick={(e) => { e.stopPropagation(); nextSlide(); }}>
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
