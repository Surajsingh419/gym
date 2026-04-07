import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '1234567890';
  const message = 'Hi Titan Fitness! I am interested in joining your gym.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="whatsapp-button__icon">
        <MessageCircle size={28} fill="currentColor" />
      </div>
      <span className="whatsapp-button__tooltip">Chat with us</span>
    </motion.a>
  );
};

export default WhatsAppButton;
