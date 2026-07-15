import React from 'react';

const amenitiesData = [
  {
    title: 'Piscina Recreativa & Carril de Natación',
    image: '/images/AS%20V1%20Apex%202%20Final.webp',
    className: 'md:col-span-2 md:row-span-2'
  },
  {
    title: 'Indoor Gym Profesional',
    image: '/images/Gym%20Apex%202%20Final.webp',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'Lounge Equipado & Terraza',
    image: '/images/Lounge%20Apex%202%20Final.webp',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'Kids Playground',
    image: '/images/Area%20Infantil%20Apex%202%20Final.webp',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'Serenity Space & Recovery Area',
    image: '/images/AS%20V2%20Apex%202%20Final.webp',
    className: 'md:col-span-1 md:row-span-1'
  }
];

interface AmenitiesSectionProps {
  onSelectImage: (image: string) => void;
}

const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ onSelectImage }) => {
  return (
    <section id="amenities" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#F97316] font-sans mb-4">Áreas Sociales</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Con sus amenidades enfocadas en el Wellness, busca desarrollar un estilo de vida de calidad y sostenible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto auto-rows-[250px] px-4">
        {amenitiesData.map((item, index) => (
          <div 
            key={index} 
            onClick={() => onSelectImage(item.image)}
            className={`relative rounded-2xl overflow-hidden group shadow-lg cursor-pointer ${item.className}`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelectImage(item.image)}
            aria-label={`Ver imagen de ${item.title}`}
          >
            <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.image}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1839]/90 via-[#0c1839]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <div className="w-10 h-1 bg-[#F97316] rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmenitiesSection;