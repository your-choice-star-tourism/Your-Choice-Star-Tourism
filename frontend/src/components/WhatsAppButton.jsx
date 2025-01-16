import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <>
    <a href="https://wa.me/message/F66GBTRCPAIUH1 "
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-12 right-12 bg-[#25D366] hover:bg-[#20BA56] text-white rounded-full p-3 shadow-xl z-50 transition-transform duration-300 hover:scale-110 flex items-center justify-center"
    style={{ width: '50px', height: '50px' }}>
    <FaWhatsapp size={30} />
    </a>
      </>
  );
};

export default WhatsAppButton;
