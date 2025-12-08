
import React, { useState, useEffect } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// =================================================================================
// PASO FINAL: Pega aquí la URL de tu aplicación web de Google Apps Script.
// Reemplaza la línea de abajo con la URL que copiaste en el paso anterior.
// Ejemplo: const SCRIPT_URL = 'https://script.google.com/macros/s/ABCD.../exec';
// =================================================================================
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzL9usRdV7OQtmYXRG3oWAqy3A_H1SVN8DUwhAU3uDdyvcXTWEo-opXuouaDAXRnMiq/exec'; 

// FIX: Correctly type the component props using React.FC<ContactModalProps>
const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);
  
  const handleClose = () => {
    setName('');
    setEmail('');
    setPhone('');
    setErrors({});
    setIsSubmitted(false);
    setIsSubmitting(false);
    setSubmitError(null);
    onClose();
  };

  const validate = () => {
    const newErrors: { name?: string; email?: string; phone?: string } = {};
    if (!name.trim()) newErrors.name = 'El nombre completo es obligatorio.';
    if (!email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'El correo electrónico no es válido.';
    }
    if (!phone.trim()) newErrors.phone = 'El número de teléfono es obligatorio.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    
    // FIX: Removed redundant check. Since SCRIPT_URL is a const with a value, this check always fails at compile time, causing an error.
    // The check was meant as a reminder for developers, but is not needed now.

    setIsSubmitting(true);
    setSubmitError(null);

    const formData = { name, email, phone };

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8', // Apps Script a veces funciona mejor con text/plain
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.result === 'success') {
        setIsSubmitted(true);
      } else {
        throw new Error(result.message || 'Ocurrió un error desconocido.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('No se pudo enviar el formulario. Por favor, inténtelo de nuevo más tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-[#0c1839] rounded-2xl shadow-2xl p-8 border-2 border-[#F97316]/50 w-full max-w-lg transform transition-all scale-95 opacity-0 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
        style={{ animationFillMode: 'forwards' }}
      >
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-3xl font-bold text-[#F97316] font-sans">
            {isSubmitted ? '¡Gracias!' : 'Solicitar Información'}
          </h3>
          <button 
            onClick={handleClose} 
            className="text-gray-400 hover:text-white text-5xl leading-none transition-colors p-2 -mr-2 -mt-2"
            aria-label="Cerrar modal"
          >
            &times;
          </button>
        </div>
        
        {isSubmitted ? (
          <div className="text-center py-8">
             <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p className="text-lg text-gray-200 mt-4">
              Uno de nuestros asesores le estará contactando lo más pronto posible.
            </p>
            <button
              onClick={handleClose}
              className="mt-8 bg-blue-800/70 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-3 text-white focus:ring-orange-500 focus:border-orange-500 transition"
                  required
                  aria-required="true"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-3 text-white focus:ring-orange-500 focus:border-orange-500 transition"
                  required
                  aria-required="true"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Teléfono / WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-3 text-white focus:ring-orange-500 focus:border-orange-500 transition"
                  required
                  aria-required="true"
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            {submitError && <p className="text-red-400 text-sm mt-4 text-center">{submitError}</p>}
            
            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center bg-[#F97316] text-white font-bold py-3 px-4 rounded-md hover:bg-orange-600 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors duration-300"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  'Enviar Solicitud'
                )}
              </button>
            </div>
          </form>
        )}
        <style>{`
          @keyframes fade-in-scale {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .animate-fade-in-scale { animation: fade-in-scale 0.3s ease-out; }
        `}</style>
      </div>
    </div>
  );
};

export default ContactModal;