
import React from 'react';
import type { ApartmentType } from '../types';

interface ApartmentModalProps {
  apartment: ApartmentType;
  onClose: () => void;
}

const ApartmentModal: React.FC<ApartmentModalProps> = ({ apartment, onClose }) => {
  // Add an effect to handle the Escape key to close the modal
  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!apartment) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-[#0c1839] rounded-2xl shadow-2xl p-8 border-2 border-[#F97316]/50 w-full max-w-2xl transform transition-all scale-95 opacity-0 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
        style={{ animationFillMode: 'forwards' }}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-5xl font-bold text-[#F97316] font-sans">Tipo {apartment.type}</h3>
            <span className="text-2xl font-semibold text-gray-200 mt-1 block">{apartment.size}</span>
          </div>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white text-5xl leading-none transition-colors p-2 -mr-2 -mt-2"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        <p className="text-3xl font-bold text-white mb-8">{apartment.price}</p>
        <ul className="space-y-3 text-gray-300 text-lg">
          {apartment.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-5 h-5 mr-3 text-[#F97316] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <style>{`
          @keyframes fade-in-scale {
            from {
              transform: scale(0.95);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
          .animate-fade-in-scale {
            animation: fade-in-scale 0.3s ease-out;
          }
        `}</style>
      </div>
    </div>
  );
};

export default ApartmentModal;