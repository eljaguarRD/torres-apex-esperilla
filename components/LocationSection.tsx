import React from 'react';
import ImageCarousel from './ImageCarousel';

const galleryImages = [
    { src: 'https://i.postimg.cc/3NTJ3DwP/videoframe-4985.png', alt: 'Cocina de diseño con acabados de alta calidad.' },
    { src: 'https://i.postimg.cc/cJvVQrP3/26455a66_63c1_40ff_ba2d_7fcab9b189b9.jpg', alt: 'Interior de un apartamento modelo mostrando la sala de estar y balcón.' },
    { src: 'https://i.postimg.cc/W4dQMhxS/videoframe_5632.png', alt: 'Cocina de diseño con acabados de alta calidad y concepto abierto.' },
    { src: 'https://i.postimg.cc/XYHRGw1c/videoframe_4985.png', alt: 'Dormitorio principal espacioso y luminoso con vistas a la ciudad.' },
    { src: 'https://i.postimg.cc/MGnhyvg7/videoframe_3811.png', alt: 'Baño moderno con detalles de lujo y diseño minimalista.' },
    { src: 'https://i.postimg.cc/RZsk6cpS/92694e4f_ecde_4fb4_965e_e45ed6105336.jpg', alt: 'Terraza exterior con mobiliario de exterior y vistas panorámicas.' },
    { src: 'https://i.postimg.cc/T37zLrNn/85035f7e_eb67_4e73_aacd_79bedc0a498a.jpg', alt: 'Lobby de entrada con diseño sofisticado y doble altura.' },
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