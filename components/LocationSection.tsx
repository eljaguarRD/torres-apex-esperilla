import React from 'react';
import ImageCarousel from './ImageCarousel';

const galleryImages = [
    { src: '/images/Sala%20Apto%20C%20Apex%20II%20Final.jpg', alt: 'Interior de un apartamento modelo mostrando la sala de estar moderna.' },
    { src: '/images/Cocina%20Apex%20II%20Final.jpg', alt: 'Cocina de diseño con acabados de alta calidad y concepto abierto.' },
    { src: '/images/Hab%20Apex%20II%20Final.jpg', alt: 'Dormitorio principal espacioso y luminoso con vistas a la ciudad.' },
    { src: '/images/Sala%20Apto%20D%20Apex%20II%20Final.jpg', alt: 'Acabados de lujo y diseño minimalista en áreas comunes.' },
    { src: '/images/Sala%20Apto%20E%20Apex%20II%20Final.jpg', alt: 'Sala familiar con iluminación natural.' },
];

const LocationSection: React.FC = () => {
  return (
    <section id="location" className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#F97316] font-sans">Ubicación y Estilo de Vida</h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Situado en el corazón de La Esperilla, el proyecto ofrece un acceso inigualable a un estilo de vida vibrante y sereno. A solo pasos del Parque Iberoamericano, un pulmón verde en la ciudad, y cerca de los mejores restaurantes, centros comerciales y servicios.
        </p>
      </div>
      <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl border-2 border-blue-700/50">
        <ImageCarousel images={galleryImages} />
      </div>
    </section>
  );
};

export default LocationSection;