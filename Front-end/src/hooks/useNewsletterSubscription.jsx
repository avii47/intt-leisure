// hooks/useNewsletterSubscription.js
import { useState } from 'react';
import { subscribeToNewsletter } from '../utils/newsletterSubscribe';

export const useNewsletterSubscription = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault(); 
    if (email) {
      await subscribeToNewsletter(email, setShowModal);
    } else {
      console.error("Email is required for subscription.");
    }
  };

  return {
    email,
    setEmail,
    showModal,
    handleSubscribe,
    setShowModal
  };
};
