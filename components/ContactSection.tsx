import React, { useState } from 'react';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzL9usRdV7OQtmYXRG3oWAqy3A_H1SVN8DUwhAU3uDdyvcXTWEo-opXuouaDAXRnMiq/exec';

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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

    setIsSubmitting(true);
    setSubmitError(null);

    const formData = { name, email, phone };

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.result === 'success') {
        window.location.href = '/thank-you.html';
      } else {
        throw new Error(result.message || 'Ocurrió un error desconocido.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('No se pudo enviar el formulario. Por favor, inténtelo de nuevo más tarde.');
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setErrors({});
    setIsSubmitted(false);
    setSubmitError(null);
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left side - Text */}
          <div className="lg:w-1/2 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-sans">
              <span className="block">¿Interesado</span>
              <span className="block">en saber más?</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Complete el formulario y nuestro equipo de asesores<br />
              se pondrá en contacto con usted a la brevedad.
            </p>
          </div>
          
          {/* Right side - Form */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-[#0c1839]/80 rounded-2xl shadow-2xl p-8 border border-[#F97316]/30 backdrop-blur-sm">
              {isSubmitted ? (
            <div className="text-center py-8">
              <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-2xl font-bold text-[#F97316] mt-4 font-sans">¡Gracias!</h3>
              <p className="text-lg text-gray-200 mt-4">
                Uno de nuestros asesores le estará contactando lo más pronto posible.
              </p>
              <button
                onClick={handleReset}
                className="mt-8 bg-blue-800/70 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-2">Nombre Completo</label>
                  <input
                    type="text"
                    id="contact-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-3 text-white focus:ring-orange-500 focus:border-orange-500 focus:outline-none focus:ring-2 transition"
                    required
                    aria-required="true"
                    placeholder="Ej: Juan Pérez"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-2">Correo Electrónico</label>
                  <input
                    type="email"
                    id="contact-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-3 text-white focus:ring-orange-500 focus:border-orange-500 focus:outline-none focus:ring-2 transition"
                    required
                    aria-required="true"
                    placeholder="Ej: juan@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-300 mb-2">Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-3 text-white focus:ring-orange-500 focus:border-orange-500 focus:outline-none focus:ring-2 transition"
                    required
                    aria-required="true"
                    placeholder="Ej: 809-555-1234"
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {submitError && <p className="text-red-400 text-sm mt-4 text-center">{submitError}</p>}
              
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center bg-[#F97316] text-white font-bold py-4 px-4 rounded-full hover:bg-orange-600 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-orange-500/20"
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
                    'Solicitar Información'
                  )}
                </button>
              </div>
            </form>
          )}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;