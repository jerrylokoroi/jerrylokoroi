import { personalInfo } from '../data/personalInfo';

/**
 * WhatsAppButton Component
 * 
 * A floating button that opens WhatsApp chat with the configured phone number.
 * Supports both mobile app and web fallback.
 * 
 * Features:
 * - Fixed position (bottom-right, above scroll-top button)
 * - Accessible (keyboard navigation, ARIA labels)
 * - Responsive design
 * - Matches site design system
 */
const WhatsAppButton = () => {
  // Get WhatsApp configuration
  const { phone, defaultMessage } = personalInfo.whatsapp;

  // Build WhatsApp URL
  // Format: https://wa.me/[country code][phone number]?text=[URL-encoded message]
  const buildWhatsAppUrl = () => {
    // Remove any non-digit characters from phone number
    const cleanPhone = phone.replace(/\D/g, '');
    
    // URL-encode the message
    const encodedMessage = encodeURIComponent(defaultMessage);
    
    // Construct WhatsApp URL
    return `https://wa.me/${cleanPhone}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
  };

  const handleClick = (e) => {
    // Allow default link behavior to handle WhatsApp app/web detection
    // No need to preventDefault - let the browser handle it
  };

  const handleKeyDown = (e) => {
    // Allow Enter and Space to trigger the link
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.currentTarget.click();
    }
  };

  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button d-flex align-items-center justify-content-center"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label="Start a conversation on WhatsApp"
      title="Chat with me on WhatsApp"
    >
      <i className="bi bi-whatsapp" aria-hidden="true"></i>
    </a>
  );
};

export default WhatsAppButton;
