// Modal.js
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-60">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="flex items-center justify-center mb-">
          <FaCheckCircle className="text-green-500 w-12 h-12" />
        </div>
        <h2 className="text-2xl font-bold">Message Sent!</h2>
        <p className="text-gray-700 mb-6">{message}</p>
        <button 
          onClick={onClose} 
          className="bg-[#EA6E54] w-full text-white px-6 py-3 rounded-lg hover:bg-[#F3A183] transition-colors duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
