import React from 'react';

interface ContactSectionProps {
  onOpenModal: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onOpenModal }) => {
  return (
    <section id="contact" className="text-center py-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-sans">¿Interesado en saber más?</h2>
        <p className="text-gray-300 mb-8">
          Haga clic en el botón de abajo para solicitar más información. Nuestro equipo de asesores se pondrá en contacto con usted a la brevedad.
        </p>
        <button
          onClick={onOpenModal}
          className="bg-[#F97316] text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg shadow-orange-500/20"
          aria-label="Abrir formulario para más información"
        >
          Más Información Aquí
        </button>
      </div>
    </section>
  );
};

export default ContactSection;