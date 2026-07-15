
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
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-50 p-4 md:p-8"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-[#0c1839] rounded-2xl shadow-2xl border border-[#F97316]/30 w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col lg:flex-row transform transition-all scale-95 opacity-0 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
        style={{ animationFillMode: 'forwards' }}
      >
        {/* Left Side: Images */}
        <div className="lg:w-3/5 relative bg-black flex-shrink-0 overflow-hidden max-h-[50vh] lg:max-h-none flex items-center justify-center">
          <img src={apartment.image} alt={`Render Interior Tipo ${apartment.type}`} className="w-full h-full object-cover" loading="lazy" />
        </div>

        {/* Right Side: Details */}
        <div className="lg:w-2/5 p-8 lg:p-12 overflow-y-auto max-h-[40vh] lg:max-h-none flex flex-col justify-center">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold text-[#F97316] font-sans">Tipo {apartment.type}</h3>
              <span className="text-xl lg:text-2xl font-semibold text-gray-200 mt-2 block">{apartment.size}</span>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-white text-4xl leading-none transition-colors p-2 -mr-4 -mt-4 bg-white/5 rounded-full hover:bg-white/10 w-12 h-12 flex items-center justify-center"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
          
          <p className="text-3xl lg:text-4xl font-bold text-white mb-8 border-b border-white/10 pb-6">{apartment.price}</p>
          
          <div className="space-y-6">
            <h4 className="text-xl text-[#F97316] font-semibold">Características:</h4>
            <ul className="space-y-3 text-gray-300 text-base lg:text-lg">
              {apartment.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-[#F97316] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-10">
            <a href="#contact" onClick={onClose} className="block w-full text-center bg-[#F97316] hover:bg-orange-600 text-white font-bold py-4 rounded-full transition-colors shadow-lg shadow-orange-500/20">
              Solicitar Información
            </a>
          </div>
        </div>

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
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.3);
          }
        `}</style>
      </div>
    </div>
  );
};

export default ApartmentModal;